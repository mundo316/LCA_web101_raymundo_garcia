var counter = 0;

function petpuppy(){
    console.log(counter);
    counter++;
    document.getElementById("petcounter").innerHTML = counter;
    var prom = new Promise(function(resolve,reject) {
        setTimeout(function(){
            document.getElementById("puppypic").src="../images/IMG_2538.jpg";
            resolve();
        },200);
        
    }).then(function(){
        setTimeout(function(){
            document.getElementById("puppypic").src="../images/IMG_2539.jpg"
        },300);
    });
}