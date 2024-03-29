class Customer {
  order = {};
  inventory = {};

  constructor(name, money) {
    this.name = name;
    this.money = money;
  }

  checkInventory() {
    console.log(this.inventory);
  }

  // Оплатить корзину
  buyProducts(store, order = this.order) {
    const totalPrice = this.getTotalOrderPrice();
    console.log(totalPrice);

    if (totalPrice >= this.money) {
      return console.log("Не хватает средств на оплату корзины.");
    }

    // Передаем заказ на кассу
    const check = store.sellProduct(order);

    this.spendMoney(totalPrice);
    store.putMoneyInCash(totalPrice);

    this.inventory[store.name] = check;
    this.order = {};
  }

  // Добавить товар в корзину
  addItemsToOrder(store, product, count) {
    const item = store.warehouse.sendProductFromWarehouse(product, count);

    if (item.status !== false) {
      const { name, price, count } = item;

      if (name in this.order) {
        console.log(`Позиция "${product}" добавлена в корзину.`);
        return (this.order[name].count += count);
      }

      console.log(`Позиция "${product}" ${count}шт. добавлена в корзину.`);
      return (this.order[item.name] = { price, count });
    } else {
      return console.log(item.message);
    }
  }

  // Удалить товар из корзины
  removeItemsFromOrder(product, count = 0) {
    if (product in this.order) {
      if (count === 0) {
        console.log(`Позиция "${product}" удалена.`);
        return delete this.order[product];
      }

      console.log(`Позиция "${product}" ${count}шт. удалена.`);
      return (this.order[product].count -= count);
    } else {
      console.log(`Позиции "${product}" нет в чеке.`);
    }
  }

  // Посмотреть корзину
  getOrderInfo() {
    let counter = this.getTotalOrderPrice();

    for (let key in this.order) {
      console.log(
        `${key}: ${this.order[key].count}шт. на сумму ${
          this.order[key].count * this.order[key].price
        } руб.`
      );
    }

    console.log(`Общая сумма ${counter} руб.`);
  }

  getTotalOrderPrice() {
    let totalPrice = 0;

    for (let key in this.order) {
      totalPrice += this.order[key].price * this.order[key].count;
    }

    return totalPrice;
  }

  spendMoney(price) {
    this.money -= price;
  }
}

// Поставка на склад | начальное состояние склада
const supply = [
  { name: "Кроссовки", price: 400, count: 20 },
  { name: "Футболка", price: 100, count: 40 },
  { name: "Штаны", price: 250, count: 35 },
  { name: "Носки", price: 50, count: 100 },
];

class Warehouse {
  constructor(initialProduct) {
    this.warehouseStock = initialProduct;
  }

  // Удалить продукты со склада при продаже
  sellProductsFromWarehouse(order) {
    let isFound = false;

    for (let key in order) {
      for (let i = 0; i < this.warehouseStock.length; i++) {
        if (
          this.warehouseStock[i].name === key &&
          this.warehouseStock[i].count >= order[key].count
        ) {
          this.warehouseStock[i].count -= order[key].count;
          isFound = true;
          break;
        }

        if (!isFound) {
          return {
            status: false,
            message: "Не удалось совершить продажу.",
          };
        }
      }
    }

    return {
      status: true,
      message: "Выбранные товары проданы.",
    };
  }

  /*
   Найти конкретный продукт со склада.
    Покупатель выбирает товар,
    Если товар есть на складе, то он получает объект с данными этого товара
  */
  sendProductFromWarehouse(product, count) {
    for (let i = 0; i < this.warehouseStock.length; i++) {
      if (
        product === this.warehouseStock[i].name &&
        count <= this.warehouseStock[i].count
      ) {
        return {
          name: this.warehouseStock[i].name,
          price: this.warehouseStock[i].price,
          count: count,
        };
      }
    }

    return {
      status: false,
      message: "Такого кол-ва товара нет на складе.",
    };
  }

  // Проверить сток товаров на складе
  checkWaehouseStock() {
    return this.warehouseStock;
  }

  // Запрос поставки на склад.
  getGoodsForStock(supply) {
    for (let i = 0; i < supply.length; i++) {
      let isFound = false;

      for (let j = 0; j < this.warehouseStock.length; j++) {
        if (supply[i].name === this.warehouseStock[j].name) {
          this.warehouseStock[j].count += supply[i].count;

          isFound = true;
          break;
        }
      }

      if (!isFound) {
        this.warehouseStock.push(supply[i]);
        isFound = false;
      }
    }
  }
}

class Store {
  constructor(name) {
    this.name = name;
    this.money = 0;
    this.warehouse = new Warehouse(supply);
  }

  // Продать товары
  sellProduct(order) {
    const check = {};

    const removeFromWarehouseStatus =
      this.warehouse.sellProductsFromWarehouse(order);

    if (removeFromWarehouseStatus) {
      for (let key in order) {
        const { price, count } = order[key];
        check[key] = { count: count, totalPrice: price * count };
      }
    }

    return check;
  }

  putMoneyInCash(money) {
    this.money += money;
  }
}

const customerJack = new Customer("Jack", 35000);
const adidas = new Store("Adidas");

console.log(customerJack);
console.log(adidas);

customerJack.addItemsToOrder(adidas, "Кроссовки", 3);
customerJack.addItemsToOrder(adidas, "Футболка", 3);
customerJack.addItemsToOrder(adidas, "Носки", 2);
customerJack.getOrderInfo();
customerJack.getTotalOrderPrice();
customerJack.buyProducts(adidas);

console.log(customerJack);
console.log(adidas);
