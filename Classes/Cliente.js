export default class Cliente{
  #id;
  #nome;
  #idade;
  #email;

  constructor(id, nome, idade, email){
    this.#id = id;
    this.#nome = nome;
    this.#idade = idade;
    this.#email = email;
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

  get idade() {
    return this.#idade;
  }
  set idade(nIdade){
    this.#idade = nIdade;
  }

  get email() {
    return this.#email;
  }
  set email(nEmail){
    this.#email = nEmail;
   }
  
}