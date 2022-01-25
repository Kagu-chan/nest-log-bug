import { Logger, Module } from '@nestjs/common';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [LogModule]
})
export class App2Module {
  private logger = new Logger(App2Module.name);

  constructor() {
    this.logger.log('App Module 2');

    setTimeout(() => this.logger.log('App Module 2 after 10 sec'), 10000);
  }
}
