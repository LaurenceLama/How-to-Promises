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
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1") //unlocks the promise, but frontend cannot comprehend this backend data so below,,
    const data = await response.json() //unlocks the details inside the promise
    emailRef.innerHTML = data.email
    console.log(data)
}

main(); //this lets me show the email text inside that emailRef which contains- just know it allows to show the thing
