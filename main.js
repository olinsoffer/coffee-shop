let coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: {
      price: 10,
      beanRequirement: 2
    },
    americano: {
      price: 5,
      beanRequirement: 1
    },
    doubleShot: {
      price: 15,
      beanRequirement: 4
    },
    frenchPress: {
      price: 12,
      beanRequirement: 3
    }
  },

  makeDrink: function (drinkType) {
    if(this.drinkRequirements[drinkType] && this.beans > this.drinkRequirements[drinkType].beanRequirement) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      return true;  
    }
    else if (this.drinkRequirements[drinkType]) {
      alert("Sorry we are out of beans");
      return false;
    }
    else {
      alert(`Sorry we dont make ${drinkType}`);
      return false;
    }
  },
  
  buySupplies: function(price) {
    this.beans-=price;
  },

  buyDrink: function(drink) {
    if(this.makeDrink(drink) && this.drinkRequirements[drink]) {
      this.money-=this.drinkRequirements[drink].price;
    }
  }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");