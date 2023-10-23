import type { Timestamp } from "firebase/firestore";
import type { DateTime } from "luxon";

export interface PublicationEntity {
  id?: string;
  uid: string;
  active: boolean;
  body: string;
  createdAt: Date | Timestamp | DateTime | string;
  img?: string;
}

export interface PublicationsEntity {
  publications: PublicationEntity[];
}
