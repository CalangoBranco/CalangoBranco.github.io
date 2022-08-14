let time = new Date(1,3,12,14,8,9,1);


window.onload = function(){
    
    minutes = time.getMinutes().toString();
    

    //Print if length == 2
    if(minutes.length == 2){
        document.getElementById('time').innerHTML=(time.getHours() + ":" + minutes);
    } 
    //Print if length < 2
    else{
        document.getElementById('time').innerHTML=(time.getHours() + ":" + "0" + minutes);
    }
    


}