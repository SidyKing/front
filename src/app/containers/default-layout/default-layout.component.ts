import {Component} from '@angular/core';
import { navItems } from '../../_nav';
let role= sessionStorage.getItem("role");
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  public role = role;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
