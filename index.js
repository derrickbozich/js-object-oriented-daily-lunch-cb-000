// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
  }
}

class Meal {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = ++mealId;
  }
}
