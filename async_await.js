const promise = () => new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("Hai i am harsha");
  }, 1000);
})

const promise1 = () => new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve("Hai i am harsha1");
  }, 1000);
})

async function fun() {
  console.log("I am start");

  await promise().then((data)=>{
    console.log("I am accepted!", data);
  }).catch((data)=>{
    console.log("I am rejected!", data);
  })

  const data = await promise1();

  console.log(data);
  
  console.log("I am end");
}

fun();

const arro = async () => {

}