export default class Dieta{
  #id;
  #calorias;
  #proteinas;
  
  constructor(id, calorias, proteinas){
    this.#id = id;
    this.#calorias = calorias;
    this.#proteinas = proteinas;
  }

  get id(){
    return this.#id;
  }
  set id(nId){
    this.#id = nId;
  }

  get calorias() {
    return this.#calorias;
  }
  set calorias(nCalorias){
    this.#calorias = nCalorias;
  }

  get proteinas() {
    return this.#proteinas;
  }
  set proteinas(nProteinas){
    this.#proteinas = nProteinas;
  }
  
}