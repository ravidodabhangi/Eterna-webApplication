
// Background Image Javascript Start

let count=1;
setInterval(()=>{
    document.getElementById("radio"+count).checked=true;
    count++;
    if(count>3){
        count=1;
    }
},5000)

// Background Image Javascript end

// counter Javascript start

let counters=document.querySelectorAll(".ch");
counters.forEach((element)=>{
    element.innerHTML=0;
    let display=()=>{
        let target1=Number(element.innerHTML);
        let target2=+element.getAttribute("data-target");
        let division=target2/15;
        if(target1<target2){
             element.innerHTML=`${ Math.round(target1+division)}`;
             setTimeout(display,200)
        }
        else{
            element.innerHTML=target2;
        }

    }
    display();
})

// counter Javascript end