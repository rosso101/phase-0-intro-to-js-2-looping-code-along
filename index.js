// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const suprise = "suprise"
const thankYou =[];

function writeCards(names, surprise) {
    for (let i = 0; i < names.lenth; i++){
        const msg = `Thank you, ${names}, for the wonderful ${surprise} gift`;
        thankYou.push(msg)
        debugger;
    }
    return thankYou
}
function countDown() {
    let count = 10
    while(count >=0) {
        console.log(count--)

    }
}

countDown()