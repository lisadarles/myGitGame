//Pourcentage of effort
//Tiong Jia En: A0129564X => 100%
//Darles Lisa: E0009208 => 100%

//http://speckyboy.com/demo/windmill-demo/index.html
require(
    [],
    function () {
            
        console.log("yo, I'm alive!"); //to check JS is working properly

        //link to the paper using document.getElementbyID
        var paper = new Raphael(document.getElementById("mySVGCanvas"));

        //Variables to initialize the game
        var counter = 0;
        var maxCount = 10;
        var starttime;
        var totaltime;
   
        //creating startbutton for the game   
        //And decorating it with text and color
                                    // x, y, radius
        var startButton = paper.circle(300, 200, 40);
        var startText = paper.text(300, 200, 'BEGIN GAME');
        startButton.attr({
            stroke: "black",
            fill: "red"
        });

        //hiding the whole start button using hide function
        startButton.hide();
        startText.hide();

        //this ready function will show the start button when we are ready
        var ready = function(){
            startButton.show();
            startText.show();
        }
        
        //create the graphic rectangle target for players to click
        var rect1 = paper.rect(0,0,100,100);
        rect1.attr({
            'fill': "hsl(240, 50, 50)",
            'stroke': '#3b4449',
            'stroke-width': 10,
            'stroke-linejoin': 'round',
            'opacity': 1
            
        });

        // Create a variable that will move the rectangle using the random function
        var randInt = function( m, n ) {
            var range = n-m+1;
            var frand = Math.random()*range;
            return m+Math.floor(frand);
        }

        // Create a start variable with the prompt box that allows the player to choose the difficulty level
        var start = function (){
            var difficulty = prompt("Please select a difficulty level: \n\n 1 = novice \n 2 = professional \n 3 = master");

            //when the game starts, the following codes allows startbutton and text to be hidden 
            console.log("game is starting ");
            startButton.hide();
            startText.hide();

            //initialises the counter to start at 0
            counter = 0;
            starttime = Date.now();
            console.log("time = " + starttime);

            //Calling the square move function to move the square
            moveSquare();

            //setting 3 different scenarios for 3 different difficulty levels
            //creating new attributes for the target such that different difficulty levels provides different size, speed and opacity of target
            //opacity: 0 - 1, where 1 is the most opaque

            if(difficulty === "1") {
                rect1.attr({
                    'width': 75,
                    'height': 75,
                    'opacity': 1
                });
                setInterval(moveSquare,2000)
            }

            if(difficulty === "2") {
                rect1.attr({
                    'width': 30,
                    'height': 30,
                    'opacity': 0.6
                });
                setInterval(moveSquare,1500)
            }

            if(difficulty === "3") {
                rect1.attr({
                    'width': 15,
                    'height': 15,
                    'opacity': 0.4
                });
                setInterval(moveSquare,1000)

            }

            
            var tcounter = 0   //starting number for counter (CREATE OUTSIDE VAR. If you create inside it will keep starting from 0)
            myTicker = setInterval( function (){
                    tcounter++;        //this means tcounter = tcounter +1
                    console.log("The amount of time lapsed is " + tcounter + " seconds ");
                    }, 1000);

            setTimeout(reset, 10000);

             }   

             //Reset the end of the game after 10 seconds
                //clearing intervals to resert both timer and movement of square
                var reset = function(){ 
                    clearTimeout(myTicker);
                   
                    console.log("10 seconds have passed. Timer is reset. ");
                  
                  //End the game and hide the square offscreen at the end of the 10 seconds
                    rect1.hide
                   
                    ready();

                  // display of an alert box when the game ends
                    confirm("Yay! You accumulated a total of " + counter + " clicks!");                          
             
                }

        // Create a function that will move the square using the variable randInt defined earlier
         var moveSquare = function(){
            var posX, posY;

            counter++; //increase counter per click
            console.log("Your square move count is now " + counter);

            if (totaltime>=10000) { 
            totaltime = (Date.now()-starttime)/1000; //divide by 1000 because it is in seconds
                rect1.hide;
                ready(); //to let start button appear again

          } else {
                posX = randInt(0,5); //6 positions horizontally 0,1,2,3,4,5
                posY = randInt(0,3); //4 positions vertically 0,1,2,3,4
                rect1.attr({
                    x: posX*100, //because our box is 100px by 100px
                    y: posY*100
                });

            }
        
          }

          
        //Add event listener with a click command to the target rectangle and start button respectively
        //Serves to allow buttons to be clicked and gives respective function stated
        //For instance, rect1 will call moveSquare function
        //startButton to call for start function

                                         //function to call
        rect1.node.addEventListener('click', moveSquare);

        startButton.node.addEventListener('click', start);

        ready(); // Put the start button on the screen 

    });