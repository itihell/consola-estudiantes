import fs from "fs/promises";
export default class Model {
  #table = "models";
  getTable() {
    return this.#table;
  }
  async save(payload) {
    await fs.writeFile(
      `db/${this.getTable()}.json`,
      JSON.stringify(payload, null, 2),
    );
    return payload;
  }

  async load() {
    const data = await fs.readFile(`${this.getTable()}.json`, "utf-8");
    return JSON.parse(data);
  }
}
