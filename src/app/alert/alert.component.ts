import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit, OnChanges {
  @Input() message: string;
  todos: { name: string; category: string; }[];
  completed: { name: string; category: string; }[];
  
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        name: 'Angular',
        category: 'Web Development'
      },
      {
        name: 'Flexbox',
        category: 'Web Development'
      },
      {
        name: 'iOS',
        category: 'App Development'
      },
      {
        name: 'Java',
        category: 'Software development'
      }
    ];
    
    this.completed = [
      {
        name: 'Android',
        category: 'Mobile Development'
      },
      {
        name: 'MongoDB',
        category: 'Databases'
      },
      {
        name: 'ARKit',
        category: 'Augmented Reality'
      },
      {
        name: 'React',
        category: 'Web Development'
      }
    ];
  }

  ngOnChanges(cahanges: any) {
  }



}
