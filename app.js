console.log('JS loaded');
document.addEventListener('DOMContentLoaded', () => {
  const new_item_form = document.querySelector('#new-item-form');
  new_item_form.addEventListener('submit', handleForm);
});

const handleForm = function (event) {
  event.preventDefault();

  const newListItem0 = document.createElement('hr');
  const fishList0 = document.querySelector('#fish-ul');
  fishList0.appendChild(newListItem0);

  const newListItem = document.createElement('li');
  newListItem.textContent = `Common name: ${ this.common_name.value }`;
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

function clearList() {
  let parent = document.querySelector('.fish-unordered-list ul');
  let remElement = document.querySelectorAll('.fish-unordered-list  li')
  remElement.forEach((child) => {parent.removeChild(child)
  });

  let parent2 = document.querySelector('#fish-ul');
  let remHrElement = document.querySelectorAll('#fish-ul hr')
  remHrElement.forEach((child) => {parent.removeChild(child)
  });
};
