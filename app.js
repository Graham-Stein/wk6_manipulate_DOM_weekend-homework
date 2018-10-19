console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const main_form = document.querySelector('#new-item-form');
  main_form.addEventListener('submit', handleForm);
});

const handleForm = function (event) {
    console.log(event);
  event.preventDefault();
  console.log(event);
  // const newList = document.createElement('ul');
  const newParagraph = document.createElement('p');
    newParagraph.textContent = `Fish is: ${ this.common_name.value },
     aka ${ this.scientific_name.value }
     environment(s): ${ this.environment.value }`;
    const fishList = document.querySelector('#fish-list');
    fishList.appendChild(newParagraph);

};



// const handleForm = function (event) {
//   event.preventDefault();
//   const newParagraph = document.createElement('p');
//   newParagraph.textContent = `Title is: ${ this.title.value },
//    by ${ this.author.value }
//    in category ${ this.category.value }`;
//   const readingList = document.querySelector('#reading-list');
//   readingList.appendChild(newParagraph);
// };
