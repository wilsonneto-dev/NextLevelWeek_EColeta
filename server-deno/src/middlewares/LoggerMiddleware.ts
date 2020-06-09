export default class LoggerMiddleware {
  async log({ request }: { request: any }, next: Function): Promise<void> {
    console.log(`${request.method} ${request.url}`);
    await next();
  }
}
