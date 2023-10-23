import { PublicationStorageService } from "@/services/publicationStorage.service";

export class DownloadImageUrlUseCase {
  static execute(file: File) {
    return PublicationStorageService.getDownload(file);
  }
}
