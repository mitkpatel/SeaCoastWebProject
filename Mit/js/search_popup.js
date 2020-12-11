// Code for popup menu
let openModalPopup = document.querySelectorAll('[data-modal-target]');
let closeModalPopup = document.querySelectorAll('[data-close-button]');

openModalPopup.forEach(button => {
  button.addEventListener('click', () => {
    var modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalPopup.forEach(button => {
  button.addEventListener('click', () => {
    var modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) 
    return false;
  modal.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) 
    return false;
  modal.classList.remove('active');
}

// Code for search box 
function search_item() { 
  let search = document.getElementById('searchItem').value;          //Get the text from box 
  search = search.toLowerCase();                                     //Convert into lower case
  let temp = document.getElementsByClassName('product-item');        //Search for div with class-name
    
  for (i = 0; i < temp.length; i++) {                                //Loop seatch until the length not exceed
      if (!temp[i].innerHTML.toLowerCase().includes(search)) { 
        temp[i].style.display="none";                                //If not found then display nothing
      } 
      else { 
        temp[i].style.display="flex";                                //Else display Item flex  
      } 
  } 
} 

