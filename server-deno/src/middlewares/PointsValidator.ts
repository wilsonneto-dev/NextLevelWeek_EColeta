import { validate } from "validasaur";
import { required, isNumeric, isString, lengthBetween } from "validasaur-rules";

export default class ItemValidator {
  async validate(
    { request, response }: { request: any; response: any },
    next: Function,
  ): Promise<void> {
    const inputs = await request.body();

    const [passes, errors] = await validate(inputs.value, {
      name: [required, isString],
      email: [required, isString],
      whatsapp: [required, isString],
      latitude: [required, isNumeric],
      longitude: [required, isNumeric],
      city: [required, isString],
      uf: [required, isString, lengthBetween(2, 2)],
    }, {
      messages: {
        "name": "Verifique o campo 'name'.",
        "email": "Verifique o campo 'email'.",
        "whatsapp": "Verifique o campo 'whatsapp'.",
        "latitude": "Verifique o campo 'latitude'.",
        "longitude": "Verifique o campo 'longitude'.",
        "city": "Verifique o campo 'city'.",
        "uf": "Verifique o campo 'uf'.",
      },
    });

    if (!passes) {
      response.body = { errors };
      return;
    }

    await next();
  }
}
