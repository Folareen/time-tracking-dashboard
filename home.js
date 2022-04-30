const DAILY = document.querySelector('.daily');
const WEEKLY = document.querySelector('.weekly');
const MONTHLY = document.querySelector('.monthly');
let allTracks = document.querySelectorAll('.track')
let allCurrentTracks = document.querySelectorAll('.current-value');
let allPreviousTracks = document.querySelectorAll('.previous-value')

DAILY.addEventListener('click', displayDaily);
WEEKLY.addEventListener('click', displayWeekly);
MONTHLY.addEventListener('click', displayMonthly);

let dataObj;
async function getData(){
    const res = await fetch('data.json');
    const data = await res.json();
    dataObj = data;
}
getData();

function displayDaily(){
    DAILY.classList.add("active");
    WEEKLY.classList.remove("active");
    MONTHLY.classList.remove("active");
    for(let i = 0; i < allTracks.length; i++ ){

        allCurrentTracks[i].innerHTML = `${dataObj[i].timeframes.daily.current}hrs`

        allPreviousTracks[i].innerHTML = `Yesterday - ${dataObj[i].timeframes.daily.previous}hrs`
    }
}

function displayWeekly(){
    DAILY.classList.remove("active");
    WEEKLY.classList.add("active");
    MONTHLY.classList.remove("active");
    for(let i = 0; i < allTracks.length; i++ ){

        allCurrentTracks[i].innerHTML = `${dataObj[i].timeframes.weekly.current}hrs`

        allPreviousTracks[i].innerHTML = `Last Week - ${dataObj[i].timeframes.weekly.previous}hrs`
    }
}

function displayMonthly(){
    DAILY.classList.remove("active");
    WEEKLY.classList.remove("active");
    MONTHLY.classList.add("active");
    for(let i = 0; i < allTracks.length; i++ ){

        allCurrentTracks[i].innerHTML = `${dataObj[i].timeframes.monthly.current}hrs`

        allPreviousTracks[i].innerHTML = `Last Month - ${dataObj[i].timeframes.monthly.previous}hrs`
    }
}