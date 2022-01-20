import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jewellery-gui';

  supportLanguages = ['en', 'fr', 'ta', 'hi'];

  constructor(private translateService: TranslateService){
  //  this.translateService.addLangs(this.supportLanguages);
//    this.translateService.setDefaultLang('hi');

    // const browserlang = this.translateService.getBrowserLang();
    // this.translateService.use(browserlang);

  }

}
