export default class Consulta{
  #id;
  #pagamento;
  #data;

  constructor(id, pagamento, data){
    this.#id = id;
    this.#pagamento = pagamento;
    this.#data = data;
  }

  get id() {
    return this.#id;
  }
  set id(nId){
    this.#id = nId;
  }

  get pagamento() {
    return this.#pagamento;
  }
  set pagamento(nPagamento){
    this.#pagamento = nPagamento;
  }

  get data() {
    return this.#data;
  }
  set data(nData){
    this.#data = nData;
  }

}