const MATRIX_WIDTH = 5
const MATRIX_HEIGHT = 5
const NUM_BOMBS = 3

const tabla = document.getElementById("tabla");
const bombCoordinates = [];
let safeCellsClicked = 0;
const TOTAL_SAFE_CELLS = MATRIX_WIDTH * MATRIX_HEIGHT - NUM_BOMBS;

// grid creaton
function createMatrix(){
	tabla.innerHTML = ''; // clean the grid if already exists
	for (let y=0; y<MATRIX_HEIGHT; y++){

		const tr = document.createElement('tr');
		for (let x=0; x<MATRIX_WIDTH; x++){

			const td = document.createElement('td')
			td.id = `${x},${y}`
			td.addEventListener('click', checkCell);
			tr.appendChild(td);

		}
		tabla.appendChild(tr)
	}
}


function populateMatric(){
	bombCoordinates.length = 0; // reset array bombs
	/*for(let i=0; i<NUM_BOMBS;i++){
		bombCoordinates.push([
			Math.floor(Math.random() * MATRIX_WIDTH),
			Math.floor(Math.random() * MATRIX_HEIGHT)
		]);
	}
	*/
	while(bombCoordinates.length < NUM_BOMBS){
        const x = Math.floor(Math.random() * MATRIX_WIDTH);
        const y = Math.floor(Math.random() * MATRIX_HEIGHT);

        // Check duplicates
        let duplicate = false;
        for(let i=0; i<bombCoordinates.length; i++){
            if(bombCoordinates[i][0] === x && bombCoordinates[i][1] === y){
                duplicate = true;
                break;
            }
        }

        if(!duplicate){
            bombCoordinates.push([x, y]);
        }
    }
}

function checkCell(event){
	console.log('function checkCell called', event.target.id);
	const [x, y] = event.target.id.split(',');
	
	const {target} = event;

	if(target.classList.contains('clicked')) {return;} // già cliccata
    target.classList.add('clicked');
    safeCellsClicked++;

	for (const bombCoordinate of bombCoordinates){
		if(bombCoordinate[0] === parseInt(x) && bombCoordinate[1] === parseInt(y)){
			//target.style.backgroundColor = "red";
			// change the Hex from here
			target.textContent = String.fromCodePoint(0x1F4A5);
			safeCellsClicked--;
			
			target.style.backgroundColor = 'red';
	        target.style.transition = 'transform 0.2s';
	        target.style.transform = 'scale(1.5) rotate(15deg)';

	        setTimeout(() => {
	            target.style.transform = 'scale(1) rotate(0deg)';
	        }, 200);

	        setTimeout(() => {
	            alert("Boom! Hai perso! La griglia si resetta.");
	            resetGame();
	        }, 1000);
			break
		}else{
			target.style.backgroundColor = "#D3D3D3";
			target.style.border = "none";
			
        	if(safeCellsClicked === TOTAL_SAFE_CELLS){
            	alert("Hai vinto! Tutte le celle sicure sono state scoperte!");
            	resetGame();
            	break
        	}
		}
	}
}

function resetGame(){
    safeCellsClicked = 0;
    createMatrix();
    populateMatric();
}

createMatrix();
populateMatric();