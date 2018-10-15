import { Component, OnInit } from '@angular/core';
import { ClansService } from '../clans.service';
import { Clan } from '../model/clan.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css'],
  providers: [ ClansService ]
})
export class ClanComponent implements OnInit {
  public clan: Clan[];
  public members: Array<object>;

  constructor(private route: ActivatedRoute, private clansService: ClansService) { }

  ngOnInit() {
    this.getClanPorTag();
  }

  getClanPorTag(): void {
    this.route.params.subscribe((parametro: any) => {
      this.clansService.getClanPorTag(parametro.tag).subscribe(
        result => {
        if ( result.length === 0 ) {
          console.log('NENHUM CLAN');
          this.members = [];
          this.clan = [];
        } else {
          this.members = result.members;
          this.clan = result;
        }
      },
      (erro: any) => {
        console.log( erro.message );
      },
      () => {
        // console.log( 'complete' );
      }
    );
    });
  }

}
