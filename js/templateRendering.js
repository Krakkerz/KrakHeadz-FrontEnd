import { renderTemplate, setActive, showPage, required } from "./Utility.js"
import {fetchPersons, fetchDAWA, getHobbies, getAllHobbies} from "./Fetch.js";
import { addUserHandler } from "./addUser.js";

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id;
  renderTemplate(id)  //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case "about" : {
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
    case "addUser" : {
      required()
      setInterval(required,0)
      addUserHandler()
      getHobbies()
      document.getElementById("address").oninput = fetchDAWA
      break
    }
    case "allHobbies" : {
      getAllHobbies()
    }
  }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("addUser") //Set the default page to render

