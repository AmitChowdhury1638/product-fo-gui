import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css']
})
export class ChangeLanguageComponent implements OnInit {

  supportLanguages = ['english', 'bangla', 'marathi', 'hindi'];
  
  constructor(private translateService: TranslateService,
              private messengerService: MessengerService) {

    //this.translateService.addLangs(this.supportLanguages);
    //this.translateService.setDefaultLang('hindi');

   }

  ngOnInit(): void {
    
  }

  selectLang(lang: string){
    this.messengerService.sendLanguage(lang)
    console.log(lang)
    this.translateService.use(lang)
    
  }

}
