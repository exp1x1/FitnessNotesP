import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, DrawerModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  visible: boolean = false;

  // closeCallback(e): void {
  //   this.drawerRef.close(e);
  // }

  showDrawer() {
    this.visible = true;
  }
}
