const DUMMY_BOOKS_DATA = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1722586209835-46ae3736ec12?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hero With Daniel",
    author: "Dougie Rogers",
    price: 90,
    isBestBook: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1722648404131-a69c35a706fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Goddess Of Insanity",
    author: "Dennis Jenkins",
    price: 70,
    isBestBook: true,
  },
  {
    id: 3,
    title: "Thieves Of The Lost World Of G...",
    image:
      "https://images.unsplash.com/photo-1723098232760-379e763a3f9b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Quinn Holland",
    price: 80,
    isBestBook: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1519872436884-4a50eb5a62db?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hunters Of Utopia",
    author: "Cole Porter",
    price: 60,
    isBestBook: true,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1569008593571-a98b326533a3?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lords And Gods",
    author: "Elis Booth",
    price: 65,
    isBestBook: true,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Girls And Officers",
    author: "Victor Miller",
    price: 75,
    isBestBook: true,
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1722586209835-46ae3736ec12?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dragon's Whisper",
    author: "Lena Storm",
    price: 85,
    isBestBook: false,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1722648404131-a69c35a706fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Realm of Shadows",
    author: "Aric Blackwood",
    price: 78,
    isBestBook: false,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1723098232760-379e763a3f9b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Silver Crown",
    author: "Evelyn Starling",
    price: 92,
    isBestBook: false,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1519872436884-4a50eb5a62db?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Winds of Fate",
    author: "Jaxon Hunter",
    price: 70,
    isBestBook: false,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1569008593571-a98b326533a3?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Curse of the Forgotten",
    author: "Mira Ravenwood",
    price: 80,
    isBestBook: false,
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Phoenix Blade",
    author: "Damon Ashcroft",
    price: 88,
    isBestBook: false,
  },
];

const localStorageBooks = JSON.parse(localStorage.getItem("BOOKS_DATA"));

const BOOKS_DATA =
  localStorage.getItem("booksData") !== null
    ? localStorageBooks
    : DUMMY_BOOKS_DATA;

function createBookCard(book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "under-carrousel-card";

  const infoDiv = document.createElement("div");
  infoDiv.className = "under-carrousel-card-info";

  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;
  img.className = "under-carrousel-img";

  const descContainer = document.createElement("div");
  descContainer.className = "under-carrousel-card-description-container";

  const descDiv = document.createElement("div");
  descDiv.className = "under-carrousel-card-description";

  const title = document.createElement("div");
  title.className = "under-carrousel-card-title";
  title.textContent = book.title;

  const author = document.createElement("div");
  author.className = "under-carrousel-card-author";
  author.textContent = book.author;

  descDiv.appendChild(title);
  descDiv.appendChild(author);

  const priceDiv = document.createElement("div");
  priceDiv.className = "under-carrousel-card-price";
  priceDiv.textContent = `$${book.price}`;

  descContainer.appendChild(descDiv);
  descContainer.appendChild(priceDiv);

  infoDiv.appendChild(img);
  infoDiv.appendChild(descContainer);

  const button = document.createElement("button");
  button.className = "under-carrousel-card-button";
  button.dataset.bookId = book.id;
  button.innerHTML = `
      <i class="fa-solid fa-shopping-cart under-carrousel-button-icon"></i>
      <div class="under-carrousel-button-text">Add to cart</div>
    `;

  bookDiv.appendChild(infoDiv);
  bookDiv.appendChild(button);

  const divider = document.createElement("div");
  divider.className = "divider2";
  bookDiv.appendChild(divider);

  return bookDiv;
}

const bookBestMonth = BOOKS_DATA.filter((book) => book.isBestBook);
const bringData = bookBestMonth.map((book) => {
  return createBookCard(book);
});

const bringRecentBooks = BOOKS_DATA.slice(-6).map((book) => {
  return createBookCard(book);
});

const bookContainer = document.getElementById("book-container");
bringData.forEach((bookDiv) => {
  bookContainer?.appendChild(bookDiv);
});

const bookContainerOfRecent = document.getElementById("book-container-recent");
bringRecentBooks.forEach((bookDiv) => {
  bookContainerOfRecent?.appendChild(bookDiv);
});

console.log("Books rendered successfully");

const localStorageShoppingCart = JSON.parse(
  localStorage.getItem("shoppingItems")
);

const shoppingItems =
  localStorage.getItem("shoppingItems") !== null
    ? localStorageShoppingCart
    : [];

function updateLocalStorage() {
  localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
}

function createShoppingItem(item) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "shopping-wrapper";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.className = "shopping-img";

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "order-details";

  const itemId = document.createElement("div");
  itemId.className = "order-item-id";
  itemId.textContent = item.title;

  const itemsDiv = document.createElement("div");
  itemsDiv.className = "order-items";
  itemsDiv.textContent = item.author;

  detailsDiv.appendChild(itemId);
  detailsDiv.appendChild(itemsDiv);

  const checkoutDiv = document.createElement("div");
  checkoutDiv.className = "order-checkout";

  const price = document.createElement("div");
  price.className = "order-price";
  price.textContent = `$${item.price}`;

  const editDiv = document.createElement("div");
  editDiv.className = "order-edit";

  const editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-trash-can order-edit-icon";

  const editLabel = document.createElement("span");
  editLabel.className = "order-edit-label";
  editLabel.textContent = "Remove";
  editLabel.dataset.itemId = item.id;

  editDiv.appendChild(editIcon);
  editDiv.appendChild(editLabel);

  checkoutDiv.appendChild(price);
  checkoutDiv.appendChild(editDiv);

  itemDiv.appendChild(img);
  itemDiv.appendChild(detailsDiv);
  itemDiv.appendChild(checkoutDiv);

  return itemDiv;
}

const bringShoppingCartData = shoppingItems.map((item) => {
  return createShoppingItem(item);
});

const itemContainer = document.getElementById("shopping-section");
bringShoppingCartData.forEach((itemDiv) => {
  itemContainer?.appendChild(itemDiv);
});

document.querySelectorAll(".under-carrousel-card-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const bookId = event.currentTarget.dataset.bookId;
    function getMyBook(bookId) {
      return BOOKS_DATA.find((book) => book.id === parseInt(bookId));
    }

    shoppingItems.push(getMyBook(bookId));
    updateLocalStorage();

    console.log(getMyBook(bookId));

    console.log(shoppingItems);
  });
});

document.querySelectorAll(".order-edit").forEach((editLabel) => {
  editLabel.addEventListener("click", (event) => {
    const editId = event.currentTarget.dataset.editId;
    function deleteItem(editId) {
      return shoppingItems.find((edit) => edit.id === parseInt(editId));
    }

    shoppingItems.pop(deleteItem(editId));
    updateLocalStorage();

    console.log(deleteItem(editId));

    console.log(shoppingItems);
  });
});
