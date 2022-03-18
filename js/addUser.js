import { makeOptions } from "./Utility.js";
import { personsApi } from "./Urls.js";

export function addUserHandler(){
  document.getElementById("submitUser").onclick = addUser
}


function addUser(){
  const user = {}
  user.firstName = document.getElementById("firstName").value
  user.lastName = document.getElementById("lastName").value
  // setTimeout(user.lastName,1000)
  user.address = document.getElementById("address").value
  user.phoneNumber = document.getElementById("phoneNumber").value
  user.email = document.getElementById("email").value

  let options = makeOptions("POST",user)

  fetch(personsApi,options)
    .then(res => res.json())
    .then(newUser => {
      document.getElementById("userInformation").innerText = JSON.stringify(newUser,null,2)
    })
    .catch(error => console.error(error))



}
