import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetsComponent } from './dashboard/bets/bets.component';
import { DepositComponent } from './dashboard/deposit/deposit.component';
import { IndexComponent } from './dashboard/index/index.component';
import { IndexxComponent} from './dashboard/indexx/indexx.component';
import { WinningsComponent } from './dashboard/winnings/winnings.component';
import { WithdrawalsComponent } from './dashboard/withdrawals/withdrawals.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { Contact2Component } from './dashboard/contact2/contact2.component';
import { FaqComponent } from './dashboard/faq/faq.component';
import { MediaRetailComponent } from './dashboard/media-retail/media-retail.component';
import { MediaComponent } from './dashboard/media/media.component';
import { ResultComponent } from './dashboard/result/result.component';
import { SingleLotteryMainComponent } from './dashboard/single-lottery-main/single-lottery-main.component';
import { SingleLotteryComponent } from './dashboard/single-lottery/single-lottery.component';
import { SingleLottery1Component } from './dashboard/single-lottery1/single-lottery1.component';
import { SingleLottery3Component } from './dashboard/single-lottery3/single-lottery3.component';
import { OwlVideoPlayComponent } from './dashboard/owl-video-play/owl-video-play.component';

@NgModule({
  declarations: [
    AppComponent,
    BetsComponent,
    DepositComponent,
    IndexComponent,
    IndexxComponent,
    WinningsComponent,
    WithdrawalsComponent,
    AboutComponent,
    ContactComponent,
    Contact2Component,
    FaqComponent,
    MediaRetailComponent,
    MediaComponent,
    ResultComponent,
    SingleLotteryComponent,
    SingleLottery1Component,
    SingleLottery3Component,
    SingleLotteryMainComponent,
    OwlVideoPlayComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
