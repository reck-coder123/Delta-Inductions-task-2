let x=90; let y=25;
let i=0;
const canvas=document.querySelector("canvas");
let ctx=  canvas.getContext("2d");
function triangle(){
        //const ctx=canvas.getContext("2d");
        requestAnimationFrame(triangle);
        //ctx.clearRect(0,0,800,600)
       
        //for(var i=0; i<15; i++){
            for(var j=0; j<15; j++){
                ctx.beginPath();
                ctx.moveTo(j*20,i);
                ctx.lineTo(20*(j+1),i);
                ctx.lineTo(10*(2*j+1),17.32+i);
                ctx.fillStyle="#ffb09c";
                ctx.fill();
        
        }
        i=i+1;
        // for(var p=0; p<8; p++){
        //     ctx.beginPath()
        //     ctx.fillStyle="grey";
        //     ctx.fillRect((Math.random()*751)+25,(Math.random()*(581))+20,(Math.random()*18)+13,3)

        // }
    }
//}


function tiles(){
    
    
    
        for(var p=0; p<8; p++){
            ctx.beginPath()
            ctx.fillStyle="grey";
            ctx.fillRect((Math.random()*751)+25,(Math.random()*(581))+20,(Math.random()*18)+13,3)

        }
    }


function blue_ball(){
    
        
        requestAnimationFrame(blue_ball)
        //ctx.fillStyle="black";
        ctx.clearRect(0,0,800,600)
        
        ctx.beginPath();
        ctx.arc(x,y,4,0,Math.PI*2,false);
        ctx.stroke();
        ctx.fillStyle="blue";
        ctx.strokeStyle="blue"
        ctx.fill();
        
         y=y+1;
        //  ctx.fillStyle="rgba(3,0,45,0.4)"
       
}




blue_ball();
triangle();
tiles();
// for(var p=0; p<8; p++){
//     setTimeout(tiles,100)
// }