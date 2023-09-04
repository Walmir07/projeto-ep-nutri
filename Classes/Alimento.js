export default class Alimento {
  #id;
  #nome;
  #tipo;
  #nutriente;
  
  constructor(id, nome, tipo, nutriente){
    this.#id = id;
    this.#nome = nome;
    this.#tipo = tipo;
    this.#nutriente = nutriente;
  }

  get id() {
    return this.#id;
  }
  set id(nId){
    this.#id = nId;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nNome){
    this.#nome = nNome;
  }

  get tipo() {
    return this.#tipo;
  }
  set tipo(nTipo){
    this.#tipo = nTipo;
  }
  
  get nutriente() {
    return this.#nutriente;
  }
  set nutriente(nNutriente){
    this.#nutriente = nNutriente;
  }
  
}
