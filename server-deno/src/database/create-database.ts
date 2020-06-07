import { db, dex } from "./connection.ts";

let tablePointQuery = dex.schema.createTable("points", (table: any) => {
  table.increments("id").primary();
  table.string("image");
  table.string("name");
  table.string("email");
  table.string("whatsapp");
  table.decimal("latitude");
  table.decimal("longitude");
  table.string("city");
  table.string("uf");
}).toString();

let tableItemQuery = dex.schema.createTable("items", (table: any) => {
  table.increments("id").primary();
  table.string("image");
  table.string("title");
}).toString();

let tablePointItemQuery = dex.schema.createTable(
  "point_items",
  (table: any) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
  },
).toString();

let insertItemsQuery = dex.queryBuilder()
  .insert([
    { title: "Lâmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papeis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletrônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "Óleo de Cozinha", image: "oleo.svg" },
  ])
  .into("items")
  .toString();

console.log("Creating table: Point");
console.log(db.query(tablePointQuery));

console.log("Creating table: Item");
console.log(db.query(tableItemQuery));

console.log("Creating table: Point Items");
console.log(db.query(tablePointItemQuery));

console.log("Seeding table: Items");
console.log(db.query(insertItemsQuery));
