let cells = document.querySelectorAll('#field td');

start(cells);

function start(cells) {
	let i = 0; 
	
	for (let cell of cells) {
		cell.addEventListener('click', function step() {
			if (i % 2 == 0) {
				this.innerHTML = 'X';
			} else {
				this.innerHTML = 'O';
			}

            this.removeEventListener('click', step);

			if (isVictory(cells)) {
				alert(this.innerHTML);
			} else if (i == 8) {
				alert('ничья');
			}
			
			i++;
		});
	}
}

function isVictory(cells) {
	let combs = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combs) {
		if (
			cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
			cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
			cells[comb[0]].innerHTML != ''
		) {
			return true;
		}
	}
	
	return false;
}






// Я предложу решить задачу короче. Сделаем массив наших 'игроков':

// let gamers = ['X', 'O'];
// Как вы видите, в этом массиве крестик имеет ключ 0, а нолик - ключ 1. То же самое можно сказать и про i % 2 - для крестика остаток будет 0, а для нолика - 1.

// То есть эту штуку можно использовать вместо ключа:

// let gamers = ['X', 'O'];
// let key = i % 2;

// console.log(gamers[key]);
// Или еще короче:

// let gamers = ['X', 'O'];
// console.log(gamers[i % 2]);
// Или еще короче:

// console.log(['X', 'O'][i % 2]);
// Упростим теперь код нашей функции start:

// function start(cells) {
// 	let i = 0;
	
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function() {
// 			this.innerHTML = ['X', 'O'][i % 2];
// 			i++;
// 		});
// 	}
// }