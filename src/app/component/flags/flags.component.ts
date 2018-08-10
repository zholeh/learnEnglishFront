import { GlobalDataService } from '../../services/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  private changeLanguage(lang: string) {
    this.data.setLocalStorage('userLanguage', lang);
    this.data.changeLanguage(lang);
  }

  constructor(private data: GlobalDataService) { }

  ngOnInit() {
  }

}
