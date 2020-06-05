import { Router } from "oak";

const router = new Router();

const testRoute = ({ response }: { response: any }) => {
  response.body = { success: true, message: "running ok!" };
};

router
  .get("/test", testRoute);

export default router;
