import ItemService from "../services/ItemService.ts";

class ItemsController {
  private _itemService: ItemService;

  constructor() {
    this._itemService = new ItemService();
  }

  async list({ response }: { response: any }) {
    console.log(this);
    const items = await this._itemService.getAll();
    response.body = items;
  }
}

export default ItemsController;
