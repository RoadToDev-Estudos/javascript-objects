//Methods - properties with function as a property value

const myCity = {
    city: "New York",
    cityGreeting: function () {
        console.log('Greetings!');
    }
};

myCity.cityGreeting();