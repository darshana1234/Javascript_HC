const JSUser = {
    name:"Hitesh",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    LastLoginDays : ["Monday","Tuesday"]
}

//To access object
console.log(JSUser.email)
console.log(JSUser["email"])
console.log(JSUser["location"])

JSUser.greeting = function()
{
    console.log("Hello JS User");
}

JSUser.greetingTwo = function()
{
    console.log(`Hello JSUser, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());