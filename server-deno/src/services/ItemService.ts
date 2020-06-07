import Item from "../models/entities/Item.ts";
import IItemRepository from "../repositories/interfaces/IItemRepository.ts";
import ItemRepository from "../repositories/sqlite/ItemRepository.ts";

class ItemService {
  private _itemRepository: IItemRepository = new ItemRepository();

  async getAll(): Promise<Array<Item>> {
    return this._itemRepository.getAll();
  }
}

export default ItemService;
