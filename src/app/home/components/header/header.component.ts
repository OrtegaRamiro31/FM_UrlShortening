import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public hideMenu: boolean = true;

  setHideMenu(): void {
    this.hideMenu = !this.hideMenu;
  }
}
