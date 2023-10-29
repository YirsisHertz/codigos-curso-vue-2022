import type { PublicationEntity } from "../domain/entities/publications.entity";
import { PublicationRepository } from "../domain/repository/blog/publication.repository";

export class PublicationsService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  findAll() {
    return this.publicationRepository.findAll();
  }

  create(publication: PublicationEntity) {
    return this.publicationRepository.create(publication);
  }
}
