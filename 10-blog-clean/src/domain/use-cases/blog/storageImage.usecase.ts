import { PublicationStorageService } from "@/services/publicationStorage.service";
import { PublicationStorageModel } from "../../../database/blog/publicationStorage.model";

export class StorageImageUseCase {
  static execute(file: File) {
    return new PublicationStorageService(new PublicationStorageModel()).storage(
      file
    );
  }
}
