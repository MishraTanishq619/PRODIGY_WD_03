var grid = document.getElementById("grid");
var boxes = document.getElementsByClassName("box");
var resetButton = document.getElementById("reset");
var b = 0;
var X = [];
var Xwins = 0;
var O = [];
var Owins = 0;

var scoreX = document.getElementById("scorex");
var scoreO = document.getElementById("scoreo");

var winCombos = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

// functions :

const clickHandler = (t) => {
	if (b % 2 == 0) {
		t.innerHTML = "X";
		X.push(parseInt(t.attributes.key.value));
		X.sort();
		console.log(X);
	} else {
		t.innerHTML = "O";
		O.push(parseInt(t.attributes.key.value));
		O.sort();
		console.log(O);
	}
	b += 1;
	checkWinner(b);
};

grid.addEventListener(
	"click",
	(e) => {
		if (e.target.innerHTML == "") {
			clickHandler(e.target);
		}
	},
	false
);

resetButton.addEventListener("click", () => {
	console.log(boxes);
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = "";
	}
	X = [];
	O = [];
	b = 0;
});

const checkWinner = (b) => {
	var arr = b % 2 ? X : O;
	console.log(arr);

	for (const i of winCombos) {
		if (
			(arr.includes(i[0]) && arr.includes(i[1]) && arr.includes(i[2])) ==
			true
		) {
			var w = "";
			if (b % 2) {
				w = "X";
				Xwins++;
				scoreX.innerHTML = Xwins;
			} else {
				w = "O";
				Owins++;
				scoreO.innerHTML = Owins;
			}

			grid.removeEventListener(
				"click",
				(e) => {
					if (e.target.innerHTML == "") {
						clickHandler(e.target);
					}
				},
				false
			);

			console.log("Game Over, Player : " + w + " Wins.");
		}
	}
};
