import { db, dex } from "../../database/connection.ts";

import IItemRepository from "../interfaces/IItemRepository.ts";
import Item from "../../models/entities/Item.ts";

class ItemRepository implements IItemRepository {
  async getAll(): Promise<Array<Item>> {
    const selectQuery = dex.select("id", "image", "title").from("items")
      .toString();
    const dataRows = [...db.query(selectQuery)];
    const items = dataRows.map((data) =>
      new Item(Number(data[0]), String(data[1]), String(data[2]))
    ) as Array<Item>;

    return items;
  }
}

export default ItemRepository;
