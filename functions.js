//Interval to refresh time.
const interval = setInterval(function() {
    setTime();    
}, 10000);

//Set time when window is loaded.
window.onload = function(){
    setTime();

    document.getElementById('image').onclick = function(){
        switchImg();
    }
};

//Set current time to <span id="time">
function setTime(){
    let time = new Date();

    minutes = time.getMinutes().toString();
    

    //Print if length == 2
    if(minutes.length == 2){
        document.getElementById('time').innerHTML=(time.getHours() + ":" + minutes);
    } 
    //Print if length < 2
    else{
        document.getElementById('time').innerHTML=(time.getHours() + ":" + "0" + minutes);
    }
};


function switchImg() {
    document.getElementById('image').style.backgroundImage = "url('img/rick.png')";
};