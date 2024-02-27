import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Jedi } from './models/jedi';
import { CommonModule } from '@angular/common';
import { MidichloreanPipe } from './midichlorean/midichlorean.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { JedisListComponent } from './jedis-list/jedis-list.component';
import { AddJediComponent } from './add-jedi/add-jedi.component';
import { ToasterComponent } from './toaster/toaster.component';
import { JedisService } from './jedis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    MidichloreanPipe,
    TitleComponent,
    JedisListComponent,
    AddJediComponent,
    ToasterComponent,
  ]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'star-wars';

  allJedis?: Observable<Jedi[]>;
  jedisService: JedisService;
  constructor(jedisService: JedisService) {
    this.jedisService = jedisService;
    this.fillJedis();
  }
  today = new Date();

  x = 0;
  y = 0;

  private fillJedis() {
    this.allJedis = this.jedisService.getAll();
  }

  updatePosition(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  color = '';
  setColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.color = input.value;
  }

  ngAfterViewInit() {
    console.log('View init', this.toaster);
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  @ViewChild(ToasterComponent)
  toaster?: ToasterComponent;

  toUpperCase(str: string) {
    str.toUpperCase();
  }

  addJedi(jedi: Jedi) {
    this.jedisService.add(jedi).subscribe(() => {
      this.toaster?.notifyMessage('Jedi added', `Jedi ${jedi.name} added`);
      this.fillJedis();
    });
  }
}
