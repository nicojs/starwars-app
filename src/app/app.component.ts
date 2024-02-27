import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Jedi } from './models/jedi';
import { CommonModule } from '@angular/common';
import { MidichloreanPipe } from './midichlorean/midichlorean.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { TitleComponent } from './title/title.component';
import { JedisListComponent } from './jedis-list/jedis-list.component';
import { AddJediComponent } from "./add-jedi/add-jedi.component";
import { ToasterComponent } from "./toaster/toaster.component";

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
  ],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'star-wars';

  today = new Date();

  x = 0;
  y = 0;

  allJedis: Jedi[] = [
    { name: 'Obiwan', midichlorean: 1_200 },
    { name: 'Luke Skywalker', midichlorean: 2_700 },
  ];

  updatePosition(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  color = '';
  setColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.color = input.value;
  }


  ngOnInit() {
    console.log('init', this.toaster);
  }

  ngAfterViewInit() {
    console.log('View init', this.toaster);
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  @ViewChild(ToasterComponent)
  toaster?: ToasterComponent;

  toUpperCase(str: string){
    str.toUpperCase();
  }

  addJedi(jedi: Jedi) {
    this.allJedis.push(jedi);
    this.toaster?.notifyMessage('Jedi added', `Jedi ${jedi.name} added`)
  }
}
