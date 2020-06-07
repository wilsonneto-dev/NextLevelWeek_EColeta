import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

// items
routes.get("/items", itemsController.list);

// points
routes.get("/points", pointsController.list);
routes.get("/points/:id", pointsController.get);
routes.post("/points", upload.single("image"), pointsController.create);

export default routes;
