import { PublicationStorageRepository } from "../domain/repository/blog/publicationStorage.repository";

export class PublicationStorageService {
  constructor(
    private readonly publicationStorageRespository: PublicationStorageRepository
  ) {}

  storage(file: File) {
    return this.publicationStorageRespository.storage(file);
  }

  getDownload(file: File) {
    return this.publicationStorageRespository.getDownload(file);
  }
}
