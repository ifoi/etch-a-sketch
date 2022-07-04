

const body = document.querySelector("body");
const container = document.createElement('div');
container.className = 'container';

const changeBtn = document.getElementById("changeBtn") ;
console.log(changeBtn) ;

let numberOfBoxes = 16 * 16 ;

changeBtn.addEventListener("click", changeNumOfBoxes) ;

// function createGrid() {
    // create boxes
    for( let i= 1; i <= numberOfBoxes; i++ ) {
        const box = document.createElement('div');
        let id = i ;
        box.className = 'box';
        box.setAttribute("id", `box${id}`)  ;

        box.addEventListener("mouseover", handleMouseOverBox);
                
        // add box to container
        container.appendChild(box);

         }
        
    body.appendChild(container); 

// }

// createGrid() ;


function handleMouseOverBox () {
   this.style.backgroundColor = "red" ;

}

function changeNumOfBoxes () {
    let input = prompt("Please enter the number squares per side you want: max 100") ;
       if (isValidInput) {
            let size = parseInt(input) ;
            numberOfBoxes = size * size ;  
            createGrid() ;

        } else alert("Please enter a valid number less between 1 and 100") ;
}

function isValidInput(userInput) {
    If( userInput === undefined || userInput === null || !Number.isInteger(userInput)) 
    return false ;
          
    let num = parsInt(userInput) ;
    if(  1 <= num  && num  <= 100) {

    return true ;
        }else  {
            return false ;
        }
    

}