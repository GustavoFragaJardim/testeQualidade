function DeterminaTipoTriangulo( a, b, c ){
    var tipo = 'ESCALENO';
    if(a <= 0 || b<= 0 || c <=0){
        tipo = 'INEXISTENTE'}
    else if(!(( a + b > c ) && ( a + c > b ) && ( b + c > a ))){
        tipo = 'INEXISTENTE'}
    else if( a == b ){
        tipo = 'ISOSCELES'
        if( b == c ){
            tipo = 'EQUILATERO'
        }
    }else if( b == c || a == c ){
        tipo = 'ISOSCELES'
    }
    return tipo
}
function CadeiaDeCaracteres( cadeia, caracter ){
    if(cadeia == null || cadeia.length > 20 || cadeia.length < 1 ||  cadeia == '' ){
        return 'Erro: cadeia inválida - A cadeia de caracteres deve ter entre 1 a 20 caracteres.'
    }
    if(caracter == null || caracter == '' ){
        return 'Erro: nenhum caractere informado - Um caractere a ser procurado deve ser informado.'
    }
    if(caracter.length > 1){
        return 'Erro: mais de um caractere informado - Um caractere a ser procurado deve ser informado.'
    }
    if(cadeia.indexOf(caracter) == -1){
        return 'O caractere não pertence a cadeia informada'
    }
    if(cadeia.indexOf(caracter) != -1){
        return cadeia.indexOf(caracter) + 1
    }
}
function Fibonacci(n){
    if( !Number.isInteger(n) ){
        return  'Erro: Entre com um número inteiro positivo.'
    }
    if( n <= 0 ){
        return 'Erro: n deve ser maior do que 0'
    }
    if(Number.isInteger(n)){
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return  f;}
}