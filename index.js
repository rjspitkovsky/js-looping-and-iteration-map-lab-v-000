// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  let names = []
  drivers.map(function (name) {return names.push(name.split(" "))})
  return names.map(function (name) {return Object.assign({}, name, {firstName: name[0], lastName: name[1]})})

}
