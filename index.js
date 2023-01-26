let array: any = [{ id: 1, nombre: '1' }, { id: 1, nombre: '1' }, { id: 2, nombre: '2' }, { id: 2, nombre: '2' }, { id: 1, nombre: '1' }]
function filterrepetedItems(array){
// COPIA ARRAY PARA NO PERDER ARRAY ORIGINAL
let copiaArray: any = [...array]
let hash: any = {};
copiaArray = copiaArray.filter(function (current: any) {
  // CORROBORA SI EN HASH existe la key nombrada con el valor que se quiere guardar
  // SI EXISTE, LO NIEGA. ENTONCES RETORNA FALSE Y NO AGREGA CURRENT ITEM A FILTER ARRAY.
  //  SI NO EXISTE, LO NIEGA Y RETORNA TRUE, AGREGANDO EL CURRENT ITEM A FILTER ARRAY.
  var exists = !hash[current.id];
  // HASH ALMACENA EL VALOR QUE SE QUIERE COMPARAR COMO KEY Y LE ASIGNA VALOR TRUE
  hash[current.id] = true;
  return exists;
});
// copiaArray = copiaArray.map((item: any) => {
//   item.cantidad = item.cantidad*array.length;
//   item.pesoPromedio = (item.itemGuiaRecepcion.KilosNetosOut / array.length).toFixed(2) ;
//   return item;
// })
}
