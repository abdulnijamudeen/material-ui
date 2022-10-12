import { SidemenuService } from '../service/sidemenu.service';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[matDrawerToggle]'
})
export class MatDrawerToggleDirective {

  constructor(private sidemenuService: SidemenuService) { }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    this.sidemenuService.toggle();
  }

}
