// On clicking remove button the item should be removed from DOM as well as localstorage.
let data = JSON.parse(localStorage.getItem("coffee"));
console.log(data);

var total = data.reduce(function(sum,e){
    return sum+e.price;
},0);

document.querySelector("#total_amount").textContent = `Rs. ${total}`;
let box = document.getElementById("bucket");
data.map(function(e,index){

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = e.image;

    let title = document.createElement("h2");
    title.innerText = e.title

    let price = document.createElement("p");
    price.innerText = e.price;

    let button = document.createElement("button");
    button.innerText = "Remove";
    button.setAttribute("id","remove_coffee");
    button.addEventListener("click",function(){
        data.splice(index,1);
        alert("Iteam Removed");
        window.location.reload();
        localStorage.setItem("coffee",JSON.stringify(data));
    })
    div.append(image,title,price,button);
    box.append(div);
});