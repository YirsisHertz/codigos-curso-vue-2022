import { Timestamp } from "firebase/firestore";
import type { PublicationEntity } from "../../domain/entities/publications.entity";

interface CreatePublication {
  body: string;
  img: string;
}

export const formatPublicationDataSourceAdapter = (
  data: CreatePublication,
  uid: string
): PublicationEntity => {
  return {
    uid,
    active: true,
    body: data.body,
    createdAt: Timestamp.now(),
    img: data.img,
  };
};
