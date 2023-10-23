import { PublicationsService } from "@/services/publications.service";
import type { PublicationEntity } from "../../entities/publications.entity";

export class CreatePublicationUseCase {
  static execute(publication: PublicationEntity) {
    return PublicationsService.create(publication);
  }
}
