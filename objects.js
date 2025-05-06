//Objects modification
 
const myCity = {
    city: "Rio de Janeiro"
}

myCity.popular = true;
myCity["country"] = "Brasil";

console.log(myCity);

//removing properties
delete myCity.popular;

console.log(myCity);

//nasted object

const user = {
    name: "Zeca",
    age: 35,
    info: {
        address: "Rua 3",
        city: "São Paulo"
    }
}

console.log(user.info.address);

delete user.info.address;

console.log(user);






