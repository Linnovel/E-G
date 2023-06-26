const excusa = document.querySelector('#excusa');
const button = document.querySelector('#btn');
const text = document.querySelector('h1');



window.addEventListener('load',()=>{
    excusa.innerHTML = generatorExcuses()
})

button.addEventListener('click',()=>{
    location.reload()
})

function generatorExcuses() {
  const names = ['Chavez', 'CICP', 'Tuparamo', 'Diosdado'];
  const place = ['in Barinas', 'in Apure', 'in my home', 'in Hatillo'];
  const objects = ['homework', 'laptop', 'car', 'shoes'];
  const situations = ['stole my', 'eat my', 'took my', 'shoot my'];

  let namesIndex = Math.floor(Math.random() * names.length);
  let placesIndex = Math.floor(Math.random() * place.length);
  let objectsIndex = Math.floor(Math.random() * objects.length);
  let situationsIndex = Math.floor(Math.random() * situations.length);

  return (
    names[namesIndex] +
    ' ' +
    place[placesIndex] +
    ' ' +
    situations[situationsIndex] +
    ' ' +
    objects[objectsIndex] 
  );
}

