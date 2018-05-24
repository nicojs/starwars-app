import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { CharacterPageComponent } from './character-page.component';
import { CharacterListComponent } from '../character-list/character-list.component';
import { EditCharacterComponent } from '../edit-character/edit-character.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterJson } from '../models/Character';
import { FormsModule } from '@angular/forms';


describe('Character page', () => {
  let component: CharacterPageComponent;
  let fixture: ComponentFixture<CharacterPageComponent>;
  let nativeElement: HTMLElement;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CharacterPageComponent,
        CharacterListComponent,
        EditCharacterComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterPageComponent);
    await fixture.detectChanges();
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    const injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch characters onInit', async () => {
    const handle = httpMock.expectOne('http://localhost:3111/characters');
    expect(handle.request.method).toBe('GET');
    const body: CharacterJson[] = [
      { id: 0, name: 'foobar', age: 155 }
    ];
    handle.flush(body);
    fixture.detectChanges();
    expect(nativeElement.querySelectorAll('tbody tr').length).toBe(1);
  });

});
