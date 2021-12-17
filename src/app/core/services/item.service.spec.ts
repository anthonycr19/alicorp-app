import { TestBed, async } from '@angular/core/testing';

import { ItemService } from './item.service';

import { Router} from '@angular/router';

import { Location } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('ItemService', () => {
  let router: Router;
  let service: ItemService;
  let location: Location;


  beforeEach(async() => {
    TestBed.configureTestingModule({

      imports:[
        FormsModule,
      ]
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
