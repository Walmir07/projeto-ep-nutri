export default class Refeicao{
  #id;
  #horario;
  #tipo;

  constructor(id, horario, tipo){
    this.#id = id;
    this.#horario = horario;
    this.#tipo = tipo;
  }

  get id() {
    return this.#id;
  }
  set id(nId){
    this.#id = nId;
  }

  get horario() {
    return this.#horario;
  }
  set horario(nHorario){
    this.#horario = nHorario;
  }

  get tipo() {
    return this.#tipo;
  }
  set tipo(nTipo){
    this.#tipo = nTipo;
  }
  
}