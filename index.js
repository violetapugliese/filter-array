let array = [{ id: 1, nombre: '1' }, { id: 1, nombre: '1' }, { id: 2, nombre: '2' }, { id: 2, nombre: '2' }, { id: 1, nombre: '1' }]

function filterRepetedItems(array) {
  // COPY ARRAY TO NOT LOSE THE ORIGINAL ARRAY
  let copyArray = [...array]
  let hash = {};
  copyArray = copyArray.filter(function (current) {
    // CHECK IF IN "HASH" there is a named key with the value to be saved. Ex: {1: true}
    // IF IT EXISTS, HE DENY IT. THEN RETURNS FALSE AND DOES NOT ADD CURRENT ITEM TO FILTER ARRAY.
    // IF IT DOESN'T EXIST, IT DENYS IT AND RETURNS TRUE, ADDING THE CURRENT ITEM TO A FILTER ARRAY.
    var exists = !hash[current.id];
    // "HASH" STORES THE VALUE TO BE COMPARED AS KEY AND ASSIGNS IT VALUE "TRUE". Ex: {1: true}
    hash[current.id] = true;
    return exists;
  });

  return copyArray
}
