export default class User {
  constructor(row = {}) {
    this.id = row.id || 0;
    this.name = row.name || "";
  }
}
