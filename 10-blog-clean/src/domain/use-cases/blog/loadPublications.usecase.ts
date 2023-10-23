import { PublicationsService } from "../../../services/publications.service";

export class LoadPublicationsUseCase {
  static execute() {
    return PublicationsService.findAll();
  }
}
