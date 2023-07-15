const cell = document.querySelectorAll('td');

    let i = 0;

    for (let item of cell) {
        item.addEventListener('click', function step() {
            if (i % 2 === 0) {
            item.textContent = 'X';
            }
            else {
            item.textContent = 'O';
            }

            item.removeEventListener('click', step);

            i++;
            getWinner()

            if (i===9) {
                Swal.fire({
                    icon: 'success',
                    title: 'НИЧЬЯ!',
                    text: `Победила Дружба`,
                })               
            }
        })

        function getWinner() {
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
    
            for (let i = 0; i<combs.length; i++) {

                if (cell[combs[i][0]].textContent === 'X' 
                && cell[combs[i][1]].textContent === 'X' 
                && cell[combs[i][2]].textContent === 'X')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'ПОБЕДА!',
                        text: `Победили крестики`,
                    });
                    
                }

                else if (cell[combs[i][0]].textContent === 'O' 
                && cell[combs[i][1]].textContent === 'O' 
                && cell[combs[i][2]].textContent === 'O')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'ПОБЕДА!',
                        text: `Победили нолики`,
                    });
                    
                }
            }           
        }
    
    }








// 


// РАБОТАЛО ЧЕРЕДОВАНИЕ, НО ТОЛЬКО В РАМКАХ ОДНОЙ ЯЧЕЙКИ
// cell.forEach (item => {
//     let i = 0;
//     item.addEventListener ('click', function() {
//         if (i%2 === 0) {
//             item.textContent = 'Х';
//         }
//         else {
//             item.textContent = 'O'
//         }

//         i++;
//     })
// })


// не работает вообще - постоянно выдает ошибки в консоли
// for (let i = 0; i < cell.length; i++) {
//     cell[i].addEventListener('click', step);
// }

// function step() {
//     if (cell % 2 === 0) {
//         cell.textContent = 'X';
//     } else {
//         cell.textContent = 'O';
//         }
//     }
