import { personsApi } from './Urls.js'

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

function makeRows(rows) {
  const tRows = rows.map(persons => `
  <tr>
  <td>${persons.firstName}</td>
  <td>${persons.lastName}</td>
  <td>${persons.phoneNumber}</td>
  <td>${persons.email}</td>
  </tr>
  `).join("\n")
  document.getElementById("rows").innerHTML = tRows


}
