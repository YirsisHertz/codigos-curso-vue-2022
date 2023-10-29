import { PublicationStorageService } from "@/services/publicationStorage.service";
import { PublicationStorageModel } from "../../../database/blog/publicationStorage.model";

export class DownloadImageUrlUseCase {
  static execute(file: File) {
    return new PublicationStorageService(
      new PublicationStorageModel()
    ).getDownload(file);
  }
}
