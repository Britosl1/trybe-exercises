const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const client = order.name;
    const clientPhone = order.phoneNumber;
    const clientAdress = order.address.street;
    const clientAdressNumber = order.address.number;
    const clientAdressAp = order.address.apartment;
    const deliveryPerson = order.order.delivery.deliveryPerson;
    console.log(`Olá ${deliveryPerson}, entrega para: ${client}, ${clientPhone}, ${clientAdress}, ${clientAdressNumber}, ${clientAdressAp}.`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const newClient = {
        name: 'Luiz Silva',
        pizza: {
            muzzarella,
            calabresa
        },
        payment: {
            total: 50,
        },
    };
    const clone = Object.assign(name, pizza, payment) = newClient;

    
  }
  
  orderModifier(order);