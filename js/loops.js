// Generates a random number between 0 and 255, which we can use for color
var makeRandColor = function() {
 // Get a random float between 0 and 1
 var random = Math.random();
 // Multiply it by 255 to get a random number between 0 and 255
 random = random * 255;
 // Now use Math.round to round it to a whole number, rather than a floating
 // point number.
 random = Math.round(random);
 // Now return it
 return random;
}

// A for loop that starts from 0, goes to 499.
for (var i = 0; i < 500; i ++) {

 // Create a new div, give it a class of dot.
 var div = document.createElement("div");
 div.className = "dot";

 // Generate some random numbers between 0 and 255, put them inside the vars
 // below
 var red = makeRandColor();
 var blue = makeRandColor();
 var green = makeRandColor();

 // Create one giant string that looks like a css rgb(r, g, b) color thing.
 var rgb = "rgb(" + red + "," + green + "," + blue + ")";

 // Give our newly created div our newly created color.
 div.style.backgroundColor = rgb;

 // Attach div to our webpage
 var container = document.getElementById("container");
 container.appendChild(div);
}

for (var i = 0; i < 70; i ++) {
 if (i % 7 === 0) {
   console.log("Foobly");
 } else {
   console.log(i % 7);
 }
}
