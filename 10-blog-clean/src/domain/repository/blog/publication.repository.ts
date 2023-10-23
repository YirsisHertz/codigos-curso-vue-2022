import type { PublicationEntity } from "../../entities/publications.entity";

export abstract class PublicationRepository {
  abstract findAll(): any;
  abstract create(publication: PublicationEntity): any;
}
