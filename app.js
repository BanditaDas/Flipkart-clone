let plus = document.querySelector("#plus");
let min = document.querySelector("#mines");
let num =Number(document.querySelector("#anit").innerText);
min.style.opacity= "0.7";
let p = 1;
plus.addEventListener("click",()=>{
    p++;
    min.style.opacity= "1";
   document.querySelector("#anit").innerText=p;
})
min.addEventListener("click",()=>{
    if(p===1){
        min.style.opacity= "0.7"
    }else{
        p--;
        document.querySelector("#anit").innerText=p;
    }

})