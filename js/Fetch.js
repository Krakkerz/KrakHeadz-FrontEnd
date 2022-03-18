import { personsApi, dawaApi } from './Urls.js'

//document.getElementById("btn").onclick = fetchPersons

let personsArray = []

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

export function fetchDAWA(){
  const userInput = document.getElementById("address").value

  const address = {}

  fetch(dawaApi + userInput)
    .then(res => res.json())
    .then(address => {

        document.getElementById("addressContent").innerText = JSON.stringify(address,null,2)


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

