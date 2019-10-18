window.addEventListener("load", function() {
  //Get elements with class centralize
  var divs = document.getElementsByClassName("centralize");
  
  //Loop through elements
  var i; for (i = 0; i < divs.length; i++) {
    //Create child element
    var childElement = document.createElement("div");
    
    //Set text node with parent element's node
    var childElementContent = document.createTextNode(divs[i].textContent);
    
    //Assign child content to child elemnet
    childElement.appendChild(childElementContent);
    
    //Assign child to parent
    divs[i].appendChild(childElement);  
  }
  
});
