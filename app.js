console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const new_item_form = document.querySelector('#new-item-form');
  new_item_form.addEventListener('submit', handleForm);
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

  const newListItem2 = document.createElement('li');
    newListItem2.textContent = `Scientific name: ${ this.scientific_name.value }`;
    const fishList2 = document.querySelector('#fish-ul');
    fishList2.appendChild(newListItem2);

  const newListItem3 = document.createElement('li');
    newListItem3.textContent = `Environment: ${ this.environment.value }`;
    const fishList3 = document.querySelector('#fish-ul');
    fishList3.appendChild(newListItem3);

};
