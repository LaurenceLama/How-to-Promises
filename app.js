// fetched from https://jsonplaceholder.typicode.com/users/1
const emailRef = document.querySelector(".email");
console.log(emailRef);
// how to unlock promises (2 ways)

// 1. Then method
/**fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
  response.json().then(data => {
    console.log(data)
    emailRef.innerHTML = data.email;
  })
})  
to make it better practice, follow this one below*/

/**fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  }); */

// 2. Async/Await
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //unlocks the promise, but frontend cannot comprehend this backend data so below,,
  const data = await response.json(); //unlocks the details inside the promise
  emailRef.innerHTML = data.email;
  console.log(data);
}

main(); //this lets me show the email text inside that emailRef which contains- just know it allows to show the thing



// const commands need to be up top and above these functions cause I experience errors with these below or in other places like below
// to show them in HTML 1st part (this is not the 1st part of this section so skip to how to make promise)
const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

// how to make promise
function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP") 
      resolve("undefined") //accessing this as the operating resolve shows undefined on sub-status and reveals 'else' statement below HTML
    }, 3000)
  })
}

// unlock promise(again) using async await
async function major() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status; //to show it in HTML 2nd part
}

major();


// EXERCISE LEZGO, Did pretty good did not know ill just copy lines 51 n 52 but I am still correct

function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("show video")
    }
    if (subscriptionStatus === "FREE") {
      resolve("show trailer")
    }
    else {reject("no video")}
  });
}

async function minor() {
  const status = await getSubscriptionStatus();
  statusRef.innerHTML = status;
  // console.log(await getVideo(status)); this does not show on HTML so this how do me it
  try {
    console.log(await getVideo(status))
  }
  catch (e) {
    console.log(e)
    videoRef.innerHTML = e;
  }
}

minor();