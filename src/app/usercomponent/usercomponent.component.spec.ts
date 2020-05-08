import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomponentComponent } from './usercomponent.component';
import { UserService } from '../user.service';

describe('UsercomponentComponent', () => {
  let component: UsercomponentComponent;
  let fixture: ComponentFixture<UsercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the value from the service',()=>{
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(component.user.name)
  })
  it('should return name as navin in element h2 when loggin is true',()=>{
    component.isLoggedIn = true;
    fixture.detectChanges();
    const loginelement: HTMLElement = fixture.nativeElement;
    const h2 = loginelement.querySelector('h2');
    expect(h2.textContent).toContain(component.user.name);
  })

  it('should not return name when isloggedIn is false',()=>{
    const loginelement: HTMLElement = fixture.nativeElement;
    const h2 = loginelement.querySelector('h2');
    expect(h2.textContent).not.toContain(component.user.name);
  })

});
