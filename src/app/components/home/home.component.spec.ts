import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CatalogService } from '../../services/catalog/catalog.service';
import { MockCatalogService } from '../../mocks/MockCatalogService.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [{ 
        provide: CatalogService,
        useClass: MockCatalogService
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Method seeAllProducts works as expected', () => {
    component.seeAllProducts();
    expect(component.isMenVisible).toBeTrue();
    expect(component.isWomenVisible).toBeTrue();
    expect(component.isChildrenVisible).toBeTrue();
  });
});
