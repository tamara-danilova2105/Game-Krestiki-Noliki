const cells = document.querySelectorAll('td');

let i = 0;
let isWin = false;
let winner = '';

const mountains = '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fmountain1.png?v=1633004482862" alt="горы">';
const sea = '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fbeach.png?v=1633004532493" alt="море">'

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

function step(e) {
    if (i % 2 === 0) e.target.innerHTML = mountains;
    else e.target.innerHTML = sea;

    e.target.removeEventListener('click', step);
    i++;

    getWinner();

    if (!isWin && i === cells.length) {
        Swal.fire({
            icon: 'success',
            title: 'Победила ДРУЖБА!',
        })
    } else if (isWin) {
        Swal.fire({
            icon: 'success',
            title: `${winner}`,
        });
    }
};

for (item of cells) {
    item.addEventListener('click', step);
};

function removesEventClick() {
    cells.forEach(item => {
        item.removeEventListener('click', step);
    });
};

function getWinner() {
    for (let i = 0; i < combs.length; i++) {
        if (cells[combs[i][0]].innerHTML === mountains
            && cells[combs[i][1]].innerHTML === mountains
            && cells[combs[i][2]].innerHTML === mountains) {
            removesEventClick();
            winner = "Победили горы!"; isWin = true;
            return;
        }
        else if (cells[combs[i][0]].innerHTML === sea
            && cells[combs[i][1]].innerHTML === sea
            && cells[combs[i][2]].innerHTML === sea) {
            removesEventClick();
            winner = "Победило море!"; isWin = true;
            return;
        }
    }
};
