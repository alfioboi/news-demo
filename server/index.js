import Parser from 'rss-parser';
import { interval, mergeMap } from 'rxjs';

let parser = new Parser();

interval(10000).pipe(
  mergeMap(() => parser.parseURL(`https://news.google.com/rss?hl=it&gl=IT&ceid=IT:it`).then(
    (feeds) => console.log(feeds, `Feeds`)
  ))
).subscribe();
