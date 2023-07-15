const cell = document.querySelectorAll('td');

    let i = 0;

    for (let item of cell) {
        item.addEventListener('click', function step() {
            if (i % 2 === 0) {
            item.innerHTML = '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fmountain1.png?v=1633004482862" alt="горы">';
            } else {
            item.innerHTML = '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fbeach.png?v=1633004532493" alt="море">';
            }

            item.removeEventListener('click', step);
            i++;

            if (i===9) {
                Swal.fire({
                    icon: 'success',
                    title: 'Победила ДРУЖБА!',
                })               
            }
            getWinner()
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

                if (cell[combs[i][0]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fmountain1.png?v=1633004482862" alt="горы">'
                && cell[combs[i][1]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fmountain1.png?v=1633004482862" alt="горы">' 
                && cell[combs[i][2]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fmountain1.png?v=1633004482862" alt="горы">')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Победили горы!',
                    });
                }

                else if (cell[combs[i][0]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fbeach.png?v=1633004532493" alt="море">'
                && cell[combs[i][1]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fbeach.png?v=1633004532493" alt="море">' 
                && cell[combs[i][2]].innerHTML === '<img src="https://cdn.glitch.com/45d113e0-0944-4476-9ccc-f7f9ce676d38%2Fbeach.png?v=1633004532493" alt="море">')
                {
                    Swal.fire({
                        icon: 'success',
                        title: 'Победило море!',
                    });
                }
            }           
        }
    }

const button = document.querySelector('#startNewGame');

button.addEventListener ('click', function(){
    location.reload();
})