// Code for search box 
function search_chef() { 
    let search = document.getElementById('searchChef').value;          //Get the text from box 
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