// Executar mascaras //
function mascara(o,f) {//define o objeto que chama função // 
    objeto = o
    funcao = f
    setTimeout ("executaMascara()", 1)
}
function executaMascara(){
    objeto.value=funcao (objeto.value)
}
//Mascara do telefone
function telefone(variavel){
    variavel=objeto.value.replace (/\D/g,""); //remove tudo que não é dígito
    variavel=variavel.replace (/^(d/d)(\d)/g, "($1) $2");
    variavel=variavel.replace (/(\d{4})(\d)/, "$1-$2"); //coloca a segunda barra
    return variavel;
}
//Mascara do RG e CPF//
function RGeCPF (variavel) {
    variavel=variavel.replace (/\D/g,"");
    variavel=variavel.replace (/(\d{3})(\d)/, "$1.$2");
    variavel=variavel.replace (/(\d{3})(\d{1,2})$/,"$1-$2");
    
}
//Mascara do cep//

function cep(variavel){
    variavel=variavel.replace (/\D/g,"");
    variavel=variavel.replace (/(\d{2})(\d)/, "$1.$2");
    variavel=variavel.replace (/(\d{3})(\d{1,3})$/, "$1 - $2");
    return variavel;
}

//Mascara Data//
function data (variavel){
    variavel=variavel.replace (/\D/g,"");
    variavel=variavel.replace (/(\d{2})(\d)/, "$1/$2");
    variavel=variavel.replace (/(\d{2})(\d)/, "$1/$2");
    return variavel;
}
