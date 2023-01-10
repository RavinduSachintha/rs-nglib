import { Component, Input, OnInit } from '@angular/core';
import { HeaderItem } from './header-item';

@Component({
  selector: 'rs-nglib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerItems: HeaderItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
