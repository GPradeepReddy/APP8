import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AlertComponent } from ".././alert/alert.component";

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.sass']
})
export class DynamicComponent implements OnInit {
  message: string = "Dynamic component!!!"
  @ViewChild("messageContainer", { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  CreateComponent() {
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    this.entry.clear();
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = this.message;
    
  }

  DestroyComponent() {
    this.componentRef.destroy();
  }

}
