//const tinderUser = new Object()    //singleton object
const tinderUser = {}                //non-singleton object

console.log(tinderUser);

tinderUser.id ="123abc"
tinderUser.name="Sammy"

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Darshana",
            Lastname:"Biradar"
        }
    }
}

console.log(regularUser.fullname.userfullname);