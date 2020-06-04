import { Request, Response } from 'express';

import knex from '../database/connection';

class PointsController {
  async list(request: Request, response: Response) {
    // const items = await knex('points').select('*');

    const { city, uf, items } = request.query;
    const itemsIds = String(items)
      .split(',')
      .map((i: string) => Number(i.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', itemsIds)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*');

    return response.json(points);
  }

  async get(request: Request, response: Response) {
    const { id } = request.params;
    const point = await knex('points').where({ id }).select('*').first();

    if (!point)
      return response
        .status(404)
        .json({ success: false, message: 'Not Found' });

    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id);

    return response.json({ ...point, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: 'image-fake',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx('points').insert(point);

    const [point_id] = insertedIds;

    const pointItems = items.map((item_id: number) => ({ item_id, point_id }));

    const pointItemsInsertedIds = await trx('point_items').insert(pointItems);

    await trx.commit();

    return response.json({ id: point_id, ...point });
  }
}

export default PointsController;
