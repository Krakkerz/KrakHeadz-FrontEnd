import {makeOptions} from "./Utility.js";
import {hobbyApi, personsApi} from "./Urls.js";

export function addUserHandler(){
  document.getElementById("submitUser").onclick = addUser
}


function addUser(){
  const user = {}
  user.firstName = document.getElementById("firstName").value
  user.lastName = document.getElementById("lastName").value
  user.address = document.getElementById("address").value
  user.phoneNumber = document.getElementById("phoneNumber").value
  user.email = document.getElementById("email").value

  const selectedHobby = document.getElementById("selectHobby")
  const text = selectedHobby.options[selectedHobby.selectedIndex].value
  console.log(text)
  user.hobbyInfos = text;

  let postPerson = makeOptions("POST",user)

  fetch(personsApi,postPerson)
    .then(res => res.json())
    .then(newUser => {
      document.getElementById("userInformation").innerText = JSON.stringify(newUser,null,2)
    })
    .catch(error => console.error(error))
}

export function getIds(){
  const selectDeleteUser = document.getElementById("deleteUserList")


  fetch(personsApi)
    .then(res => res.json())
    .then(personData => {

      for (let i = 0; i < personData.length; i++){
        let newOption = document.createElement("option")
        newOption.innerText =
          JSON.stringify(personData[i].id).replace(/"/g,"")
          selectDeleteUser.appendChild(newOption)
      }
    })
}
export function deleteUserWithID(){
  const idToDelete = document.getElementById("deleteUserList")
  const value = idToDelete.options[idToDelete.selectedIndex].value
  const deleteRequest = makeOptions("DELETE",idToDelete)
  console.log(value)


  fetch(personsApi + "/" + value , deleteRequest)
    .then(res => res.json())
    .catch(error => console.error(error))
}
