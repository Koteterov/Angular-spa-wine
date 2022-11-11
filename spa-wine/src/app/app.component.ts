import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  MessageBusService,
  MessageType,
} from './core/services/message-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spa-wine';

  message!: string;
  isMessageError!: boolean;

  private subscription!: Subscription;

  constructor(private messageBus: MessageBusService) {}

  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage$.subscribe(
      (newMessage) => {
        console.log(newMessage);
        this.message = newMessage?.text || '';
        this.isMessageError = newMessage?.type == MessageType.Error;

        if (this.message) {
          setTimeout(() => {
            this.messageBus.clear();
          }, 3000);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

