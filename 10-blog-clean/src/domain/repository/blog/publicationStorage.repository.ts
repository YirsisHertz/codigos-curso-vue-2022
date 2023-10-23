export abstract class PublicationStorageRepository {
  abstract storage(file: File): any;
  abstract getDownload(file: File): Promise<string>;
}
