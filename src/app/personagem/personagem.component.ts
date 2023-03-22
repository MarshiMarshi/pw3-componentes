import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent {

  @Input() nome: string = "";
  @Input() reino: string = "";
  @Input() isVazio: boolean = false;
}
