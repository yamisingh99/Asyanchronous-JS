// function returning promise


//promise example in a easy way

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const val=true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }
// myPromise().then(()=>{
//     console.log("resolve")
// }).catch(()=>{
//     console.log("reject")
// });


//real promoise situation

function ricePromise(){
    const bucket = ['coffee', 'chips','vegetables','salts','rice'];
    return new Promise((resolve,reject)=>{
      if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
          resolve({value:"friedrice"});
      }else{
          reject("could not do it");
      }
    })
  }
  ricePromise().then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    ).catch(
    (error)=>{
        console.log(error)
    })