//GERADOR DA MATRIZ
function gerarMatriz(){
    //essas variaveis pegam as dimensões da matriz A
    let dimensao_linhas_A = parseInt(document.getElementById("dimensao_linhas_A").value);
    let dimensao_colunas_A = parseInt(document.getElementById("dimensao_colunas_A").value);

    //essa variavel pega a tabela da matriz A
    let matriz_A = document.getElementById("matriz_A");
        //e isso limpa a a tabela da matriz A, isso serve pra caso ja tenha feito alguma antes
        matriz_A.innerHTML = "";

    //aqui começa a criar a matriz
    for(var i = 1; i <= dimensao_linhas_A; i++){
        //cria uma linha
        var linha = document.createElement("tr");

        for(var j = 1; j <= dimensao_colunas_A; j++){
            //cria uma coluna
            var coluna = document.createElement("td");

            //cria um input
            var valor = document.createElement("input");
            //seta o tipo do input, no caso é number, para só aceitar numeros
            valor.setAttribute("type","number");
            //seta o id de cada input, ficando A11, A12 ...
            valor.setAttribute("id", "A"+i+""+j);
            //seta um placeholder no input
            valor.setAttribute("placeholder", "a"+i+""+j);

            //adiciona a variavel valor na coluna
            coluna.appendChild(valor);
            //adciona a coluna na linha
            linha.appendChild(coluna);
        }
        //adciona a linha na matriz
        matriz_A.appendChild(linha);
    }

    let dimensao_linhas_B = parseInt(document.getElementById("dimensao_linhas_B").value);
    let dimensao_colunas_B = parseInt(document.getElementById("dimensao_colunas_B").value);

    let matriz_B = document.getElementById("matriz_B");
        matriz_B.innerHTML = "";

    for(var i = 1; i <= dimensao_linhas_B; i++){
        var linha = document.createElement("tr");

        for(var j = 1; j <= dimensao_colunas_B; j++){
            var coluna = document.createElement("td");

            var valor = document.createElement("input");
            valor.setAttribute("type","number");
            valor.setAttribute("id", "B"+i+""+j);
            valor.setAttribute("placeholder", "b"+i+""+j);
            
            coluna.appendChild(valor);
            linha.appendChild(coluna);
        }
        matriz_B.appendChild(linha);
    }

    //essas variaveis são os botões de cada operação
    var botao_soma = document.getElementById("soma");
    var botao_subtracao = document.getElementById("subtracao");
    var botao_multiplicacao = document.getElementById("multiplicacao");

    //aqui tem as condições para poder realizar as operações
    if((dimensao_linhas_A != dimensao_linhas_B) || (dimensao_colunas_A != dimensao_colunas_B)){
        botao_soma.disabled = true;
        botao_subtracao.disabled = true;
    }else{
        botao_soma.disabled = false;
        botao_subtracao.disabled = false;
    }

    if(dimensao_colunas_A != dimensao_linhas_B){
        botao_multiplicacao.disabled = true;
    }else{
        botao_multiplicacao.disabled = false;
    }
}

//OPERAÇÃO DE SOMA
function soma(){
//para somar as dimensões de A e B devem ser as mesmas, então peguei só as dimensões de A
let dimensao_linhas_A = parseInt(document.getElementById("dimensao_linhas_A").value);
let dimensao_colunas_A = parseInt(document.getElementById("dimensao_colunas_A").value);

let matriz_R = document.getElementById("matriz_R");
    matriz_R.innerHTML = "";

    for(var i = 1; i <= dimensao_linhas_A; i++){
        var linha = document.createElement("tr");

        for(var j = 1; j <= dimensao_colunas_A; j++){
            var coluna = document.createElement("td");

            //essas variaveis pegam os valores de cada imput antes criado de acordo com o id
            //A11 + B11 ...
            var valorA = parseInt(document.getElementById("A"+i+""+j).value);
            var valorB = parseInt(document.getElementById("B"+i+""+j).value);
            var valor = document.createTextNode(valorA + valorB);

            coluna.appendChild(valor);
            linha.appendChild(coluna);
        }
        matriz_R.appendChild(linha);
    }
}

//OPERAÇÃO DE SUBTRAÇÃO
function subtracao(){
let dimensao_linhas_A = parseInt(document.getElementById("dimensao_linhas_A").value);
let dimensao_colunas_A = parseInt(document.getElementById("dimensao_colunas_A").value);

let matriz_R = document.getElementById("matriz_R");
    matriz_R.innerHTML = "";

    for(var i = 1; i <= dimensao_linhas_A; i++){
        var linha = document.createElement("tr");

        for(var j = 1; j <= dimensao_colunas_A; j++){
            var coluna = document.createElement("td");

            var valorA = parseInt(document.getElementById("A"+i+""+j).value);
            var valorB = parseInt(document.getElementById("B"+i+""+j).value);
            var valor = document.createTextNode(valorA - valorB);

            coluna.appendChild(valor);
            linha.appendChild(coluna);
        }
        matriz_R.appendChild(linha);
    }
}

//OPERAÇÃO DE MULTIPLICAÇÃO
function multiplicacao(){
let dimensao_linhas_A = parseInt(document.getElementById("dimensao_linhas_A").value);
let dimensao_linhas_B = parseInt(document.getElementById("dimensao_linhas_B").value);
let dimensao_colunas_B = parseInt(document.getElementById("dimensao_colunas_B").value);

let matriz_R = document.getElementById("matriz_R");
matriz_R.innerHTML = "";

    for(var i = 1; i <= dimensao_linhas_A; i++){
        var linha = document.createElement("tr");

        for(var j = 1; j <= dimensao_colunas_B; j++){
            var coluna = document.createElement("td");

            var valor = [];
            var valorAB = 0

            for(var k = 1; k <= dimensao_linhas_B; k++){
                var valorA = parseInt(document.getElementById("A"+i+""+k).value);
                var valorB = parseInt(document.getElementById("B"+k+""+j).value);
                valor[j] = valorA * valorB;
                valorAB += valor[j]
            }
            
            var resultado = document.createTextNode(valorAB);
            
            coluna.appendChild(resultado);
            linha.appendChild(coluna);
            matriz_R.appendChild(linha);
        }
    }
}