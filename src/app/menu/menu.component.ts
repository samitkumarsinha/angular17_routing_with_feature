import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, Comp1Component, Comp2Component, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
