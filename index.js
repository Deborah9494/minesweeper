const MATRIX_WIDTH = 5
const MATRIX_HEIGHT = 5
const NUM_BOMBS = 3

const tabla = document.getElementById("tabla")
const bombCoordinates = []

function createMatrix(){
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
	for(let i=0; i<NUM_BOMBS;i++){
		bombCoordinates.push([
			Math.floor(Math.random() * MATRIX_WIDTH),
			Math.floor(Math.random() * MATRIX_HEIGHT)
		]);
	}
}

function checkCell(event){
	console.log('function checkCell called', event.target.id);
	const [x, y] = event.target.id.split(',');
	
	const {target} = event;

	for (const bombCoordinate of bombCoordinates){
		if(bombCoordinate[0] === parseInt(x) && bombCoordinate[1] === parseInt(y)){
			//target.style.backgroundColor = "red";
			// change the Hex from here
			target.textContent = String.fromCodePoint(0x1F4A5);
			alert("Boom");
			break
		}else{
			target.style.backgroundColor = "#D3D3D3";
			target.style.border = "none";
		}
	}
}

function calcBombsAround(x, y){

}

createMatrix();
populateMatric();