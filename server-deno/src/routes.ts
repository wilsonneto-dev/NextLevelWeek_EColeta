import { Router } from "oak";

import ItemsController from "./controllers/itemsController.ts";
import PointsController from "./controllers/PointsController.ts";
import PointsValidator from "./middlewares/PointsValidator.ts";

const router = new Router();

const itemsController = new ItemsController();
const pointsController = new PointsController();
const pointsValidator = new PointsValidator();

const testRoute = ({ response }: { response: any }) => {
  response.body = { success: true, message: "running ok!" };
};

router
  .get("/test", testRoute)
  .get("/items", itemsController.list.bind(itemsController))
  .post(
    "/points",
    pointsValidator.validate,
    pointsController.create.bind(pointsController),
  );

export default router;
