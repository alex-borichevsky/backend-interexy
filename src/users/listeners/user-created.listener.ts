import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../events/user-created.event';

@Injectable()
export class OrderCreatedListener {
  @OnEvent('user.created')
  handleOrderCreatedEvent(event: UserCreatedEvent) {
    console.log(event);
  }
}