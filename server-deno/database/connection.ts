import Dex from "dex";
import { DB } from "sqlite";

const db = new DB("database.sqlite");
const dex = Dex({
  client: "sqlite3",
  useNullAsDefault: true,
});

export { db, dex };
