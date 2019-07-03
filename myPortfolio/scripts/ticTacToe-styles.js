var xturn= true;


function placemarker(id){
    var thissquare= document.getElementById(id);
   

    if(xturn) {
        thissquare.innerHTML= "X";
    }
    else{
        thissquare.innerHTML= "O";
    }
    xturn = !xturn;
}