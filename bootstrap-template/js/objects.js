
//Here's a variable, car, that stores a javascript object. We can attach
//object attributes to our car object, which can either simply store data, or
//work as a function
var car = {
  //Here's some of the simple value attributes of our car attributes
  //Notice how they all end in a comma. That's important.
  make: "Chevrolet",
  model: "Camaro",
  year: 2015,
  color: "maroon",
  Moving: false,
  speed: 0,

  //Here's our first function tha's attached to the object. Doesn't do much,
  //just increases the car's speed.
  driveForward: function() {

    if(direction == "forward"){
    this.speed = this.speed + 12;
  } else {
    this.speed = this.speed - 12;
  }

    //However, it does have an if-statement. We can use these to check if
    //certain things are true, and run some code if they are.
    //Here, we're checking to see if the car's speed is greater than 0
    //
    //"this" is special keyword that is used to refer to the car object that
    //our function is attached to.
    if (this.speed > 0 || this.speed < 0) {
      this.moving = true;
    }

    //We can also use symbols like this to see if something is greater than or
    // equal to another value.
    if (this.speed >= 1000){
        console.log("You're going crazy fast");
    }

    //This symbol is used to check to see if two things are equal. We need to
    //use two "==" symbols, because javascript is kinda dumb and gets confused
    // if we only use one (try it and see what happens).
    if (this.speed == 88){
      this.make= "DeLorean";
      this.model= "DMC-12";
    }




    //Finally, call the update function attached to the car object to update
    //our html
    this.update();
  },


    //This function is used anytime the form triggers a submit event. When it
    //does, we pull data from the form and update the car's attributes.
    getForm: function(event) {
      event.preventDefault();

        //Really confusing, but we can't actually use the "this" keyword inside
        //this function. Why? The answer is at the bottom of the page.
      car.make = document.getElementById("form-make").value;
      car.make = document.getElementById("form-model").value;

      var color = document.getElementById("color").value;

        if (color =="Blue") {
            document.getElementById("carTop").style.borderBottomColor = "#4392FF";
            document.getElementById("carBody").style.backgroundColor = "#4392FF";

        } else if (color == "Green"){
          document.getElementById("carTop").style.borderBottomColor = "#00FF58";
          document.getElementById("carBody").style.backgroundColor = "#00FF58";


        }

    car.update();
    },

    update: function(){
      document.getElementById("speed").innerHTML = this.speed;
      document.getElementById("make").innerHTML = this.make;
      document.getElementById("model").innerHTML = this.model;

      if (this.moving) {
        document.getElementById("moving").innerHTML = "Yes";
      } else {
        document.getElementById("moving").innerHTML = "No";
      }
  }
}
  //This is the reason why we can't use "this" in our getForm function.
  document.getElementById("form").onsubmit = car.getForm;


  //Call update at the bottom of the page to update the html when the page First
  //loads.
  car.update();



  var sky = "Is Raining";
  var day = "Thursday";
  if (sky == "Is Raining && day == "Thursday) {
    console.log("Go watch Netflix");
  } else {
    console.log("Do something else");
  }
