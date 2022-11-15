function getSwapiInfo() {
    let promise1 = fetch('https://swapi.tech');
    
    let promise2 = promise1.then(function(response){
        console.log(response);
        return response.json()//return a promise

    });

    promise2.then(function(data){
        console.log(data)
    });

}
getSwapiInfo();
// when the promise is resolved
// 1. return resolved data
// 2. then method on that promise is called
// 3. callback function of then method is executed


// fetch is the api we use to get information

// the promise is an acync function 
// included in a .then statement
//  how to replace an append child
// your fetching data and you can set it to await

// shuffle annimation