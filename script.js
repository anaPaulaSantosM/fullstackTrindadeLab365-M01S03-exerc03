const listaTarefas = ["Correr", "Beber água", "Marcar consulta", "Ler", "Escrever e-mail", "Cortar cabelo", "Passear com cachorro"];
console.log(listaTarefas);

function buscaTarefa(){
let tarefa = listaTarefas.find(tarefa =>{
    return tarefa == "Ler";
})

console.log(tarefa);
}
buscaTarefa();

function alteraTarefa(){
    let posicaoTarefa = 2;
    listaTarefas.splice(posicaoTarefa, 1, "Nadar");
    
    console.log(listaTarefas);
    }
    alteraTarefa();

    function removeTarefa(){
        let tarefaRemovida = listaTarefas.pop();
        
        console.log(listaTarefas);
        }
        removeTarefa();

        function adicionaTarefa(){
            listaTarefas.push("Limpar a casa");
            
            console.log(listaTarefas);
            }
            adicionaTarefa();