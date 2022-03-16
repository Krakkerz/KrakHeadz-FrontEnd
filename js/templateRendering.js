import { renderTemplate, setActive, showPage } from "./Utility.js"
import { fetchPersons } from "./Fetch.js";

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "about": {
      console.log("Hello Krakkerz!")
      break
    }
    case "seeShit": {
      console.log("See Krakkerz shit here!")
      break
    }
    case "myDetails" : {
      fetchPersons()
      console.log("myDetails")
      break
    }

  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("about") //Set the default page to render

