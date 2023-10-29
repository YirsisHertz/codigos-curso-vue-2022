import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

import { PublicationRepository } from "../../domain/repository/blog/publication.repository";

import type { PublicationEntity } from "../../domain/entities/publications.entity";

import { firestore } from "../../config/firebaseConfig";

export class PublicationModel implements PublicationRepository {
  findAll() {
    return query(
      collection(firestore, "publications"),
      orderBy("createdAt", "desc"),
      limit(100),
      where("active", "==", true)
    );
  }

  create(publication: PublicationEntity) {
    const ref = collection(firestore, "publications");
    return addDoc(ref, publication);
  }
}
