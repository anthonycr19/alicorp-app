import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from '@angular/router';
import { DebugElement } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Observable, of, Subject } from 'rxjs';

//importing routes
import { routes } from './app-routing.module';

//importing components and services
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListItemComponent } from './features/item/list-item/list-item.component';
import { ItemService } from './core/services/item.service';



describe('AppComponent Routing Example', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let location: Location;
  let productService: ItemService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        ListItemComponent
      ],
      providers: [ItemService, {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(convertToParamMap({ title: 'Alicorp' }))
        }
      }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    productService = TestBed.get(ItemService);


    router.initialNavigation();
  });

  it('should test redirection to default path (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/introduction');
    });

  }));


  it('should navigate to path when clicked on link(fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    let links = debugElement.queryAll(By.directive(RouterLinkWithHref));
    links[1].nativeElement.click();
    tick();
    expect(location.path()).toBe('/listItems');
  }));

  it('should test component with Activated Route', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    router.navigate(['listItems']);
    tick();
    expect(location.path()).toBe('/listItems');
    fixture.detectChanges();
 
    let detailFixture = TestBed.createComponent(ListItemComponent);
    let detailComp = detailFixture.componentInstance;

    detailFixture.detectChanges();
    tick();
    
  }));



});