
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
QUnit.test( "TEST-1", function( assert ) {
  assert.ok( Fibonacci(6) == 8, "Passed!" );
});
QUnit.test( "TEST-2", function( assert ) {
  assert.ok( Fibonacci(-2) == 'Erro: n deve ser maior do que 0', "Passed!" );
});
QUnit.test( "TEST-3", function( assert ) {
  assert.ok( Fibonacci('a') == 'Erro: Entre com um número inteiro positivo.' , "Passed!" );
});