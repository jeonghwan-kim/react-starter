export default class User {
  id: number;
  name: string;
  
  constructor(row: any = {}) {
    this.id = row.id || 0;
    this.name = row.name || "";
  }
}
