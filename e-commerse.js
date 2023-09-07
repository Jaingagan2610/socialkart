console.log("Hello World");

// slider code 

// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleInterval'), {
//       interval: 5000,
//     });
  
//     carousel.addEventListener('slide.bs.carousel', function (event) {
//       const currentIndex = event.from;
//       // You can perform custom actions here based on the currentIndex
//     });
//   });
  


// slider end
// dynamic data of shoes sale

// const product11 = [
//   {
//     image:
//       "https://assets.ajio.com/cms/AJIO/MOBILE/05092023-M-UHP-LTD-menswear-teamspirit-performax-under299.jpg",
//   },
// ];

// const shoes_element = document.getElementById("shoe_sale");
// console.log(shoes_element)
// console.log("Hello World")

// shoes_element.innerHTML = `<img src="${product11[0].image}" alt="Product Image">`;

// end of shoe sale

//dynamic data

const products = [
  {
    name: "Product 1",
    image:
      "https://w7.pngwing.com/pngs/471/670/png-transparent-nike-flywire-shoe-nike-acg-boot-nike-white-outdoor-shoe-sneakers.png",
    description: "nike flywire shoes",
    price: 19.99,
  },
  {
    name: "Product 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbzaQJImT2nFBRCIWgUIDyqwVKYF1RZtYGA&s",
    description: "nike air force 1",
    price: 19.99,
  },
  {
    name: "Product 3",
    image:
      "https://png.pngitem.com/pimgs/s/426-4267762_shoe-hd-png-download.png",
    description: "adidas shoes",
    price: 24.99,
  },
  {
    name: "Product 4",
    image:
      "https://spng.pngfind.com/pngs/s/63-636405_1024-x-1024-4-converse-black-and-white.png",
    description: "adidas shoes",
    price: 1200.0,
  },
  {
    name: "Product 5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueqxdUiP4JOQ3w3Nx5GO54erUJqhXs78w0A&s",
    description: "puma shoes",
    price: 400.0,
  },
  {
    name: "Product 6",
    image:
      "https://static.nike.com/a/images/t_default/1799bdd9-01f2-4faa-9e29-5eb5f0a15225/jordan-1-ko-shoes-RLJcHC.png",
    description: "nike jordan force 2",
    price: 800.0,
  },
];

// Display products dynamically
const productListContainer = document.getElementById("shoes");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${JSON.stringify(
          product
        )})">Add to Cart</button>
    `;
  productListContainer.appendChild(productDiv);
});


// product 2 watch data dynamic

// Create an array to store product data
const products1 = [
  {
    name: "Product 1",
    image:
      "https://i02.appmifile.com/246_operator_in/13/05/2021/fdc177eb158a99179e6b649d6aff2b75!800x800!85.png",
    description: "mi watch",
    price: 19.99,
  },
  {
    name: "Product 2",
    image:
      "https://shreepng.com/img/OutSide/Electronic/Smartwatch/apple%20watch%20alum%20spacegray.png",
    description: "Apple watch",
    price: 19.99,
  },
  {
    name: "Product 3",
    image:
      "https://shreepng.com/img/OutSide/Electronic/Smartwatch/Noise%20ColorFit%20Ultra%20Smartwatch%20Space%20Blue.png",
    description: "noise watch",
    price: 2499,
  },
  {
    name: "Product 4",
    image:
      "https://shreepng.com/img/OutSide/Electronic/Smartwatch/Samsung%20Galaxy%20Watch4%20Bluetooth%20Black.png",
    description: "samsung watch",
    price: 1200.0,
  },
  {
    name: "Product 5",
    image:
      "https://shreepng.com/img/OutSide/Electronic/Smartwatch/AppleWatch%205%20Aluminum%20SpaceGray.png",
    description: "apple watch",
    price: 400.0,
  },
  {
    name: "Product 6",
    image:
      "https://shreepng.com/img/OutSide/Electronic/Smartwatch/Apple%20Watch%20Series%207%20Starlight%20Aluminum%20Pure%20Platinum%20Black%20Nike%20Sport%20Band.png",
    description: "apple watch",
    price: 400.0,
  },
];

// Display products dynamically
const productsContainer1 = document.getElementById("watch");

products1.forEach((product1) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product1");
  productDiv.innerHTML = `
                <img src="${product1.image}" alt="${product1.name}">
                <h3>${product1.name}</h3>
                <p>${product1.description}</p>
                <p>$${product1.price.toFixed(2)}</p>
                <button onclick="addToCart(${JSON.stringify(
                  product1
                )})">Add to Cart</button>
            `;
  productsContainer1.appendChild(productDiv);
});

// Convert the products array to JSON
// const productsJSON = JSON.stringify(products);
// console.log(productsJSON);

// Function to add a product to the cart
// function addToCart(productJSON) {
// You can implement your cart logic here
// For example, you can add the selected product to a shopping cart array
// and update the cart UI.
// Here, we'll just log the selected product JSON for demonstration purposes.
//     console.log("Added to cart:", productJSON);
// }

// search bar

// const result = document.getElementById("search-results");
const searchbar = document.getElementById("search-bar").addEventListener('input',clicked())






 function clicked  () {
  const searchbar = document.getElementById("search-bar").value.toLowerCase();
  console.log(searchbar);
  if(searchbar!=""){
    console.log("inside if");
  const place = document.getElementById("search");
  place.innerHTML = " ";
  for (let i = 0; i < products.length; i++) {
    if (products[i].description.includes(searchbar)) {
      const hi = document.createElement("div");
      hi.classList.add("dd");
      hi.innerHTML = `<div>
                   <img src="${products[i].image}" alt="Image 1" class="w-full h-auto">
                       <div class="flex flex-col items-center justify-center pt-2">
                       <p class="font-bold">${products[i].description}</p>
                       <p class="font-bold">$${products[i].price}</p>
                       <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
                       </div>
                       </div>
                   `;
      place.appendChild(hi);
    //   document.querySelector(".laksh").style.display = "none";
    }
    else if(products1[i].description.toLowerCase().includes(searchbar)){
        const hi = document.createElement("div");
        hi.classList.add("dd");
        hi.innerHTML = `<div style="display: flex; "> 
        <div style="display: flex; flex-direction: column; width: 600px; justify-content: center;">
                     <img src="${products1[i].image}" alt="Image 1" style="width: 100px">
                     <div class="flex flex-col items-center justify-center pt-2">
                         <p class="font-bold">${products1[i].description}</p>
                         <p class="font-bold">$${products1[i].price}</p>
                         <button class="bg-black text-white rounded-lg px-3 py-1"><a>Buy now</a></button>
                         </div>
                         </div>
                         </div>
                     `;
        place.appendChild(hi);
        // document.querySelector(".laksh").style.display = "none";
    }

}
  }
  else{
    const free = document.getElementById("search");
    free.innerHTML =" ";
  }
  
};

// end search bar
