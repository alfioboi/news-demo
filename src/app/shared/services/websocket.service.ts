// src\app\services\websocket.service.ts
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({providedIn: 'root'})
export class WebsocketService {
  myWebSocket: WebSocketSubject<any> = webSocket('ws://localhost:8081');

  getFeeds() {
    this.myWebSocket.asObservable().subscribe((feeds) => {
      console.log(feeds, `Feeds ricevuti`);
    });
  }
}
