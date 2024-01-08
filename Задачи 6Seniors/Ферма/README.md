```javascript
  class Customer {
      order = [];
      
      constructor(name, money) {
          this.name = name;
          this.money = money;
      }
      
      toChooseGoods(good) {
  
      }
      
      toSpendMoney(count) {
          this.money -= count;
      }
      
      
  }
  
  class Store {
      constructor(name, stock) {
          this.name = name;
          this.stock = stock;
      }
      
      toCheckStock(good) {
          for (let i = 0; i < this.stock.length; i++) {
              if (this.stock[i].name == good) {
                  console.log("Товар есть")
              }
          }
      }
      
      toSellGoods(goods) {
          
      }
  }
  
  const storeStock = 
  [
      {name: "Кроссовки", price: 400, count: 20},
      {name: "Футболка", price: 100, count: 40},
      {name: "Штаны", price: 250, count: 35},
  ]
  
  const customerJack = new Customer("Jack", 1500);
  const adidas = new Store("Adidas", storeStock)
  
  console.log(adidas)
  
  customerJack.toChooseGoods("Кроссовки")
  console.log(customerJack)


```
