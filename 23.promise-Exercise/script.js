const orderFood = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order Successfully Placed");
            resolve("OrderID_123");
        },1000);
    });
};


const confirmOrder = (orderID) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Order Confirmed for Order ID: ${orderID}`);
            resolve('confirmed');
        },1500);
    });
};

const deliverOrder = (status) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(status == 'confirmed'){
                console.log("✅ Order delivered");
                resolve('Done');
            }
            else{
                reject('❌ Delivery failed')
            }
        },2000)
    });
};

//using Promises

orderFood()
    .then(orderId =>confirmOrder(orderId))
    .then(status => deliverOrder(status))
    .then(result => console.log("Customer Happy"))
    .catch(error => console.log('Error:',error))
