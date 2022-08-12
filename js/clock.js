let userName=prompt("Adınız?")

let myName=document.querySelector('#myName')
myName.innerHTML=`${userName}`

function dateAndHourInfo(){

    let myClockDate=new Date().toLocaleDateString('tr-TR');
    let myClockTime=new Date().toLocaleTimeString('tr-TR')
    let clock=document.querySelector('#myClock')
    clock.innerHTML=`${myClockDate} ${myClockTime}`
}
setInterval(dateAndHourInfo,1000)

// let mylok=new Date()
// let lok=document.querySelector('#myClock')
// lok.innerHTML=`${mylok.getDay}/${mylok.getMonth}/${mylok.getFullYear} ${mylok.getHours}:${mylok.getMinutes}:${mylok.getSeconds}   `