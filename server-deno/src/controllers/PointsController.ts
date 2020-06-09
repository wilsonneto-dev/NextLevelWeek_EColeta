import PointService from "../services/PointService.ts";
import Point from "../models/entities/Point.ts";

class PointsController {
  private _pointService: PointService;

  constructor() {
    this._pointService = new PointService();
  }

  async create({ response, request }: { response: any; request: any }) {
    const body = await request.body();
    const inputs = body.value;

    const point = new Point({
      name: String(inputs.name),
      city: String(inputs.city),
      email: String(inputs.email),
      image: "example-image",
      latitude: Number(inputs.latitude),
      longitude: Number(inputs.longitude),
      uf: String(inputs.uf),
      whatsapp: String(inputs.whatsapp),
    });

    await this._pointService.create(point);
    response.body = { success: true, point };
  }
}

export default PointsController;
