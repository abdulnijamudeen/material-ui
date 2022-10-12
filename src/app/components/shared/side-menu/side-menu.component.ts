import { Component, OnInit } from '@angular/core';
import { SidemenuService } from 'src/app/service/sidemenu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(private sidemenuService: SidemenuService) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidemenuService.toggle();
  }

}
