export class AppConfigAdapter {
  get PORT(): number {
    return parseInt(process.env.PORT, 10);
  }

  get START_SWAGGER(): boolean {
    return process.env.START_SWAGGER == 'true';
  }

  get PRINT_ENV(): boolean {
    return process.env.PRINT_ENV == 'true';
  }
}
