import {Component} from '@angular/core';
import { navItems } from '../../_nav';
let role= sessionStorage.getItem("role");
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  private userRole = localStorage.getItem("role");
  public sidebarMinimized = (this.userRole == "ETUDIANT")? true:false;
  public navItems = navItems;
  public role = role;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
