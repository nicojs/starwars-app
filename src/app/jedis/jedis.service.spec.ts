import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { JedisService } from './jedis.service';
import { TestBed } from '@angular/core/testing';
import { Jedi, createJedi } from './jedi';
import { lastValueFrom } from 'rxjs';
import { BACKEND_URL } from '../injection-tokens';
import { appConfig } from '../app.config';

describe('JedisService', () => {
  let httpController: HttpTestingController;
  let sut: JedisService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        ...appConfig.providers,
        { provide: BACKEND_URL, useValue: 'http://my-api.com/api' },
        provideHttpClientTesting(),
      ],
    });
    sut = TestBed.inject(JedisService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should get all jedis with "getAll"', async () => {
    // Act
    const actualJedis = lastValueFrom(sut.getAll());
    const request = httpController.expectOne((req) => {
      return (
        req.url === 'http://my-api.com/api/jedis' &&
        req.headers.get('Auth-Token') === '123'
      );
    });
    const expectedJedis: Jedi[] = [createJedi({ name: 'Foo', midichlorean: 12 })];
    request.flush(expectedJedis);

    // Assert
    expect(await actualJedis).toEqual(expectedJedis);
  });
});
