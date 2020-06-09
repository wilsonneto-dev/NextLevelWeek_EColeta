import Point from "../models/entities/Point.ts";
import IPointRepository from "../repositories/interfaces/IPointRepository.ts";
import PointRepository from "../repositories/sqlite/PointRepository.ts";

class PointService {
  private _pointRepository: IPointRepository = new PointRepository();

  async create(point: Point): Promise<Array<Point>> {
    await this._pointRepository.create(point);
    return new Array<Point>();
  }
}

export default PointService;
