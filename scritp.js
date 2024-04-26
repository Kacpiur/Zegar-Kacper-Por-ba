const strzalka_lewo = document.querySelector('#strzalka_lewo');
const strzalka_prawo = document.querySelector('#strzalka_prawo');
const naglowek = document.querySelector('h1');
const tytul = document.querySelector('title');
const element = document.getElementById('zegar');
const strzalka1 = document.querySelector('#hour');
const strzalka2 = document.querySelector('#seconds');
const strzalka3 = document.querySelector('#minute');
const poleDoWpisywanie = document.querySelector('.stoper');
strzalka_lewo.addEventListener('click', function () {
    naglowek.innerHTML = "MINUTNIK";
    tytul.innerHTML = "Minutnik";
    strzalka1.style.transform = "rotate(0deg)";
    strzalka2.style.transform = "rotate(0deg)";
    strzalka3.style.transform = "rotate(0deg)";
    poleDoWpisywanie.style.display = "block";
    strzalka_lewo.style.display = "none";
    strzalka_prawo.style.display = "block";
    strzalka_lewo2.style.display = "block";
    strzalka1.style.display = "none";
    strzalka2.style.display = "none";
    sekundy.value="";
    zatrzymaj();
});

strzalka_prawo.addEventListener('click', function () {
    naglowek.innerHTML = "ZEGAR WSKAZÓWKOWY";
    tytul.innerHTML = "Zegar Wskazówkowy"
    strzalka1.style.display = "block";
    strzalka2.style.display = "block";
    poleDoWpisywanie.style.display = "none";
    strzalka_lewo.style.display = "block";
    strzalka_prawo.style.display = "none";
    strzalka_lewo2.style.display = "none"
    MinutnikAll.style.display = "none";
    obroty();
});

// const start = document.querySelector("#start");
// const godziny = document.querySelector('input[name="H"]');
// const minuty = document.querySelector('input[name="M"]');
// const sekundy = document.querySelector('input[name="S"]');
// let set_timer;
// start.addEventListener('click', function () {
//     let hr = godziny.value;
//     let min = minuty.value;
//     let sec = sekundy.value;
//     set_timer = setInterval(() => {
//         let calc_hr = (hr * 30) + (min / 2);
//         let calc_min = (min * 6) + (sec / 10);
//         let calc_sec = sec * 6;

//         hour.style.transform = `rotate(${calc_hr}deg)`;
//         minute.style.transform = `rotate(${calc_min}deg)`;
//         seconds.style.transform = `rotate(${calc_sec}deg)`;
//         if (hr == 0 && min == 0 && sec == 0) {
//             clearInterval(set_timer);
//         }
//         if(sec==0  && min == 0){
//             min=59;

//         } else {
//             min--;
// }
//         if (min == 0) {
//             hr--;
//         }
//         sec--;
//         console.log(sec);
//     }, 1000);
// });

const start = document.querySelector("#start");
const sekundy = document.querySelector('input[name="S"]');
const winda = new Audio('./Elevator Music (Kevin MacLeod) - Gaming Background Music (HD).mp3');
const alarm = new Audio('./mixkit-classic-alarm-995.mp3');
let set_timer;
start.addEventListener('click', function () {
    let sec = sekundy.value;
    winda.play();
    set_timer = setInterval(() => {
        let calc_sec = sec * 6;
        minute.style.transform = `rotate(${calc_sec}deg)`;
        if (sec == 0) {
            clearInterval(set_timer);
            winda.pause();
            setTimeout(() => {
                alarm.play();
            }, 1);
        }
        sekundy.value=sec;
        sec--;
        console.log(sec);
    }, 1000);
});

const strzalka_lewo2 = document.querySelector("#strzalka_lewo2");
const MinutnikAll = document.querySelector('.minutnik');
const startMinutnik = document.querySelector('#StartM');
const stopMinutnik = document.querySelector('#StopM');
const reset = document.querySelector("#ResetM");
const licznik = document.querySelector('#licznik');
strzalka_lewo2.addEventListener('click', function(){
    MinutnikAll.style.display = "block";
    naglowek.innerHTML = "STOPER";
    poleDoWpisywanie.style.display = "none";
    strzalka_lewo2.style.display = "none";
});
let sec = sekundy.value;
startMinutnik.addEventListener('click', function(){
    set_timer = setInterval(() => {
        sec++;
        let calc_sec = sec * 6;
        minute.style.transform = `rotate(${calc_sec}deg)`;
        sekundy.value=sec;
        console.log(sec);
        licznik.value=sec;
    }, 1000);
    
});

stopMinutnik.addEventListener('click', function(){
    clearInterval(set_timer);
});

reset.addEventListener('click', function(){
    strzalka3.style.transform = "rotate(0deg)";
    sec = 0;
    licznik.value=sec;
    clearInterval(set_timer);

});
