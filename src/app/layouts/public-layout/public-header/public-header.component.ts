import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import { faHouse, faStar, faTag, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [NgIf, FontAwesomeModule, RouterLink],
  templateUrl: 'public-header.component.html'
})

export class PublicHeaderComponent{
  isOpen: boolean = false;
  faHouse = faHouse;
  faStar = faStar;
  faTag = faTag;
  faCircleInfo = faCircleInfo;
}
