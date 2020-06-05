interface IConfiguration {
  appHost: string;
  appPort: number;
}

const configuration: IConfiguration = {
  appHost: Deno.env.get("APP_HOST") || "127.0.0.1",
  appPort: Number(Deno.env.get("APP_PORT")) || 3333,
};

export default configuration;
