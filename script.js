document.querySelector('button').onclick = function() {
    let dateStart = document.querySelector('#start-Date').value;
    let dateEnd = document.querySelector('#end-Date').value;
    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);
    let out = document.querySelector('#out');
    for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
        out.innerHTML += new Date(i).toISOString() + '<br>';
    }   
//moment.js
}