const result = document.getElementById("result");
const objectWrapper = [{
    image:"Image.jpg",
    id: 1,
},{
    image:"image2.jpg",
    id:2
},{
    image:"image3.jpg",
    id: 3
},{
   image:"image4.jpg" ,
   id:4
}]
let show = 0;
let click = false
function display(){
    result.innerHTML = `
        <img src="${objectWrapper[show].image}" alt="">
        <div class="cover">
             <div class="nav">
                <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About Us</a></li>
                      <li><a href="#">Conatct Us</a></li>
                </ul>
            </div>
            <div class="smaller-device-nav">
                <div class="logo">
                    <h2>Wany Play</h2>
                </div>
                <div class="bar">
                    <i class="fa fa-bars" aria-hidden="true" onclick="clicking()"></i>
                </div>
                <div class="${click === true ? "verticle" : "hide-verticle"}">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Conatct Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="about-cover">
                <div class="about-wrapper">
                    <h1>About Tanzania Wild carvings</h1>
                    <p>TANZANIA NATIONAL PARKSTanzania is home to 22 national parks, each offering unique wildlife experiences, stunning landscapes, and opportunities for adventure.Overview of Tanzania National ParksTanzania boasts one of the largest and most diverse conservation networks globally, covering over 99,000 square kilometers. These parks are crucial for wildlife conservation and provide some of the best safari experiences in Africa. Here are some notable parks:</p>
                </div>
            </div>
        </div>
    `
}
function clicking(){
    if(click === true){
      click = false  
    }else{
        click = true
    }
}
function foward(){
    if (show === objectWrapper.length - 1) {
        show = 0;
        display()
    }else{
        show += 1;
        display()
    }
}
setInterval(function(){
    foward()
},5000)


const services = [{
    id: 1,
    name: "Tortoise",
    img: "carving.jpg",
    price: 100
},{
    id: 2,
    name: "Elephant",
    img: "carving2.jpg",
    price: 300
},{
    id: 3,
    name: "Bufallo",
    img: "carving3.jpg",
    price: 600
},{
    id: 4,
    name: "cow",
    img: "carving4.jpg",
    price: 700
},{
    id: 5,
    name: "Elephant",
    img: "carving5.jpg",
    price: 900
},{
    id: 6,
    name: "Lion",
    img: "lion.jpg",
    price: 1000
}]

const wrapper = document.getElementById("wrapper");
 
function displayService(){
    services.map(function(service){
         wrapper.innerHTML += `
            <div class="card">
                <div class="image">
                    <img src="${service.img}" alt="">
                </div>
                <div class="text">
                    <h1>${service.name}</h1>
                    <p>price: <span>${service.price}</span></p>
                    <div class="button">
                        <button onclick="finding(${service.id})">Buy Carving</button>
                    </div>
                </div>
            </div>
        `
    })
}

const newArray = []
function finding(id){
    const findService = services.find(function(response){
        return response.id === id
    });
    console.log(findService);
    const quantity = {quantity:1}
    const combine ={...quantity,...findService}
    if(newArray.length > 0){
    newArray.some(function(res){
        if(res.id === id){
            alert("Already exited")
        }else{
            newArray.push(combine)
            getTotal()
            displayNewArray() 
            console.log(newArray)
        }
    })
    }
    else{
        newArray.push(combine)
        getTotal()
        displayNewArray()
        console.log(newArray)
    }
}
displayService()


function displayNewArray(id){
    const cartWrapper = document.getElementById("cart-wrapper")
    cartWrapper.innerHTML = ""
    newArray.map(function(response){
        cartWrapper.innerHTML += `
            <div class="cart">
                    <div class="image-cart">
                        <img src=${response.img} alt="">
                    </div>
                    <div class="cart-price-name">
                        <h2>${response.name}</h2>
                        <p>${response.price}</p>
                    </div>
                    <div class="cart-button">
                        <button onclick="increasing(${response.id})">+</button>
                        <p>${response.quantity}</p>               
                        <button onclick="decreasing(${response.id})">-</button>         
                    </div>
            </div>
        `        
    })
}

function getTotal(){
    let sum=0;
    const total = document.getElementById("total-wrapper");
    total.innerHTML = ""
    const multiplier = newArray.map(function(response){
        return response.quantity * response.price;
    })
    multiplier.map(function(res){
        sum += res
    })
    console.log(multiplier)
    // console.log(sum)
    total.innerHTML= `
        <p>Total Price:${sum}</p>
    `
}

function increasing(id){
    const newVar = newArray.find(function(response){
        const myVar = response.id === id;
        return myVar
    })
    newVar.quantity += 1;
    displayNewArray()
    console.log(newVar)
    console.log(newArray)
    getTotal()
}
function decreasing(id){
    const newArr = newArray.find(function(res){
        const myVar2 = res.id === id;
        return myVar2
    })
    if(newArr.quantity > 1){
        newArr.quantity-=1
        getTotal()
        displayNewArray()
    }
}