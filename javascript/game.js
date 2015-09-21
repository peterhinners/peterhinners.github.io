
	//Big props to http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/ for creating an awesome tutorial.
			window.scrollTo(0,document.body.scrollHeight);
			var music = document.getElementById("audiotag1");
			var toons = document.getElementById("audiotag2");
			function playMusic() {
				music.play();
			}

			function loadMusic () {
				music.load();
			}

			function pauseMusic () {
				music.pause();
				music.currentTime=0;
				music.volume = 0;
			}

			function pauseToons() {
				toons.pause();
				toons.currentTime=0;
				toons.volume = 0;
			}

			function playVictory() {
					toons.play();
			}
			
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			document.body.appendChild(canvas);

			// Background images
			var image1 = "../imgs/background1.png"; 
			var image2 = "../imgs/background2.png"; 
			var image3 = "../imgs/background3.png"; 
			var image4 = "../imgs/background4.png"; 
			var image5 = "../imgs/background5.png";
			var image6 = "../imgs/fireworks2.png";
			var image7 = "../imgs/youwin2.png";
			var image8 = "../imgs/tomwokeup.png";
			var image9 = "../imgs/cheese0.png";
			var image10 = "../imgs/cheese1.png";
			var image11 = "../imgs/cheese2.png";
			var image12 = "../imgs/cheese3.png";
			var image13 = "../imgs/cheese4.png";
			var image14 = "../imgs/cheese5.png";
			var image15 = "../imgs/cheese6.png";
			var image16 = "../imgs/cheese7.png";
			var image17 = "../imgs/cheese8.png";
			var image18 = "../imgs/cheese9.png";
			var image19 = "../imgs/cheese10.png";
			var image20 = "../imgs/cheese11.png";
			var image21= "../imgs/cheese12.png";
			var image22 = "../imgs/cheese13.png";
			var image23 = "../imgs/cheese14.png";

			//render info needed for images
			var bgReady = false;

			var bgImage1 = new Image();
			bgImage1.onload = function () {
				bgReady = true;
			} 
			bgImage1.src = image1;

			var bgImage2 = new Image();
			bgImage2.onload = function () {
				bgReady = true;
			} 
			bgImage2.src = image2;

			var bgImage3 = new Image();
			bgImage3.onload = function () {
				bgReady = true;
			} 
			bgImage3.src = image3;

			var bgImage4 = new Image();
			bgImage4.onload = function () {
				bgReady = true;
			} 
			bgImage4.src = image4;

			var bgImage5 = new Image();
			bgImage5.onload = function () {
				bgReady = true;
			} 
			bgImage5.src = image5;

			var bgImage6 = new Image();
			bgImage6.onload = function () {
				bgReady = true;
			} 
			bgImage6.src = image6;

			var bgImage7 = new Image();
			bgImage7.onload = function () {
				bgReady = true;
			} 
			bgImage7.src = image7;

			var badTom = new Image();
			badTom.onload = function () {
				bgReady = true;
			} 
			badTom.src = image8;

			var cheese0 = new Image();
			cheese0.onload = function () {
				bgReady = true;
			} 
			cheese0.src = image9;

			var cheese1 = new Image();
			cheese1.onload = function () {
				bgReady = true;
			} 
			cheese1.src = image10;

			var cheese2 = new Image();
			cheese2.onload = function () {
				bgReady = true;
			} 
			cheese2.src = image11;

			var cheese3 = new Image();
			cheese3.onload = function () {
				bgReady = true;
			} 
			cheese3.src = image12;

			var cheese4 = new Image();
			cheese4.onload = function () {
				bgReady = true;
			} 
			cheese4.src = image13;

			var cheese5 = new Image();
			cheese5.onload = function () {
				bgReady = true;
			} 
			cheese5.src = image14;

			var cheese6 = new Image();
			cheese6.onload = function () {
				bgReady = true;
			} 
			cheese6.src = image15;

			var cheese7 = new Image();
			cheese7.onload = function () {
				bgReady = true;
			} 
			cheese7.src = image16;

			var cheese8 = new Image();
			cheese8.onload = function () {
				bgReady = true;
			} 
			cheese8.src = image17;

			var cheese9 = new Image();
			cheese9.onload = function () {
				bgReady = true;
			} 
			cheese9.src = image18;

			var cheese10 = new Image();
			cheese10.onload = function () {
				bgReady = true;
			} 
			cheese10.src = image19;

			var cheese11 = new Image();
			cheese11.onload = function () {
				bgReady = true;
			} 
			cheese11.src = image20;

			var cheese12 = new Image();
			cheese12.onload = function () {
				bgReady = true;
			} 
			cheese12.src = image21;

			var cheese13 = new Image();
			cheese13.onload = function () {
				bgReady = true;
			} 
			cheese13.src = image22;

			var cheese14 = new Image();
			cheese14.onload = function () {
				bgReady = true;
			} 
			cheese14.src = image23;


			// Jerry image & Jerry render info
			var jerryReady = false;
			var jerryImage = new Image();
			jerryImage.onload = function () {
				jerryReady = true;
			}
			jerryImage.src = "../imgs/jerry2.png";

			// Tom image & Tom render info
			var tomReady = false;
			var tomImage1 = new Image();
			var tomImage2 = new Image();
			tomImage1.onload = function () {
				tomReady = true;
			}
			tomImage1.src = "../imgs/sleepingtom.png";
			tomImage2.src = "../imgs/tj101.png";

			// Cheese image & Cheese render info
			var cheeseReady = false;
			var cheeseImage = new Image();
			cheeseImage.onload = function () {
				cheeseReady = true;
			}
			cheeseImage.src = "../imgs/maincheese.png";

			// Game objects
			var jerry = {
				speed: 400, // movement in pixels per second
				x: 0,
				y: 0
			};
			var tom = {
				x: 0,
				y: 0
			};
			var cheese = {
				x: 0,
				y: 0
			};


			var ateCheese = 0;

			// Keyboard controls...when is a key being pressed?
			var keysDown = {};

			addEventListener("keydown", function (e) {
				keysDown[e.keyCode] = true;
			}, false);

			addEventListener("keyup", function (e) {
				delete keysDown[e.keyCode];
			}, false);

			// Reset the objects positions when the player catches the cheese
			// Also added some loose object detection so that if Tom or Jerry or
			// the Cheese are too close to each other, they get assigned 
			// another random position. 
			var reset = function () {
				jerry.x = 32 + (Math.random() * (canvas.width - 100));
				jerry.y = 32 + (Math.random() * (canvas.height - 100));

				tom.x = 32 + (Math.random() * (canvas.width - 250));
				tom.y = 32 + (Math.random() * (canvas.height - 200));

				cheese.x = 32 + (Math.random() * (canvas.width - 100));
				cheese.y = 32 + (Math.random() * (canvas.height - 100));

				if (
					jerry.x <= (tom.x + 432)
					&& tom.x <= (jerry.x + 72)
					&& jerry.y <= (tom.y + 204)
					&& tom.y <= (jerry.y + 80)
				) {
					jerry.x = 32 + (Math.random() * (canvas.width - 100));
					jerry.y = 32 + (Math.random() * (canvas.height - 100));
				}

				if (
					jerry.x <= (cheese.x + 72)
					&& cheese.x <= (jerry.x + 72)
					&& jerry.y <= (cheese.y + 66)
					&& cheese.y <= (jerry.y + 80)
					) {
					jerry.x = 32 + (Math.random() * (canvas.width - 100));
					jerry.y = 32 + (Math.random() * (canvas.height - 100));
				}

				if (
					tom.x <= (cheese.x + 72)
					&& cheese.x <= (tom.x + 432)
					&& tom.y <= (cheese.y + 66)
					&& cheese.y <= (tom.y + 204)
					) {
					cheese.x = 32 + (Math.random() * (canvas.width - 100));
					cheese.y = 32 + (Math.random() * (canvas.height - 100));
				}

			}

			// Update Jerry's position based on arrow key input; added 
			// loose border protection. Modifier parameter keeps Jerry
			// running at the same speed no matter how fast or slow the
			// script is running. See Matt Hackett's article.
			var update = function (modifier) {
				if (38 in keysDown) { // Player holding up
					jerry.y -= jerry.speed * modifier;
					if (jerry.y < -50) {
			    jerry.y = -50;
					}
				}
				if (40 in keysDown) { // Player holding down
					jerry.y += jerry.speed * modifier;
					if (jerry.y > 570) {
			    jerry.y = 570;
					}
				}
				if (37 in keysDown) { // Player holding left
					jerry.x -= jerry.speed * modifier;
					if (jerry.x < -40) {
			    jerry.x = -40;
					}
				}
				if (39 in keysDown) { // Player holding right
					jerry.x += jerry.speed * modifier;
					if (jerry.x > 870) {
			    jerry.x = 870;
					}
				}

			// Does Jerry eat the cheese?
				if (
					jerry.x <= (cheese.x + 32)
					&& cheese.x <= (jerry.x + 32)
					&& jerry.y <= (cheese.y + 32)
					&& cheese.y <= (jerry.y + 32)
					) {
					++ateCheese;
					reset();
					}

			}
			// When Tom wakes up and takes all Jerry's cheese
			var noMoreCheese = function () {
				ateCheese = 0;
			}
			// Main rendering function, when Tom is still asleep
			var render = function () {
				if (bgReady) {
					if (ateCheese < 3) 
						ctx.drawImage(bgImage1, 0, 0);
					else if (ateCheese < 6)
						ctx.drawImage(bgImage4, 0, 0);
					else if (ateCheese < 9)
						ctx.drawImage(bgImage2, 0, 0);
					else if (ateCheese < 12)
						ctx.drawImage(bgImage5, 0, 0);
					else if (ateCheese <15)
						ctx.drawImage(bgImage3, 0, 0);
					else
						ctx.drawImage(bgImage1, 0, 0);
				}

				if (jerryReady) {
					ctx.drawImage(jerryImage, jerry.x, jerry.y);
				}

				if (tomReady) {
					ctx.drawImage(tomImage1, tom.x, tom.y);
				}

				if (cheeseReady) {
					ctx.drawImage(cheeseImage, cheese.x, cheese.y);
				}

				if (bgReady) {
					if (ateCheese === 0)
						ctx.drawImage(cheese0, 32, 32);
					if (ateCheese === 1)
						ctx.drawImage(cheese1, 32, 32);
					if (ateCheese === 2)
						ctx.drawImage(cheese2, 32, 32);
					if (ateCheese === 3)
						ctx.drawImage(cheese3, 32, 32);
					if (ateCheese === 4)
						ctx.drawImage(cheese4, 32, 32);
					if (ateCheese === 5)
						ctx.drawImage(cheese5, 32, 32);
					if (ateCheese === 6)
						ctx.drawImage(cheese6, 32, 32);
					if (ateCheese === 7)
						ctx.drawImage(cheese7, 32, 32);
					if (ateCheese === 8)
						ctx.drawImage(cheese8, 32, 32);
					if (ateCheese === 9)
						ctx.drawImage(cheese9, 32, 32);
					if (ateCheese === 10)
						ctx.drawImage(cheese10, 32, 32);
					if (ateCheese === 11)
						ctx.drawImage(cheese11, 32, 32);
					if (ateCheese === 12)
						ctx.drawImage(cheese12, 32, 32);
					if (ateCheese === 13)
						ctx.drawImage(cheese13, 32, 32);
					if (ateCheese === 14)
						ctx.drawImage(cheese14, 32, 32);

				} 

			}

			// Render the following when Tom wakes up...
			var render2 = function () {

				
				if (bgReady) {
					ctx.drawImage(bgImage1, 0, 0);
				}

				if (jerryReady) {
					ctx.drawImage(jerryImage, jerry.x, jerry.y);
				}

				if (tomReady) {
					ctx.drawImage(tomImage2, tom.x, tom.y);
				}

				if (bgReady) {
					ctx.drawImage(badTom, 32, 32);
				}

					noMoreCheese();
			}

			// Win screen; render when Jerry collect 15 pieces of cheese
			var render3 = function () {
				
				if (bgReady) {
					ctx.drawImage(bgImage6, 0, 0);
				}

				if (bgReady) {
					ctx.drawImage(bgImage7, (canvas.width / 2 - 150), (canvas.height /2 - 90));
				}

				if (jerryReady) {
					ctx.drawImage(jerryImage, jerry.x, jerry.y);
				}
				playVictory();
				gameOver();
				
				}

			// when Jerry collects 15 pieces of cheese, slow his speed down
			// to zero so he can't interact with other objects anymore
			var gameOver = function () {
				jerry.speed = 0;
			}

			// Main game loop
			var main = function () {
				
				if (ateCheese >= 4) {
					pauseMusic();
					playVictory(); // when Jerry wins, play new song
				} else {
					playMusic();
				}
				var now = Date.now();
				var delta = now - then; // how much time has passed since then and now

				update(delta / 1000); // this is the modifier parameter (see above)
				if (
					jerry.x <= (tom.x + 380)
					&& tom.x <= (jerry.x + 32) // If Jerry and Tom are touching
					&& jerry.y <= (tom.y + 100) // do the 2nd render where
					&& tom.y <= (jerry.y + 32) // Tom wakes up
				) {
					render2();
			} else if (ateCheese < 4) {
						render(); // If haven't eaten 15 pieces of cheese yet do the main render
				} else {
						render3(); // If Jerry ate 15 pieces, do the win game render 3.
				}
				
				then = now;

				// Request to do this again ASAP
				requestAnimationFrame(main);
			}



			// Cross-browser support for requestAnimationFrame
			var w = window;
			requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

			// Play the game...
			var then = Date.now();
			reset();
			main();





	
