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

const clickHandler = (e) => {
	let t = e.target;
	if (e.target.innerHTML == "") {
		if (b % 2 == 0) {
			t.innerHTML = "X";
			X.push(parseInt(t.attributes.key.value));
			X.sort();
		} else {
			t.innerHTML = "O";
			O.push(parseInt(t.attributes.key.value));
			O.sort();
		}
		b += 1;
		checkWinner(b);
	}
};

grid.addEventListener("click", clickHandler);

resetButton.addEventListener("click", () => {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].innerHTML = "";
	}
	X = [];
	O = [];
	b = 0;

	grid.addEventListener("click", clickHandler);
});

const checkWinner = (b) => {
	var arr = b % 2 ? X : O;

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

			grid.removeEventListener("click", clickHandler);
		}
	}
};
