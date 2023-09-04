import Alimento from "./Classes/Alimento.js";
import Cliente from "./Classes/Cliente.js";
import Nutricionista from "./Classes/Nutricionista.js"
import Consulta from "./Classes/Consulta.js"
import Dieta from "./Classes/Dieta.js"
import Refeicao from "./Classes/Refeicao.js"


let alimento1 = new Alimento(1, "Abacate", "Fruta", "Vitamina C");
console.log(alimento1.id, alimento1.nome, alimento1.tipo, alimento1.nutriente)

let cliente1 = new Cliente(1, "Fulano", 15, "fulano@gmail.com");
console.log(cliente1.id, cliente1.nome, cliente1.idade, cliente1.email);

let consulta1 = new Consulta(1, "R$ 100,00", "04/09/2023");
console.log(consulta1.id, consulta1.pagamento, consulta1.data);

let dieta1 = new Dieta(1, "calorias", "Vegetal");
console.log(dieta1.id, dieta1.calorias, dieta1.proteinas);

let nutri1 = new Nutricionista(1, "Sicrano", 23, "Nutri@gmail.com");
console.log(nutri1.id, nutri1.nome, nutri1.idade, nutri1.email);

let refeicao1 = new Refeicao(1, "12:20:00", "Almoço");
console.log(refeicao1.id, refeicao1.horario, refeicao1.tipo);



