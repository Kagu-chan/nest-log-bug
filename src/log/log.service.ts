import { Injectable, LoggerService } from "@nestjs/common";

@Injectable()
export class LogService implements LoggerService {
  public readonly scope: string;
  constructor() {
    this.scope = Math.random().toString();

    console.log('Created Log, scope:', this.scope);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(this.scope, message, ...optionalParams);
  }

  log(message: any, ...optionalParams: any[]) {
    console.log(this.scope, message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(this.scope, message, ...optionalParams);
  }
}
