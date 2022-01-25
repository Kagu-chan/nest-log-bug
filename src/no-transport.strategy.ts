import { CustomTransportStrategy, Server } from '@nestjs/microservices';

/**
 * NoTransportStrategy class to disable any network transport
 *
 * @class
 */
export class NoTransportStrategy extends Server implements CustomTransportStrategy {
  public async listen(_: () => void): Promise<void> {
    /* NOP */
  }
  public async close(): Promise<void> {
    /* NOP */
  }
}
