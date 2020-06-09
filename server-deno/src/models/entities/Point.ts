class Point {
  id?: number;
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  latitude: number;
  longitude: number;
  city: string;
  uf: string;

  constructor(initial: {
    image: string;
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
  }) {
    this.image = initial.image;
    this.name = initial.name;
    this.email = initial.email;
    this.whatsapp = initial.whatsapp;
    this.latitude = initial.latitude;
    this.longitude = initial.longitude;
    this.city = initial.city;
    this.uf = initial.uf;
  }
}

export default Point;
