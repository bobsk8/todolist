import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
    $('[data-widget="treeview"] .nav-link').Treeview('init');
    $('body').Layout('fixLayoutHeight');
  }

}
