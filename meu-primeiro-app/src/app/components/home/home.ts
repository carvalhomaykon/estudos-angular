import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

// Criar estados. Por exemplo, o título que vai aparecer no template e etc
export class Home {
  //meuBooleano = false;  
  private enviaFormularioService = inject(EnviaFormulario);
  name = "Maykon"
  idButton = "fdkdjd"
  deveMostrarTitulo = false;
  listItems = ["um", "dois", "tres"]

  @Input("name") testee!: string;
  @Output() emitindoValorName = new EventEmitter<string>();

  submit(){
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("Enviando");
  }

  //atualizaBoleano(valor:boolean){
  //  this.meuBooleano = valor;
  //}
}
