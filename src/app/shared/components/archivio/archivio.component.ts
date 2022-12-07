import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Feed } from '../../models/feed.model';
import { selectAllFeeds } from '../../store/notizie-selectors';
import { NotizieState } from '../../store/notizie.reducer';

@Component({
  selector: 'app-archivio',
  templateUrl: './archivio.component.html',
  styleUrls: ['./archivio.component.scss']
})
export class ArchivioComponent implements AfterViewInit {
  displayedColumns = ["guid", "isoDate", "title"];
  dataSource!: MatTableDataSource<Feed>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(
    private store: Store<NotizieState>,
    private router: Router
  ) {
    this.store.pipe(
      select(selectAllFeeds)
    ).subscribe((feeds) => {
      if(feeds?.length) {
        this.dataSource = new MatTableDataSource(feeds);
      }
    })
  }
  ngAfterViewInit() {
    if(this.dataSource) {
      this.dataSource.paginator = this?.paginator;
      this.dataSource.sort = this?.sort;
    }
  }
  vaiADettaglio(arg0: string) {
    this.router.navigate(['dettaglio', arg0]);
  }
}
