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
QUnit.test( "TEST-1", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abc', 'b') == 2, "Passed!" );
});
QUnit.test( "TEST-2", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abc', 'd') == "O caractere não pertence a cadeia informada", "Passed!" );
});
QUnit.test( "TEST-3", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abcdefghijklmnopqrstuvwxyz') == "Erro: cadeia inválida - A cadeia de caracteres deve ter entre 1 a 20 caracteres.", "Passed!" );
});
QUnit.test( "TEST-4", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abc', 'xyz') == "Erro: mais de um caractere informado - Um caractere a ser procurado deve ser informado.", "Passed!" );
});
QUnit.test( "TEST-5", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abc', null) == "Erro: nenhum caractere informado - Um caractere a ser procurado deve ser informado.", "Passed!" );
});
QUnit.test( "TEST-6", function( assert ) {
  assert.ok( CadeiaDeCaracteres('abc') == "Erro: nenhum caractere informado - Um caractere a ser procurado deve ser informado.", "Passed!" );
});