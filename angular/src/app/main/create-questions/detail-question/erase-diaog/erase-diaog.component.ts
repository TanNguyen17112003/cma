import { Component, Output, OnInit } from '@angular/core';
// import { EventEmitter } from 'stream';
import { trigger, transition, style, animate } from '@angular/animations';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-erase-diaog',
  animations: [
    trigger('dialog', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),  // initial
        animate('0.5s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(0.5)', opacity: 0 }))  // final
      ])
    ])
  ],
  templateUrl: './erase-diaog.component.html',
  styleUrls: ['./erase-diaog.component.css']
})
export class EraseDiaogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() confirm = new EventEmitter<void>();
  @Output() deny = new EventEmitter<void>();
}
