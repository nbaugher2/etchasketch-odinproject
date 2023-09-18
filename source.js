function colorDiv(event){
	this.classList.add("coloredDiv");
}

const container = document.querySelector('#container');

function createGrid(boundary){
	container.style.width = boundary * 10 + "px";
	container.style.height = boundary * 10 + "px";

	for(let i = 0; i < boundary; i++){
		for(let j = 0; j < boundary; j++){
			let tempDiv = document.createElement("div");
			tempDiv.addEventListener('mouseover', colorDiv);
			container.appendChild(tempDiv);

		}
	}
}


function newBorder(event){
	let boundary = Number(prompt("Set boundary less than equal to 100", ""));
	if (boundary > 100){
		return;
	}
	container.innerHTML = '';
	createGrid(boundary);
}

let btn = document.querySelector('#numButton');
btn.addEventListener('click', newBorder);

createGrid(15);