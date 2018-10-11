import { Menubar, MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  menuBar: Array<Menubar> = [];
  constructor(private menuService: MenuService) {
    this.menuService.getMenus().subscribe(data => {
      console.log(data);
      this.menuBar = data;
    });
  }

  alertme(name: string) {
    alert(name + ' clicked');
  }

  ngOnInit() {}
}
