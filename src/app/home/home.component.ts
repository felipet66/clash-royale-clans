import { Component, OnInit } from '@angular/core';
import { ClansService } from '../clans.service';
import { Clan } from '../model/clan.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ClansService ]
})
export class HomeComponent implements OnInit {

  public clan: Clan[];
  public nomeClan: string;
  public messageError: string;
  public formulario: FormGroup = new FormGroup({
    'nome': new FormControl(null, [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ])
  });

  constructor(private clansService: ClansService) { }

  ngOnInit() {
  }

  public buscarClansNome(): void {
    if ( this.formulario.status === 'INVALID') {
      this.formulario.get('nome').markAsTouched();
    }
    this.getClanPorNome(this.formulario.value.nome);
  }

  getClanPorNome(termoDaBusca: string): void {
    this.clansService.getClanPorNome(termoDaBusca).subscribe
      (result => {
        if ( result.length === 0 ) {
          this.messageError = 'Não foi possível encontrar nenhum clan com este nome!';
          this.clan = [];
        } else {
          this.messageError = '';
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
  }
}
