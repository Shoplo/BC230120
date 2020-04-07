export default class Uuid {
  public static getInstance(): Uuid {
    if (!Uuid.instance) {
      Uuid.instance = new Uuid();
    }

    return Uuid.instance;
  }

  private static instance: Uuid;
  private lastNumber = 0;

  private constructor() {}

  public getUuid(): string {
    // Poor man's non RFC Uuid implementation
    this.lastNumber = this.lastNumber + 1;
    const timestamp = new Date().getTime();
    return this.lastNumber.toString() + timestamp;
  }
}
