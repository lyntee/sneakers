const menuIcon = document.querySelector("#menu-icon");
const sideMenu = document.querySelector(".side-menu-modal");
const closeBtn = document.querySelector(".close-button");
const imageShown = document.querySelector("#product-image");
const images = [
  {
    src: "./images/image-product-1.jpg",
    num: "0"
  },
  {
    src: "./images/image-product-2.jpg",
    num: "1"
  },
  {
    src: "./images/image-product-3.jpg",
    num: "2"
  },
  {
    src: "./images/image-product-4.jpg",
    num: "3"
  },
];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnailsSrc = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg"
];
const webpageThumbnails = document.querySelectorAll(".image-thumbnail img");
const numOfPurchase = document.querySelector("#number-of-purchase");
const minusIcon = document.querySelector("#minus-icon");
const plusIcon = document.querySelector("#plus-icon");
const cartIcon = document.querySelector("#cart-icon");
const cartTab = document.querySelector(".cart-tab");
const cartBtn = document.querySelector("#cart-btn");
const gallery = document.querySelector(".gallery");
const closeIcon = document.querySelector(".close-icon");
const galleryThumbnails = document.querySelectorAll(".gallery-thumbnail img");
const galleryPrev = document.querySelector(".prev-icon");
const galleryNext = document.querySelector(".next-icon");
const galleryImageShown = document.querySelector("#pdt-image");

// Show side menu
menuIcon.addEventListener("click", () => {
  sideMenu.classList.remove("hide-text");
});

// Hide side menu
closeBtn.addEventListener("click", () => {
  sideMenu.classList.add("hide-text");
});

// Image slider
prev.addEventListener("click", showPrevImage);
next.addEventListener("click", showNextImage);

function showPrevImage() {
  const currentImage = imageShown.getAttribute("num");
  let currentImageNum = Number(currentImage);
  if (currentImageNum > 0) {
    currentImageNum--;
  } else {
    currentImageNum = 3;
  }
  imageShown.src = images[currentImageNum].src;
  imageShown.setAttribute("num", images[currentImageNum].num);
}

function showNextImage() {
  const currentImage = imageShown.getAttribute("num");
  let currentImageNum = Number(currentImage);
  if (currentImageNum < 3) {
    currentImageNum++;
  } else {
    currentImageNum = 0;
  }
  imageShown.src = images[currentImageNum].src;
  imageShown.setAttribute("num", images[currentImageNum].num);
}

// display image thumbnails
for (let i = 0; i < webpageThumbnails.length; i++) {
  webpageThumbnails[0].setAttribute("src", thumbnailsSrc[0]);
  webpageThumbnails[1].setAttribute("src", thumbnailsSrc[1]);
  webpageThumbnails[2].setAttribute("src", thumbnailsSrc[2]);
  webpageThumbnails[3].setAttribute("src", thumbnailsSrc[3]);
}

// edit number of purchase
minusIcon.addEventListener("click", reduceNumOfPurchase);
plusIcon.addEventListener("click", addNumOfPurchase);

function reduceNumOfPurchase() {
  let currentNumOfPurchase = Number(numOfPurchase.innerText);
  if (currentNumOfPurchase > 0) {
    currentNumOfPurchase--;
  }
  numOfPurchase.textContent = currentNumOfPurchase;
}

function addNumOfPurchase() {
  let currentNumOfPurchase = Number(numOfPurchase.innerText);
  // if (currentNumOfPurchase < number of stock available) {}
  currentNumOfPurchase++;
  numOfPurchase.textContent = currentNumOfPurchase;
}

// Toggle cart tab
cartIcon.addEventListener("click", () => {
  cartTab.classList.toggle("hide-text");
});

// add item to cart
cartBtn.addEventListener("click", addItemsToCart);

function addItemsToCart() {
  const numOfItems = Number(document.querySelector("#number-of-purchase").innerText);
  const cartTabContent = document.querySelector(".cart-tab main");
  if (cartTabContent.children.length > 0) {
    if (cartTabContent.firstElementChild.classList.contains("cart-content")) {
      cartTabContent.removeChild(cartTabContent.firstElementChild);
    }
  }
  if (numOfItems > 0) {
    const anItem = document.createElement("div");
    anItem.classList.add("cart-item");
    anItem.innerHTML = `
        <div class="arranger-flex">
          <img src="./images/image-product-1-thumbnail.jpg" alt="pdt-thumbnail" id="thumbnail" />

          <div class="arranger">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x ${numOfItems} <span class="bold-text">$${125 * numOfItems}</span>
            </p>
          </div>

          <img src="./images/icon-delete.svg" alt="delete" id="del-btn" />

        </div>

      <button>Checkout</button>`;
    cartTabContent.appendChild(anItem);
  }
  addClickEventForDeleteButtons();
}

// add event listener for all delete buttons
function addClickEventForDeleteButtons() {
  const allDelBtns = document.querySelectorAll(".cart-item #del-btn");
  allDelBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", removeCartItem);
  });
}

// delete item from cart
function removeCartItem(event) {
  const cartTabContent = document.querySelector(".cart-tab main");
  cartTabContent.removeChild(event.target.parentNode.parentNode);
  if (cartTabContent.children.length < 1) {
    const p = document.createElement("p");
    p.textContent = "Your cart is empty.";
    p.classList.add("cart-content");
    cartTabContent.appendChild(p);
  }
}

// show gallery modal
webpageThumbnails.forEach((img) => {
  img.addEventListener("click", () => {
    gallery.classList.add("gallery-modal");
  });
});

// remove gallery modal
closeIcon.addEventListener("click", () => {
  gallery.classList.remove("gallery-modal");
});

// display gallery thumbnails
for (let i = 0; i < galleryThumbnails.length; i++) {
  galleryThumbnails[0].setAttribute("src", thumbnailsSrc[0]);
  galleryThumbnails[1].setAttribute("src", thumbnailsSrc[1]);
  galleryThumbnails[2].setAttribute("src", thumbnailsSrc[2]);
  galleryThumbnails[3].setAttribute("src", thumbnailsSrc[3]);
}

//gallery slider
galleryPrev.addEventListener("click", showGalleryPrev);
galleryNext.addEventListener("click", showGalleryNext);

function showGalleryPrev() {
  const currentImage = galleryImageShown.getAttribute("g-num");
  let currentImageNum = Number(currentImage);
  if (currentImageNum > 0) {
    currentImageNum--;
  } else {
    currentImageNum = 3;
  }
  galleryImageShown.src = images[currentImageNum].src;
  galleryImageShown.setAttribute("g-num", images[currentImageNum].num);
}

function showGalleryNext() {
  const currentImage = galleryImageShown.getAttribute("gnum");
  let currentImageNum = Number(currentImage);
  if (currentImageNum < 3) {
    currentImageNum++;
  } else {
    currentImageNum = 0;
  }
  galleryImageShown.src = images[currentImageNum].src;
  galleryImageShown.setAttribute("gnum", images[currentImageNum].num);
}