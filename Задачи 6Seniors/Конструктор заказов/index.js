function Order() {
  this.check = {};
  this.lockOrder = false;

  this.lockOrder = function () {
    this.lockOrder = false;
  };

  this.unlockOrder = function () {
    this.lockOrder = true;
  };

  this.addItem = function (item, count) {
    if (!this.lockOrder) {
      return console.log("Нельзя добавить/удалить позиции.");
    }

    if (item["name"] in this.check) {
      return (this.check[item.name].count += count);
    }

    return (this.check[item.name] = { price: item.price, count: count });
  };

  this.removeItem = function (item, count = 0) {
    if (!this.lockOrder) {
      return console.log("Нельзя добавить/удалить позиции.");
    }

    if (item in this.check) {
      if (count > this.check[item].count) {
        return console.log("Такого кол-ва нет.");
      }

      return count > 0
        ? (this.check[item].count -= count)
        : delete this.check[item];
    }

    return console.log(`Позиции "${item}" нет в чеке.`);
  };

  this.getCheck = function () {
    let counter = 0;

    for (let key in this.check) {
      counter += this.check[key].count * this.check[key].price;

      console.log(
        `${key}: ${this.check[key].count}шт. на сумму ${
          this.check[key].count * this.check[key].price
        } руб.`
      );
    }

    console.log(`Общая сумма: ${counter} руб.`);
  };
}

const newOrder = new Order();

newOrder.unlockOrder();
newOrder.addItem({ name: "орешки", price: 50 }, 3);
newOrder.addItem({ name: "орешки", price: 50 }, 6);
newOrder.addItem({ name: "орешки", price: 50 }, 30);
newOrder.addItem({ name: "пиво", price: 100 }, 3);
newOrder.removeItem("орешки", 30);
newOrder.getCheck();
// console.log(newOrder);
