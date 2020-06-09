import Point from '../../models/entities/Point.ts';

interface IPointRepository {
  get(id: number): Promise<Point>;
  getAll(): Promise<Array<Point>>;
  create(point: Point): Promise<Point>;
}

export default IPointRepository;
