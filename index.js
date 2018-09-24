// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
  deliveries(){
    return store.deliveries.filter((delivery) => {
      return this.id === delivery.neighborhoodId
    });
  }

  customers(){
    let customers = [];
    this.deliveries().forEach((delivery) => {
      let result = store.customers.find((customer) => customer.id === delivery.customerId);
      if (!(customers.includes(result))) {
          customers.push(result);
      }
    });
    return customers
  }
}

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++customerId;
    store.customers.push(this);
  }

  deliveries(){
    return store.deliveries.find(m => m.id === this.deliveryId);
  }

}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }

  meal(){
    return store.meals.find(m => m.id === this.mealId);
  }

  customer(){
    return store.customers.find(c => c.id === this.customerId);
  }

  neighborhood(){
    return store.neighborhoods.find(n => n.id === this.neighborhoodId);
  }
}
