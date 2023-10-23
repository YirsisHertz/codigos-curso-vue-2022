import { PublicationModel } from "../database/blog/publication.model";
import type { PublicationEntity } from "../domain/entities/publications.entity";

export class PublicationsService {
  static findAll() {
    return new PublicationModel().findAll();
  }

  static create(publication: PublicationEntity) {
    return new PublicationModel().create(publication);
  }
}
