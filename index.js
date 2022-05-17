// Code your solutions in this file
function writeCards(names, type) {
    const messages = []
    for(let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful ${type} gift!`);
    }
    
    return messages
}

function countDown(number) {
    for(let i = number; i >= 0; i--) {
        console.log(i);
    }
}