import { defineStore } from "pinia";
import { reactive } from "vue";
import { onSnapshot } from "firebase/firestore";
import Swal from "sweetalert2";

import { LoadPublicationsUseCase } from "../../domain/use-cases/blog/loadPublications.usecase";
import { CreatePublicationUseCase } from "../../domain/use-cases/blog/createPublication.usecase";
import { formatPublicationAdapter } from "../../adapters/presenters/formatPublication";
import { StorageImageUseCase } from "../../domain/use-cases/blog/storageImage.usecase";
import { DownloadImageUrlUseCase } from "../../domain/use-cases/blog/getDownloadImageURL.usecase";

import type {
  PublicationEntity,
  PublicationsEntity,
} from "../../domain/entities/publications.entity";

export const usePublications = defineStore("publications", () => {
  const data = reactive<PublicationsEntity>({
    publications: [],
  });

  const findAll = async () => {
    const query = await LoadPublicationsUseCase.execute();

    onSnapshot(query, (docs) => {
      data.publications = [];

      docs.forEach((publication) => {
        if (publication.exists()) {
          const formatPublication: PublicationEntity = formatPublicationAdapter(
            publication.data(),
            publication.id
          );

          data.publications.push(formatPublication);
        }
      });
    });
  };

  const create = async (publicationData: PublicationEntity) => {
    try {
      Swal.showLoading();

      await CreatePublicationUseCase.execute(publicationData);
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };

  const uploadImage = async (file: File) => {
    try {
      Swal.showLoading();

      await StorageImageUseCase.execute(file);
    } catch (error) {
      console.log(error);
      Swal.hideLoading();
    }
  };

  const getDownloadURL = async (file: File) => {
    try {
      const res = await DownloadImageUrlUseCase.execute(file);

      return res;
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };

  return {
    data,
    findAll,
    create,
    uploadImage,
    getDownloadURL,
  };
});
