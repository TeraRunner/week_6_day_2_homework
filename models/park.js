const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.popDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
};

Park.prototype.findMostAttractedDinosaur = function () {
  let mostAttractedDinosaur = [];
  for (var attractedDinosaur of this.dinosaurs) {
    if (attractedDinosaur.guestsAttractedPerDay < this.guestsAttractedPerDay) {
      mostAttractedDinosaur.push(attractedDinosaur);
    }
  }
  return mostAttractedDinosaur;
};

Park.prototype.findSameSpecies = function (specie) {
  let sameSpecies = [];
  for (var checkDinosaur of this.dinosaurs) {
    if (checkDinosaur.species === specie) sameSpecies.push(checkDinosaur);
  }
  return sameSpecies;
};

Park.prototype.visitorsDay = function () {
  let visitorsDay = 0;
  let allVisitors = 0;
  for (const visitors of this.dinosaurs) {
    allVisitors += visitors.dinosaurs.guestsAttractedPerDay;
  }
  return visitorsPerDay = this.ticketPrice * allVisitors
};

// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

module.exports = Park;
