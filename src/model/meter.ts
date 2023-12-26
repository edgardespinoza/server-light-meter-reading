export class Meter {
  id?: string;
  name: string;
  measure: number;
  createAt: Date;

  constructor(name: string, measure: number, createAt: Date, id?: string) {
    this.id = id;
    this.name = name;
    this.measure = measure;
    this.createAt = createAt;
  }
}
