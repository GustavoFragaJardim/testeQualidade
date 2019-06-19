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
QUnit.test( "TEST-1", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(0,0,0) == "INEXISTENTE", "Passed!" );
});
QUnit.test( "TEST-2", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(1,2,3) == "INEXISTENTE", "Passed!" );
});
QUnit.test( "TEST-3", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(1,1,1) == "EQUILATERO", "Passed!" );
});
QUnit.test( "TEST-4", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(1,2,2) == "ISOSCELES", "Passed!" );
});
QUnit.test( "TEST-5", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(2,2,1) == "ISOSCELES", "Passed!" );
});
QUnit.test( "TEST-6", function( assert ) {
  assert.ok( DeterminaTipoTriangulo(2,3,4) == "ESCALENO", "Passed!" );
});
  