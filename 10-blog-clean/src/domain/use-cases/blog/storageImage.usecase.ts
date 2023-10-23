import { PublicationStorageService } from "@/services/publicationStorage.service";

export class StorageImageUseCase {
  static execute(file: File) {
    return PublicationStorageService.storage(file);
  }
}
