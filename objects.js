var makePerson = function(theName, theBirthday, theSsn){
  return {
    name: theName,
    birthday: theBirthday,
    ssn: theSsn
  };
}

var makeCard = function(theNum, theCsv, theExpDate, cardName) {
  return {
    name: cardName,
    num: theNum,
    csv: theCsv,
    expDate: theExpDate
  };
}

// This returns a new object that has all the same keys as the objects
// the makeCard and makePerson functions return
var merge = function(person, card) {
  return {
    name: person['name'],
    birthday: person['birthday'],
    ssn: person['ssn'],
    name: card['name'],
    num: card['num'],
    csv: card['csv'],
    expDate: card['expDate']
  }
}

// This returns a new object with to objects nested inside of it
var merge2 = function(thePerson, theCard) {
  return {
    person: thePerson,
    card: theCard
  };
}
