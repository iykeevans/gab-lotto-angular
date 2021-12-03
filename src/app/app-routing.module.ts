import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
{path: 'about', component: AboutComponent},
{path: 'bets', component: BetsComponent},
{path: 'contact', component: ContactComponent},
{path: 'contact2', component: Contact2Component},
{path: 'deposit', component: DepositComponent},
{path: 'faq', component: FaqComponent},
{path: 'index', component: IndexComponent},
{path: 'indexx', component: IndexxComponent},
{path: 'media', component: MediaComponent},
{path: 'media-retail', component: MediaRetailComponent},
{path: 'result', component: ResultComponent},
{path: 'single-lottery', component: SingleLotteryComponent},
{path: 'single-lottery-main', component: SingleLotteryMainComponent},
{path: 'single-lottery1', component: SingleLottery1Component},
{path: 'single-lottery3', component: SingleLottery3Component},
{path: 'winnings', component: WinningsComponent},
{path: 'withdrawals', component: WithdrawalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
