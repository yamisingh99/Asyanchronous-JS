// // Promise
// console.log("script start");
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];


// // producing a promise
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve({ value: "friedrice" });
    } else {
        reject("could not do it");
    }
})

// // consume 
// // how to consume
friedRicePromise.then(    //here then takes input as a callback function and stores the value after inside function variable after resolving promise
    //     // jab promise resolve hoga gives o/p as resolve string
    (myfriedRice) => {   //taking variable myFriedRice to take resolve string from above promise object
        console.log("lets eat ", myfriedRice);
    }
).catch(
    ///when promise rejected gives o/p as reject string
    (error) => {    //taking variable error to take rejected string from above promise object
        console.log(error)
    })
//promise works asynchronously in browser API web engine means promis is the feature of browser


// setTimeout(() => {
//     console.log("hello from settimeout")
// }, 0)

// for (let i = 0; i <= 100; i++) {
//     console.log(Math.random(), i);
// }

// console.log("script end!!!!")