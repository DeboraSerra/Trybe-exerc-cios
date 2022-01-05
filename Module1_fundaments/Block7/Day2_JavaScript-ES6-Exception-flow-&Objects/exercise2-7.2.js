const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPeople = order.order.delivery.deliveryPerson;
  const orderName = Object.values(order)[0];
  const orderPhone = Object.values(order)[1];
  const orderAdress = Object.values(order.address);
  return `Hi ${deliveryPeople}, delivery to: ${orderName}, Phone: ${orderPhone}, St. ${orderAdress[0]}, #${orderAdress[1]}, ap: ${orderAdress[2]}`;
}

customerInfo(order);

order.name = "Luiz Silva";
order.payment.total = "R$ 50,00";

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const orderName = Object.values(order)[0];
  const orderFlavors = Object.values(Object.keys(order.order.pizza));
  const orderDrinks = Object.values((Object.values(order.order.drinks.coke)));
  const orderPrice = Object.values(order.payment);
  return `Hi ${orderName}, your order of ${orderFlavors} and ${orderDrinks[0]} is a total of ${orderPrice[0]}`
};

console.log(orderModifier(order));
