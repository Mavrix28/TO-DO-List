let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    
    let item=document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    inp.value="";
    console.log(inp.value);
});