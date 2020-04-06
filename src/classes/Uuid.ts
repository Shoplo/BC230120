export default class Uuid {
  public static getInstance(): Uuid {
    if (!Uuid.instance) {
      Uuid.instance = new Uuid();
    }

    return Uuid.instance;
  }

  private static instance: Uuid;
  private lastId = 0;

  private constructor() {}

  public getUuid(): string {
    this.lastId = this.lastId + 1;
    return this.lastId.toString();
  }
}
