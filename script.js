var doc = document.getElementById('body');
doc.style.backgroundColor = "silver"


var title = document.getElementById("title");
title.style.color = "green"



let tags = document.getElementsByTagName("h3")
const fruits = ()=>{
  Object.values(tags).map(tagItem=>{
    tagItem.style.textTransform = "uppercase"
  })

}

fruits()
let vegies_list = document.querySelector("#vegList")
let item_to_add = document.createElement("li");
item_to_add.appendChild(document.createTextNode("brocolli"));
vegies_list.appendChild(item_to_add);


let fruList = document.querySelector("#fruList")
let item2_add = document.createElement("li")
item2_add.appendChild(document.createTextNode("Banana"))
fruList.appendChild(item2_add)

// The querySelector() is a method of the Element interface. 
// The querySelector() method allows you to select the first element that matches one or more CSS selectors.
// The querySelectorAll() method returns a static NodeList of elements that match the CSS selector. 
// If no element matches, it returns an empty NodeList.
//NodeList is an array-like object
//The createTextNode() method creates a Text Node with the specified text.