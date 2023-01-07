let x = 0;
let y = 0;

function ok() {
    x = document.getElementById('x').value; // x
    y = document.getElementById('y').value; //y

    let natija = x + "" + y;

    let foo = document.getElementById(natija).innerHTML = '&#9816;';

    document.getElementById('x').value = '';
    document.getElementById('y').value = '';
    document.getElementById('x').disabled = true;
    document.getElementById('y').disabled = true;
    document.getElementById('myButton').disabled = true;

}



let yurishLength = document.querySelectorAll('.clickGo').length;
// console.log(yurishLength);

for (let i = 0; i < yurishLength; i++) {
    document.querySelectorAll('.clickGo')[i].addEventListener('click', function() {
        let idClick = this.id;
        let selectedY = idClick % 10;
        let selectedX = (idClick - selectedY) / 10;
        x = +x;
        y = +y; 
        console.log('xElement = ' + selectedX);
        console .log('yElement = ' + selectedY); 
        // let foo1 = idClick.slice(0, 1);
        // let foo2 = idClick.slice(1, 2);


        if  (Math.abs( x - selectedX)  === 1 && Math.abs( y - selectedY) === 2 || Math.abs( y - selectedY) === 1 && Math.abs( x - selectedX === 2)) {
            for (let i = 0; i < yurishLength; i++){
                document.querySelectorAll('.clickGo')[i].innerHTML = ""
                x = selectedX
                y = selectedY
            }
            document.getElementById(idClick).innerHTML = '&#9816;'


        }   
        


    })
}

