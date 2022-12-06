import Parser from 'rss-parser';
import { timer, mergeMap } from 'rxjs';
import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', (ws) => {
  ws.send(JSON.stringify('Welcome to the chat, enjoy :)'));
});
wss.setMaxListeners(0)

let parser = new Parser();

timer(0, 10000).pipe(
  mergeMap(() => parser.parseURL(`https://news.google.com/rss?hl=it&gl=IT&ceid=IT:it`).then(
    (feeds) => {
      wss.clients.forEach((client) => {
        if (client !== wss && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(feeds));
          console.log(`Inviati i feed`, feeds)
        }
      });
      return feeds;
    })
  )).subscribe();
