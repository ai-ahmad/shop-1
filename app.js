import { data } from "./data.js"
import postProductInfo from "./telegram/telegram.js"
import Telegram from './telegram/telegram.js'

// document 
const likeModal = document.querySelector(".modal-like")
const btnLikeOpenModal = document.querySelector("#btn2")
const btnCloseModal = document.querySelector("#btn000")
const mincard = document.querySelectorAll(".section-mini-card-text")
const mackap = document.querySelector(".mackap")
const maintext = document.querySelector(".main-text")
const sectiontext = document.querySelector(".section-text")
const loadingtext = document.querySelector(".loadingtext")
const mockapSwiper = document.querySelector(".mockup-swiper")
const wrapperSwiper = document.querySelector('.swiper-wrapper')
const catdwraper = document.querySelector(".wraper")
const OpenModal = document.querySelector("#btn1")
const modal = document.querySelector(".modal")
const CloseModal = document.querySelector("#btn")
const CardModal = document.querySelector(".card-modal")
const Numbers = document.querySelector(".corzinka")
const header = document.querySelector("header")
const navigationimg = document.querySelector(".location")
const modalList = document.querySelector(".modal-list")
const inputSearch = document.querySelector("#search-dropdown")
const serachModal = document.querySelector(".modal-search")
const LikeModal = document.querySelector(".modal-like ")
// const modalCardBtn = document.querySelector(".oop")
// const but  = document.querySelectorAll(".btn-modal-class")
const registrationmodal = document.querySelector(".registration-modal")
const btnreg = document.querySelector("#btnmodal")
const btnregclose = document.querySelector(".btn-reg")
const nextbtn = document.querySelector("#next")
const cardLikeAdd = document.querySelector(".card-modal2")
const likeText = document.querySelector("#like_number2")
console.log(likeText)

//modal open

OpenModal.addEventListener("click", () => {
  modal.classList.add("modal-animation")
  modal.style.display = "block"
})

// varabiles 
let number = 0;

// modal close 
CloseModal.addEventListener("click", () => {
  modal.classList.add("modal-close")
  setTimeout(() => {
    modal.style.display = "none"
    modal.classList.remove("modal-close")
    modal.classList.remove("modal-animation")
  }, 1000)
})

// modal close 

// mockdata card element
let mocktdata = data()
let product = []
let likeProduct = []

// card create
function restart() {
  mocktdata.forEach(item => {
    let card = document.createElement("div")
    let card2 = document.createElement("div")
    let card3 = document.createElement("div")
    card.classList.add('card-motion')

    let img = document.createElement("img")
    img.src = item.imageURL
    card2.appendChild(img)

    let h3 = document.createElement("h3")
    h3.textContent = item.name
    card3.appendChild(h3)
    let h5 = document.createElement("h2")
    h5.classList.add("price")
    h5.textContent = item.price + `$`
    card3.appendChild(h5)
    let btn = document.createElement("button")
    let btn2 = document.createElement("button")
    const i = document.createElement("i")
    i.classList.add("bi", "bi-heart")
    btn2.appendChild(i)
    btn2.classList.add("btnHeart")
    btn.textContent = "Buy Now"
    btn.classList.add("buy")
    card3.appendChild(btn)
    card3.appendChild(btn2)
    catdwraper.append(card)

    card.appendChild(card2)
    card2.classList.add("imgBox")
    card.appendChild(card3)
    card3.classList.add("contentBox")

    let miseter = item

    btn.onclick = () => addCard(item)
    btn2.addEventListener("click", () => {
      if (likeProduct.find(element => element.name == miseter.name)) {
        alert("BU TAVAR UJE BOR BOSHQASINI QOSHISHGA URINING ...")
      } else {
        likeProduct.push(miseter)
        cardLikeAdd.innerHTML = ``
        likeText.textContent = likeProduct.length
        const delitItem = () => {
          likeProduct.forEach(e => {
            let card = document.createElement("div");
            card.classList.add("mini", "bg-rounded-lg", "shadow");
            let div1 = document.createElement("p");
            div1.textContent = e.name;
            let div2 = document.createElement("div");
            div2.textContent = "price: " + e.price + "$";
            let div3 = document.createElement("button");
            div3.classList.add("removebtn");
            div3.textContent = "Remove";
            e.new = false

            div3.addEventListener("click", () => {
              e.new = true
              const filterItem = likeProduct.filter(element => element.new !== true)
              likeProduct = filterItem
              likeText.textContent = likeProduct.length
              console.log(likeProduct)
              cardLikeAdd.innerHTML = ``
              delitItem()
            });

            card.appendChild(div1);
            card.appendChild(div2);
            card.appendChild(div3);
            cardLikeAdd.appendChild(card);
          })

        }
        delitItem()
      }

    })

  })

}
restart()
// add item 

// ...

// add item 
function addCard(item) {
  if (item) {
    // push item into products
    product.push(item);
    number++;
    Numbers.textContent = number;

    // remove div in products for each
    CardModal.innerHTML = ``;
    // products in product
    product.forEach((i) => {
      let card = document.createElement("div");
      card.classList.add("mini", "bg-rounded-lg", "shadow");
      let div1 = document.createElement("p");
      div1.textContent = i.name;
      let div2 = document.createElement("div");
      div2.textContent = "price: " + i.price + "$";
      let div3 = document.createElement("button");
      div3.classList.add("removebtn");
      div3.textContent = "Remove";

      div3.addEventListener("click", () => {
        removeProduct(i);
      });

      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(div3);
      CardModal.appendChild(card);
    });
  }

  price()
};

// ...

function removeProduct(item) {
  let indexItem = product.indexOf(item);
  if (indexItem > -1) {

    product.splice(indexItem, 1);
    CardModal.removeChild(CardModal.childNodes[indexItem]);
    number--;
    Numbers.textContent = number;
  }
  price()
}

function price() {
  const totalPrice = product.reduce((current, item) => current + item.price, 0)
  const total = document.querySelector('#total')
  total.innerHTML = 'Total Price: ' + totalPrice
}

btnreg.addEventListener("click", () => {
  registrationmodal.style.display = "flex"
})

btnregclose.addEventListener("click", () => {
  registrationmodal.style.display = "none"
})

nextbtn.addEventListener("click", (e) => {
  e.preventDefault()
  postProductInfo(product)
})

const filterItem = data().filter(item => item.top == true);

filterItem.forEach(item => {
  const swiper = document.createElement("div")
  const swiperImg = document.createElement("img")
  swiper.classList.add("swiper-slide")
  swiperImg.src = item.imageURL
  swiper.appendChild(swiperImg)
  wrapperSwiper.appendChild(swiper)

})

filterItem.forEach(item => {
  const swiper = document.createElement("div")
  const swiperImg = document.createElement("img")
  swiper.classList.add("swiper-slide")
  swiperImg.src = item.imageURL
  swiper.appendChild(swiperImg)

  mockapSwiper.appendChild(swiper)

})

fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=b1195a0d717b4bb88763fce48faf455a`)
  .then(result => result.json())
  .then(data => {
    navigationimg.textContent = `Location: ${data.flag.emoji + " " + data.city}`
  })




inputSearch.addEventListener("input", () => {
  modalList.innerHTML = ``
  const filterItem = data().filter(item => item.name.includes(inputSearch.value.toLowerCase()));
  filterItem.forEach(element => {
    let wrapperSearchCard = document.createElement("li")
    const cardImg = document.createElement("img")
    wrapperSearchCard.appendChild(cardImg)
    cardImg.src = element.imageURL
    const nameCard = document.createElement("p")
    wrapperSearchCard.appendChild(nameCard)
    nameCard.textContent = element.name
    nameCard.style.textTransform = "capitalize"
    const priceCard = document.createElement("p")
    wrapperSearchCard.append(priceCard)
    priceCard.textContent = element.price
    modalList.appendChild(wrapperSearchCard)
  })

  if (inputSearch.value.length) {
    serachModal.style.display = "block"
  } else {
    serachModal.style.display = "none"
  }
})



inputSearch.addEventListener("input", () => {

})


const categories = document.querySelector("#dropdown-button")
const btnsCategoriyes = document.querySelectorAll(".btn_cotegoriyes")


btnsCategoriyes.forEach(item => {
  item.addEventListener("click", () => {
    categories.textContent = item.textContent
    if (categories.textContent == "Smartphone") {
      inputSearch.addEventListener("input", () => {
        modalList.innerHTML = ``
        const filterItem = data().filter(item => item.type == "mobile")
        const filterItem2 = filterItem.filter(item => item.name.includes(inputSearch.value.toLowerCase()))
        filterItem2.forEach(element => {
          let wrapperSearchCard = document.createElement("li")
          const cardImg = document.createElement("img")
          wrapperSearchCard.appendChild(cardImg)
          cardImg.src = element.imageURL
          const nameCard = document.createElement("p")
          wrapperSearchCard.appendChild(nameCard)
          nameCard.textContent = element.name
          nameCard.style.textTransform = "capitalize"
          const priceCard = document.createElement("p")
          wrapperSearchCard.append(priceCard)
          priceCard.textContent = element.price
          modalList.appendChild(wrapperSearchCard)
        })

        if (inputSearch.value.length) {
          serachModal.style.display = "block"
        } else {
          serachModal.style.display = "none"
        }
      })
    } else if (categories.textContent == "Acsesuar") {
      inputSearch.addEventListener("input", () => {
        modalList.innerHTML = ``
        const filterItem = data().filter(item => item.type == "acsesuar")
        const filterItem2 = filterItem.filter(item => item.name.includes(inputSearch.value.toLowerCase()))
        filterItem2.forEach(element => {
          let wrapperSearchCard = document.createElement("li")
          const cardImg = document.createElement("img")
          wrapperSearchCard.appendChild(cardImg)
          cardImg.src = element.imageURL
          const nameCard = document.createElement("p")
          wrapperSearchCard.appendChild(nameCard)
          nameCard.textContent = element.name
          nameCard.style.textTransform = "capitalize"
          const priceCard = document.createElement("p")
          wrapperSearchCard.append(priceCard)
          priceCard.textContent = element.price
          modalList.appendChild(wrapperSearchCard)
        })

        if (inputSearch.value.length) {
          serachModal.style.display = "block"
        } else {
          serachModal.style.display = "none"
        }
      })
    } else if (categories.textContent == "Clothes") {
      inputSearch.addEventListener("input", () => {
        modalList.innerHTML = ``
        const filterItem = data().filter(item => item.type == "kiyim")
        const filterItem2 = filterItem.filter(item => item.name.includes(inputSearch.value.toLowerCase()))
        filterItem2.forEach(element => {
          let wrapperSearchCard = document.createElement("li")
          const cardImg = document.createElement("img")
          wrapperSearchCard.appendChild(cardImg)
          cardImg.src = element.imageURL
          const nameCard = document.createElement("p")
          wrapperSearchCard.appendChild(nameCard)
          nameCard.textContent = element.name
          nameCard.style.textTransform = "capitalize"
          const priceCard = document.createElement("p")
          wrapperSearchCard.append(priceCard)
          priceCard.textContent = element.price
          modalList.appendChild(wrapperSearchCard)
        })

        if (inputSearch.value.length) {
          serachModal.style.display = "block"
        } else {
          serachModal.style.display = "none"
        }
      })
    } else if (categories.textContent == "Laptop") {
      inputSearch.addEventListener("input", () => {
        modalList.innerHTML = ``
        const filterItem = data().filter(item => item.type == "laptop")
        const filterItem2 = filterItem.filter(item => item.name.includes(inputSearch.value.toLowerCase()))
        filterItem2.forEach(element => {
          let wrapperSearchCard = document.createElement("li")
          const cardImg = document.createElement("img")
          wrapperSearchCard.appendChild(cardImg)
          cardImg.src = element.imageURL
          const nameCard = document.createElement("p")
          wrapperSearchCard.appendChild(nameCard)
          nameCard.textContent = element.name
          nameCard.style.textTransform = "capitalize"
          const priceCard = document.createElement("p")
          wrapperSearchCard.append(priceCard)
          priceCard.textContent = element.price
          modalList.appendChild(wrapperSearchCard)
        })

        if (inputSearch.value.length) {
          serachModal.style.display = "block"
        } else {
          serachModal.style.display = "none"
        }
      })
    } else if (categories.textContent == "Reset all") {
      categories.textContent = "All categories"
      inputSearch.addEventListener("input", () => {
        modalList.innerHTML = ``
        const filterItem = data().filter(item => item.name.includes(inputSearch.value.toLowerCase()))
        filterItem.forEach(element => {
          let wrapperSearchCard = document.createElement("li")
          const cardImg = document.createElement("img")
          wrapperSearchCard.appendChild(cardImg)
          cardImg.src = element.imageURL
          const nameCard = document.createElement("p")
          wrapperSearchCard.appendChild(nameCard)
          nameCard.textContent = element.name
          nameCard.style.textTransform = "capitalize"
          const priceCard = document.createElement("p")
          wrapperSearchCard.append(priceCard)
          priceCard.textContent = element.price
          modalList.appendChild(wrapperSearchCard)
        })

        if (inputSearch.value.length) {
          serachModal.style.display = "block"
        } else {
          serachModal.style.display = "none"
        }
      })
    }
  })
})

//Modal oopen like 
btnLikeOpenModal.addEventListener("click", () => {
  likeModal.classList.add("modal-animation")
  likeModal.style.display = "block"
})

// modal close like 
btnCloseModal.addEventListener("click", () => {
  likeModal.style.display = "none"
})


// Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function () {
//   // Get references to the buttons and dropdown menus
//   const priceButton = document.getElementById("dropdownHelperButton");
//   const priceDropdown = document.getElementById("dropdownHelper");

//   const categoryButton = document.querySelector("[data-dropdown-toggle='dropdownHe']");
//   const categoryDropdown = document.getElementById("dropdownHe");

//   const colorButton = document.querySelector("[data-dropdown-toggle='dropdownCo']");
//   const colorDropdown = document.getElementById("dropdownCo");

//   // Event listeners for the price dropdown
//   priceButton.addEventListener("click", function () {
//     priceDropdown.classList.toggle("hidden");
//   });

//   // Event listeners for the category dropdown
//   categoryButton.addEventListener("click", function () {
//     categoryDropdown.classList.toggle("hidden");
//   });

//   // Event listeners for the color dropdown
//   colorButton.addEventListener("click", function () {
//     colorDropdown.classList.toggle("hidden");
//   });

//   // Event listener to close the dropdown menus when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!event.target.matches("[data-dropdown-toggle]")) {
//       const dropdowns = document.getElementsByClassName("dropdown-content");
//       for (const dropdown of dropdowns) {
//         if (!dropdown.classList.contains("hidden")) {
//           dropdown.classList.add("hidden");
//         }
//       }
//     }
//   });

//   // Event listener to handle the range input value change
//   const priceRange = document.getElementById("price-range");
//   const priceValue = document.getElementById("price-value");

//   priceRange.addEventListener("input", function () {
//     priceValue.textContent = priceRange.value;
//     // Add your specific actions here based on the price range value
//   });

//   // Event listener to handle category checkbox changes
//   const categoryCheckboxes = document.querySelectorAll("[type='checkbox'][id^='vue-checkbox']");

//   categoryCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", function () {
//       if (checkbox.checked) {
//         console.log(checkbox.labels[0].textContent + " checkbox is checked!");
//         // Add your specific actions here when a category checkbox is checked
//       } else {
//         console.log(checkbox.labels[0].textContent + " checkbox is unchecked!");
//         // Add your specific actions here when a category checkbox is unchecked
//       }
//     });
//   });

//   // Event listener to handle color selection
//   const colorItems = document.querySelectorAll("[data-color]");

//   colorItems.forEach((item) => {
//     item.addEventListener("click", function () {
//       const selectedColor = item.dataset.color;
//       console.log("Selected color: " + selectedColor);
//       // Add your specific actions here based on the selected color
//     });
//   });
// });



// function filtered() {
//   const sort = document.querySelectorAll(".checkbox")
//   const rangevalue = document.querySelector("#price-value")

//   function priceFilter() {

//     const arr = []

//     const asd = sort.forEach(element => {
//       element.addEventListener("change", () => {
//         if(element.checked === true) {
//           arr.push(element)
//           console.log(arr)
//         }
//         priceFilter();
//       })
//       console.log([...arr])
//     })
//   }

//   priceFilter()

// }

// filtered()


const filterPriice = document.querySelector("#price-range")
const pricevalue = document.querySelector("#price-value")

// filter price function 
// ckecbox function 


let filterProduct = []

// price = 2000, type=['phone', 'laptop'], color='red'
// 
//

// getByPrice
/**
 *  products.filter(product => {
 * if(price !== 0) {
 *  return product.price <= inputPrice
 * } else {
 * return product
 * }
 * })
 * 
 */
// getByType
/**
 *  products.filter(product => {
 * if(inputType.length) {
 *  return product.type.includes(inputType)
 * } else {
 * return product
 * }
 * if(inputType.length && inputType.includes( product.type)) {
 *  return product
 * } else {
 * return product
 * }
 * })
 */
// getByColor
/**
 *  products.filter(product => {
 * if(inputColor) {
 *  return product.color === inputColor
 * } else {
 * return product
 * }
 * })
 */




filterPriice.addEventListener("input", () => {
  pricevalue.textContent = filterPriice.value + "$"

  const chekboxs = document.querySelectorAll(".checkbox")

  chekboxs[0].textContent = "mobile"
  chekboxs[1].textContent = "laptop"
  chekboxs[2].textContent = "acsesuar"
  chekboxs[3].textContent = "kiyim"

  let fil = []
  chekboxs.forEach(item => {
    if (item.checked == true) {
      mocktdata = data()
      fil = mocktdata.filter(element => element.price <= filterPriice.value)
      mocktdata = fil
      catdwraper.innerHTML = ``
      restart()
      if (item.textContent == "mobile") {
        mocktdata = data()
        const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
        const filter = filterPrice2.filter(im => im.type == "mobile")
        console.log(filterPrice2)
        mocktdata = filter
        catdwraper.innerHTML = ``
        restart()
      } else if (item.textContent == "laptop") {
        mocktdata = data()
        const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
        const filter = filterPrice2.filter(im => im.type == "laptop")
        console.log(filterPrice2)
        mocktdata = filter
        catdwraper.innerHTML = ``
        restart()
      } else if (item.textContent == "acsesuar") {
        const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
        const filter = filterPrice2.filter(im => im.type == "acsesuar")
        console.log(filterPrice2)
        mocktdata = filter
        catdwraper.innerHTML = ``
        restart()
      } else if (item.textContent == "kiyim") {
        const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
        const filter = filterPrice2.filter(im => im.type == "kiyim")
        console.log(filterPrice2)
        mocktdata = filter
        catdwraper.innerHTML = ``
        restart()
      } else {
        mocktdata = data()
        let dilter = mocktdata.filter(element => element.price <= filterPriice.value)
        mocktdata = dilter
        catdwraper.innerHTML = ``
        restart()
      }
    } else {
     console.log("not")
    }
    item.addEventListener("change", () => {
      if (item.checked == true) {
        mocktdata = data()
        fil = mocktdata.filter(element => element.price <= filterPriice.value)
        mocktdata = fil
        catdwraper.innerHTML = ``
        restart()
        if (item.textContent == "mobile") {
          mocktdata = data()
          const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
          const filter = filterPrice2.filter(im => im.type == "mobile")
          console.log(filterPrice2)
          mocktdata = filter
          catdwraper.innerHTML = ``
          restart()
        } else if (item.textContent == "laptop") {
          mocktdata = data()
          const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
          const filter = filterPrice2.filter(im => im.type == "laptop")
          console.log(filterPrice2)
          mocktdata = filter
          catdwraper.innerHTML = ``
          restart()
        } else if (item.textContent == "acsesuar") {
          const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
          const filter = filterPrice2.filter(im => im.type == "acsesuar")
          console.log(filterPrice2)
          mocktdata = filter
          catdwraper.innerHTML = ``
          restart()
        } else if (item.textContent == "kiyim") {
          const filterPrice2 = mocktdata.filter(element => element.price <= filterPriice.value)
          const filter = filterPrice2.filter(im => im.type == "kiyim")
          console.log(filterPlrice2)
          mocktdata = filter
          catdwraper.innerHTML = ``
          restart()
        } else {
          mocktdata = data()
          let dilter = mocktdata.filter(element => element.price <= filterPriice.value)
          mocktdata = dilter
          catdwraper.innerHTML = ``
          restart()
        }
      } else {
        console.log("no")
      }
    })
  })



})