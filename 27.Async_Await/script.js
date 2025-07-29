async function findWeather(params) {
    
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("45 Deg");
        },2000)
    })

    let bengluruWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('35 Deg')
        },8000)
    })


    // delhiWeather.then((value)=>{
    //     console.log(value);
    // })
    // bengluruWeather.then((value)=>{
    //     console.log(value);
    // })

    console.log("Fetching Delhi weather....")
    let delWeather = await delhiWeather;
    console.log('Delhi Weather Fetched: ', delWeather);

    console.log('Fetching Bengluru Weather...');
    let bgrWeather = await bengluruWeather;
    console.log('Bengluru weather fetched: ',bgrWeather);

    return[delWeather,bgrWeather];
 }


 let op = findWeather();

 op.then((values)=>{
    console.log(values);
 })