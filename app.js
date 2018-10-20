console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const new_item_form = document.querySelector('#new-item-form');
  new_item_form.addEventListener('submit', handleForm);
});

const handleForm = function (event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target[0]);
  console.log(event.target[0].id);
  console.log(event.target[0].value);
  console.log(event.target[1]);
  console.log(event.target[2]);


  const newListItem0 = document.createElement('hr');
  const fishList0 = document.querySelector('#fish-ul');
  fishList0.appendChild(newListItem0);

  const newListItem = document.createElement('li');
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

// removes the whole ul, so we cant add another entry to the list once its been deleted.
function clearList() {
  console.log("TEST THE BUTTON");
  let element = document.getElementById('fish-ul');
  element.parentNode.removeChild(element);
};
