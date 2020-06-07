import { db, dex } from "./connection.ts";

let tableQuery = dex.schema.createTable("Users", (table: any) => {
  table.increments("userId").primary(); // auto incrementing primary key
  table.string("username", 32); // varchar of max length 32
  table.string("firstName"); // varchar of max length 255
  table.string("lastName"); // varchar of max length 255
  table.integer("age").unsigned().notNullable(); // unsigned, non-nullable integer
  table.decimal("funds", 2); // decimal with 2 point precision
  table.float("lastLoginTime"); // floating point number with 8 point precision
  table.date("joinDate"); // date only (not datetime)
  table.boolean("isNewUser"); // boolean
  table.text("description"); // text
  table.timestamps(null, true); // createdAt and updatedAt datetimes
}).toString();

console.log(tableQuery);
console.log(db.query(tableQuery));
