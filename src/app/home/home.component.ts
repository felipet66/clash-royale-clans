import { Component, OnInit } from '@angular/core';
import { ClansService } from '../clans.service';
import { Clan } from '../model/clan.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ClansService ]
})
export class HomeComponent implements OnInit {

  public clan: Clan[];

  constructor(private clansService: ClansService) { }

  ngOnInit() {
    this.onSubscribe();
  }

  onSubscribe() {
    const nome = 'OFF.GAMING';
    this.clansService.getClanPorNome(nome).subscribe(result => {
      console.log(result);
      this.clan = result;
    });
  }

}
