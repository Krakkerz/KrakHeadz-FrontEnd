import { personsApi, dawaApi, hobbyApi } from './Urls.js'


let personsArray = []
let hobbyArray = []

export function fetchPersons(){
  if (personsArray.length > 0) {
    makeRows(personsArray)
    return
  }
  fetch(personsApi)
    .then(res => res.json())
    .then(persons => {
      makeRows(persons)
      personsArray = persons;
    })
    .catch(error => console.error(error))

}

export function getAllHobbies() {
  console.log("Called")
  fetch(hobbyApi)
    .then(res => {
      if (!res.ok) {
        return Promise.reject("Error " + res.status)
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      const rows = data.map(u => `
      <tr>
         <td><a href=${u.description} target="blank">${u.name}</a></td>
         <td>${u.category}</td>
         <td>${u.type}</td>

      </tr>
      `).join("\n")
      document.getElementById("rows2").innerHTML = rows

    })
    .catch(e => console.error("Upps: " + e))
}

export function getHobbies(){
  if (hobbyArray.length > 0 ) {
    return
  }
  fetch(hobbyApi)
    .then(res => res.json())
    .then(hobbyData => {
      const selectHobby = document.getElementById("selectHobby")

      for (let i = 0; i < hobbyData.length; i++) {
        let newOption = document.createElement("option")
        newOption.innerText = JSON.stringify(hobbyData[i].name).replace(/"/g, "")
        selectHobby.appendChild(newOption)


      }

      })

    .catch(error => console.error(error))

}


export function fetchDAWA(){
  const userInput = document.getElementById("address").value

  const address = {}

  fetch(dawaApi + userInput)
    .then(res => res.json())
    .then(address => {

      document.getElementById("addressContent")
        .innerText = JSON.stringify(address[0].tekst,null,2).replace(/"/g, "")

      document.getElementById("addressId")
        .innerText = JSON.stringify(address[0].data.id,null,2).replace(/"/g, "")


    })
    .catch(error => console.error(error))


}

function makeRows(rows) {
  const tRows = rows.map(persons => `
  <tr>
  <td>${persons.firstName}</td>
  <td>${persons.lastName}</td>
  <td>${persons.address}</td>
  <td>${persons.phoneNumber}</td>
  <td>${persons.email}</td>
  </tr>
  `).join("\n")
  document.getElementById("rows").innerHTML = tRows
}

