// eslint-disable-next-line import/named
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public iconsBasePath = 'assets/icons.svg#';

  public items: any;

  private destroy$: Subject<null> = new Subject();

  constructor(private itemsService: ItemsService) {
    this.itemsService
      .fetchItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.items = Object.values(res.args);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
