///synchronous programming
//next statement occurred after completion of previous one 
//their is blocking of series of statements if one initial line of code tooks long time for execution
// ex.any code ofline can block further code
//means there is a single thread for execution of one by one code
//hence JAVASCRIPT IS SYNCHRONOUS AND SINGLE THREADED

//code without setTimeout
// console.log("script start");
// for (let i=1;i<1000;i++){
//     console.log("inside loop");
// } 
// console.log("script ends!");

//setTimeout
console.log("script start");
function helllo(){
        console.log("hello world");
    }

setTimeout(helllo,10000);
console.log("script end");


// console.log("script start");

// const id = setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);

// for (let i = 1; i < 100; i++) {
//   console.log("....");
// }
// console.log("settimeout id is ", id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("Script end");