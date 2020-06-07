import { Router } from "oak";

import ItemsController from "./controllers/itemsController.ts";

const router = new Router();

const itemsController = new ItemsController();

const testRoute = ({ response }: { response: any }) => {
  response.body = { success: true, message: "running ok!" };
};

router
  .get("/test", testRoute)
  .get("/items", itemsController.list.bind(itemsController));

export default router;
