import type { DocumentData } from "firebase/firestore";
import type { PublicationEntity } from "../../domain/entities/publications.entity";

import { DateTime } from "luxon";

export const formatPublicationAdapter = (
  data: DocumentData,
  id: string
): PublicationEntity => {
  return {
    id,
    uid: data.uid,
    active: data.active,
    body: data.body,
    createdAt: DateTime.fromSeconds(data.createdAt.seconds).toLocaleString(
      DateTime.DATETIME_FULL
    ),
    img: data.img,
  };
};
