const dayEl = document.getElementById('day');
const timeEl = document.getElementById('time');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const showDate = ()=>{
    const date = new Date();
    const day = date.getDay();
    const time = Date.now();
    dayEl.innerHTML = days[day];
    timeEl.innerHTML = time;
}
showDate();