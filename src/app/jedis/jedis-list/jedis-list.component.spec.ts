import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JedisListComponent } from './jedis-list.component';
import { Jedi, createJedi } from '../../models/jedi';

describe('JedisListComponent', () => {
  let fixture: ComponentFixture<JedisListComponent>;
  let element: HTMLElement;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let sut: JedisListComponent;

  beforeEach(() => {
    // Arrange
    fixture = TestBed.createComponent(JedisListComponent);
    element = fixture.nativeElement;
    sut = fixture.componentInstance;
  });

  it('should show the given jedis', () => {
    // Act
    setJedis([createJedi({ name: 'Obiwan' }), createJedi({ name: 'Windu' })]);
    fixture.detectChanges();

    // Assert
    const actualListItems = [...element.querySelectorAll('li')];
    expect(actualListItems).toHaveSize(2);
    expect(actualListItems[0].innerText).toContain('Obiwan');
    expect(actualListItems[1].innerText).toContain('Windu');
  });

  it('should format the midichloreans correctly', () => {
    setJedis([createJedi({ midichlorean: 1_200 })]);

    fixture.detectChanges();
    expect(element.querySelector('li')?.innerText).toContain('1200 mc');
  });

  it('should not show an additional message for 2k midichloreans', () => {
    setJedis([createJedi({ midichlorean: 2_000 })]);
    fixture.detectChanges();
    expect(element.querySelector('li')?.innerText).not.toContain(
      "That's a lot"
    );
  });

  it('should show an additional message for 2.001 midichloreans', () => {
    setJedis([createJedi({ midichlorean: 2_001 })]);
    fixture.detectChanges();
    expect(element.querySelector('li')?.innerText).toContain("That's a lot");
  });

  function setJedis(jedis: Jedi[]) {
    fixture.componentRef.setInput('jedis', jedis);
  }
});
