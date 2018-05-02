// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (name) {return name.toLowerCase()})
}

function nameToAttributes(drivers) {
  return drivers.map(function (name) {return Object.assign({}, name, {firstName: name.split(" ")[0].toLowerCase(), lastName: name.toLowerCase().split(" ")[1].toLowerCase()})})
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {return `${driver.name} is from ${driver.hometown}`})
}
