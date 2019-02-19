const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 15);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 45);
    park = new Park('jurassic park', 20, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'jurassic park');
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 20);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function () {
    dinosaur4 = new Dinosaur('diplodocus', 'herbivore', 25);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.popDinosaur(dinosaur2);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    assert.deepStrictEqual(park.findMostAttractedDinosaur(), [dinosaur1]);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    assert.deepStrictEqual(park.findSameSpecies('carnivore'), [dinosaur1, dinosaur3]);
  });

  it('should be able to remove all dinosaurs of a particular species');

  it('should return all the visitors in a day', function () {
    assert.strictEqual(park.visitorsDay(), 2200);
  });

});
