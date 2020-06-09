import { db, dex } from "../../database/connection.ts";

import IPointRepository from "../interfaces/IPointRepository.ts";
import Point from "../../models/entities/Point.ts";

class PointRepository implements IPointRepository {
  async create(point: Point): Promise<Point> {
    const insertSql = dex.queryBuilder()
      .insert({
        image: point.image,
        name: point.name,
        email: point.email,
        whatsapp: point.whatsapp,
        latitude: point.latitude,
        longitude: point.longitude,
        city: point.city,
        uf: point.uf,
      })
      .into("points")
      .returning("id")
      .toString();

    const res = await db.query(insertSql);

    for (let [id] of res) {
      console.log(id);
    }

    return point;
  }
}

export default PointRepository;
