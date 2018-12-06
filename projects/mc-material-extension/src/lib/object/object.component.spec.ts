import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ObjectComponent } from './object.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('Object component test', () => {
  let fixture: ComponentFixture<ObjectComponent>;
  let component: ObjectComponent;
  let element: HTMLElement;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ObjectComponent]
    });
    fixture = TestBed.createComponent(ObjectComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));
  it('should use row as default direction', async(() => {
    expect(component.direction).toEqual('row');
  }));

  it('should override direction if it is passed', async(() => {
    component.direction = 'column';
    fixture.detectChanges();
    expect(component.direction).toEqual('column');
  }));
  it('should show key and value in template', async(() => {
    component.key = 'my';
    component.value = 'change';
    expect(component.key).toEqual('my');
    expect(component.value).toEqual('change');
  }));
});
