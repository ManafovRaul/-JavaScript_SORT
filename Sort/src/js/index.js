const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const cards = document.getElementById('item');

const food = [
    {
        brand: "Big Mac",
        imgUrl: "https://storage.googleapis.com/pai-images/c53a2becf1434f8390ee428fe012d672.jpeg",
        price: 6.30
    },
    {
        brand: "McChicken",
        imgUrl: "https://storage.googleapis.com/pai-images/24371e3f90c441f7bbaf7a9fb8629ee3.jpeg",
        price: 5.50

    },
    {
        brand: "French Fries",
        imgUrl: "https://storage.googleapis.com/pai-images/129fc70b60b248bfa8d1e230c4918076.jpeg",
        price: 5.00

    },
    {
        brand: "Mochito",
        imgUrl: "https://storage.googleapis.com/pai-images/f33549683e4345b29f6d51294769f903.jpeg",
        price: 7.00

    },
    {
        brand: "Pizza",
        imgUrl: "https://storage.googleapis.com/pai-images/ae293459f95941fcb8d0e94b7530f1ac.jpeg",
        price: 16.00

    },
    {
        brand: "Sushi",
        imgUrl: "https://storage.googleapis.com/pai-images/4c777cef84304f12bb051fba3fbfe610.jpeg",
        price: 13.00

    },
    {
        brand: "Taco",
        imgUrl: "https://storage.googleapis.com/pai-images/a5ea6e878a1e4001b5dec6367953a808.jpeg",
        price: 6.00

    },
    {
        brand: "Cesar Salad",
        imgUrl: "https://storage.googleapis.com/pai-images/fd0a289c702e4ca6af4b4ad6eb4b3537.jpeg",
        price: 14.00

    },

]

btn.addEventListener('click', () => {
    const newArr = food.sort((a, b) => a.price - b.price)
    setScreen(newArr)
})
btn2.addEventListener('click', () => {
    const newArrr = food.sort((a, b) => b.price - a.price)
    setScreen(newArrr)
})

const setScreen = (arr) => {
    let inner = "";
    arr.forEach(function (item) {

        inner += `
    
        <div class="col-sm-6 col-md-4 col-lg-3">
        
        <div class="cart">
        <div class ="img">
        <img src=${item.imgUrl} alt="plant"/>
        </div>
        <div class="content">
        <h3 class="brand">${item.brand}</h3>
        <p class="value">${item.price}</p>
        </div>
        </div>
        </div>
        `
    });

    cards.innerHTML = inner;
}
setScreen(food)
