import { Logger, Module } from '@nestjs/common';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [LogModule],
})
export class App1Module {
  private logger = new Logger(App1Module.name);

  constructor() {
    this.logger.log('App Module 1');

    setTimeout(() => this.logger.log('App Module 1 after 10 sec'), 10000);
  }
}
