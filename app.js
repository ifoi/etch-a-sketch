

const body = document.querySelector("body");
const container = document.createElement('div');
container.className = 'container';

const changeBtn = document.getElementById("changeBtn") ;
console.log(changeBtn) ;


let numberOfBoxes = 16 * 16 ;

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

function handleMouseOverBox () {
   this.style.backgroundColor = "red" ;

}