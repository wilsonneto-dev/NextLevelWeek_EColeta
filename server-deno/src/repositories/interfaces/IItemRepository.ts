import Item from "../../models/entities/Item.ts";

interface IItemRepository {
  getAll: () => Promise<Array<Item>>;
}

export default IItemRepository;
