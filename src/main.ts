import { NestFactory } from '@nestjs/core';
import { LogService } from './log/log.service';
import { App1Module } from './m1/app1.module';
import { App2Module } from './m2/app2.module';
import { NoTransportStrategy } from './no-transport.strategy';

async function startA() {
  console.log('Create App 1');
  const app = await NestFactory.createMicroservice(App1Module, {
    bufferLogs: true,
    strategy: new NoTransportStrategy(),
  });

  setTimeout(() => {
    const log = app.get(LogService);
    app.useLogger(log);
    app.flushLogs();

    app.init();
    console.log('Created App 1', log.scope);
  }, 3000);
}

async function startB() {
  console.log('Create App 2');
  const app = await NestFactory.createMicroservice(App2Module, {
    bufferLogs: true,
    strategy: new NoTransportStrategy(),
  });

  const log = app.get(LogService);
  app.useLogger(log);
  app.flushLogs();

  app.init();
  console.log('Created App 2', log.scope);
}

async function run() {
  await startA();
  await startB();

  // while (true) { }
}
run();
