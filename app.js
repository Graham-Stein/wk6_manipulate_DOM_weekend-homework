console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const main_form = document.querySelector('#new-item-form');
  main_form.addEventListener('submit', handleForm);
});

const handleForm = function (event) {
  event.preventDefault();
  console.log(event);
  // ############ const newList = document.createElement('ul');
  // const newParagraph = document.createElement('p');
  //   newParagraph.textContent = `Fish is: ${ this.common_name.value },
  //    aka ${ this.scientific_name.value }
  //    environment(s): ${ this.environment.value }`;
  //   const fishList = document.querySelector('#fish-list');
  //   fishList.appendChild(newParagraph);

  const newListItem = document.createElement('li');
  // console.log(this.input.value);
    newListItem.textContent = `Fish commonly known as: ${ this.common_name.value }`;
    const fishList = document.querySelector('#fish-ul');
    fishList.appendChild(newListItem);

  // const newListItem = document.createElement('li');
  //   newListItem.textContent = `Scientific name: ${ this.scientific_name.value }`;
  //   const fishList = document.querySelector('#fish-ul');
  //   fishList.appendChild(newListItem);
  //
  // const newListItem = document.createElement('li');
  //   newListItem.textContent = `Environment: ${ this.environment.value }`;
  //   const fishList = document.querySelector('#fish-ul');
  //   fishList.appendChild(newListItem);

};
