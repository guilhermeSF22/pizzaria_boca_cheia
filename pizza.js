document.addEventListener("DOMContentLoaded", () => {
  let cart = [];
  
  const cartIcon = document.getElementById("cart-icon");
  const cartContainer = document.getElementById("cart-container");
  const closeCart = document.getElementById("close-cart");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  
  const cartOverlay = document.createElement("div");
  cartOverlay.classList.add("cart-overlay");
  document.body.appendChild(cartOverlay);
  
  const pizzas = [
    {
      id: 1,
      name: "Calabresa",
      description: "Molho de tomate, mussarela, calabresa e cebola.",
      categoria: "pizza tradicional",
      price: "R$ 37,00",
      image: "imagens_pizza/calabresa2.JPG",
    },
    {
      id: 2,
      name: "Marguerita",
      description:
        "Molho de tomate, mussarela, tomate fresco, manjericão e azeite.",
      categoria: "pizza tradicional",
      price: "R$ 38,00",
      image: "imagens_pizza/marguerita.JPG",
    },
    {
      id: 3,
      name: "Frango com Catupiry",
      description:
        "Molho de tomate, mussarela, frango desfiado e catupiry original.",
      categoria: "pizza tradicional",
      price: "R$ 37,00",
      image: "imagens_pizza/frango_com_catupiry.JPG",
    },
    {
      id: 4,
      name: "Portuguesa",
      description:
        "Molho de tomate, mussarela, presunto, ovos, cebola, azeitona e ervilha.",
        categoria: "pizza tradicional",
      price: "R$ 45,00",
      image: "imagens_pizza/portuguesa.JPG",
    },
    {
      id: 5,
      name: "Quatro Queijos",
      description:
        "Molho de tomate, mussarela, provolone, parmesão e catupiry.",
      categoria: "pizza tradicional",
      price: "R$ 55,00",
      image: "imagens_pizza/4queijos.JPG",
    },
    {
      id: 6,
      name: "Atum",
      description: "Molho de tomate, mussarela, atum sólido e cebola.",
      categoria: "pizza tradicional",
      price: "R$ 35,00",
      image: "imagens_pizza/atum2.JPG",
    },
    {
      id: 7,
      name: "Bacon",
      description: "Molho de tomate, mussarela e cubos crocantes de bacon.",
      categoria: "pizza tradicional",
      price: "R$ 38,00",
      image: "imagens_pizza/bacon.JPG",
    },
    {
      id: 8,
      name: "Lombo ao Creme",
      description:
        "Molho de tomate, mussarela, lombo suíno em rodelas, creme de leite, catupiry e cebola.",
      categoria: "pizza tradicional",
      price: "R$ 47,00",
      image: "imagens_pizza/lombo_ao_creme.JPG",
    },
    {
      id: 9,
      name: "Romeu e Julieta",
      description:
        "Massa fina, mussarela, goiabada e queijo catupiry (pizza doce).",
      categoria: "Pizza Doce",
      price: "R$ 40,00",
      image: "imagens_pizza/romeu_e_julieta.JPG",
    },
    {
      id: 10,
      name: "Brigadeiro",
      description:
        "Massa fina, creme de leite, leite condensado, chocolate ao leite e granulado.",
      categoria: "Pizza Doce",
      price: "R$ 45,00",
      image: "imagens_pizza/brigadeiro.JPG",
    },
    {
      id: 11,
      name: "Beijinho",
      description:
        "Massa fina, creme de leite, leite condensado, coco ralado e cerejas.",
      categoria: "Pizza Doce",
      price: "R$ 45,00",
      image: "imagens_pizza/beijinho.JPG",
    },
    {
      id: 12,
      name: "Confete",
      description:
        "Massa fina, creme de leite, leite condensado, chocolate ao leite e confete colorido.",
      categoria: "Pizza Doce",
      price: "R$ 45,00",
      image: "imagens_pizza/confete.JPG",
    },
    {
      id: 13,
      name: "Chocolate com Morango",
      description:
        "Massa fina, Creme de leite, leite condensado, chocolate ao leite e morangos fatiados.",
      categoria: "Pizza Doce",
      price: "R$ 42,00",
      image: "imagens_pizza/chocolate_morango.JPG",
    },
    {
      id: 14,
      name: "Banana com Canela",
      description: "Massa fina, banana fatiada, mel, canela e açúcar.",
      categoria: "Pizza Doce",
      price: "R$ 38,00",
      image: "imagens_pizza/banana_canela.JPG",
    },
    {
      id: 15,
      name: "Vegetariana",
      description:
        "Molho de tomate, mussarela, pimentão, cebola, azeitona e brócolis.",
      categoria: "Pizza Vegetariana",
      price: "R$ 49,00",
      image: "imagens_pizza/vegetariana.JPG",
    },
    {
      id: 16,
      name: "Abobrinha com Queijo",
      description:
        "Molho de tomate, mussarela, abobrinha em rodelas, queijo parmesão, tomate-cereja e manjericão.",
      categoria: "Pizza Vegetariana",
      price: "R$ 50,00",
      image: "imagens_pizza/abobrinha.JPG",
    },
    {
      id: 17,
      name: "Cogumelos com Alho",
      description:
        "Molho de tomate, cogumelos frescos, alho, azeite de oliva e queijo de cabra.",
      categoria: "Pizza Vegetariana",
      price: "R$ 52,00",
      image: "imagens_pizza/cogumelo_queijo.JPG",
    },
    {
      id: 18,
      name: "Espinafre com Ricota",
      description:
        "Molho de tomate, espinafre refogado, ricota temperada e azeitonas pretas.",
      categoria: "Pizza Vegetariana",
      price: "R$ 48,00",
      image: "imagens_pizza/espinafre.JPG",
    },
    {
      id: 19,
      name: "Berinjela com Parmesão",
      description: "Molho de tomate, berinjela grelhada e queijo parmesão.",
      categoria: "Pizza Vegetariana",
      price: "R$ 50,00",
      image: "imagens_pizza/beringela.JPG",
    },
    {
      id: 20,
      name: "Cebola Caramelizada",
      description: "Cebola caramelizada, queijo brie e mel.",
      categoria: "Pizza Vegetariana",
      price: "R$ 51,00",
      image: "imagens_pizza/cebola_caramelizada.JPG",
    },
    {
      id: 21,
      name: "Tomate Seco com Rúcula",
      description:
        "Molho de tomate, tomate seco, rúcula fresca e lascas de parmesão.",
      categoria: "Pizza Vegetariana",
      price: "R$ 54,00",
      image: "imagens_pizza/tomate_rucula.JPG",
    },
  ];

  const pizzaListDiv = document.getElementById("pizza-list");
  const categoryFilter = document.getElementById("category-filter");
  const ingredientSearch = document.getElementById("ingredient-search");
  const searchByNameOnly = document.getElementById("search-by-name-only");

  function renderPizzas(filteredPizzas) {
    pizzaListDiv.innerHTML = "";
    
    filteredPizzas.forEach((pizza) => {
      const pizzaItemDiv = document.createElement("div");
      pizzaItemDiv.classList.add("pizza-item");

      pizzaItemDiv.innerHTML = `
              <img src="${pizza.image}" alt="${pizza.name}" class="pizza-image">
              <h3>${pizza.name}</h3>
              <p>${pizza.description}</p>
              <span class="price">${pizza.price}</span>
          `;

      pizzaListDiv.appendChild(pizzaItemDiv);
    });
  }

  function filterPizzas() {
    const selectedCategory = categoryFilter.value;
    const searchTerm = ingredientSearch.value.toLowerCase();
    const byNameOnly = searchByNameOnly.checked;

    let filteredPizzas = pizzas;

    if (selectedCategory) {
      filteredPizzas = filteredPizzas.filter(
        (pizza) => pizza.categoria === selectedCategory
      );
    }

    if (searchTerm) {
      if (byNameOnly) {
        filteredPizzas = filteredPizzas.filter((pizza) =>
          pizza.name.toLowerCase().includes(searchTerm)
        );
      } else {
        filteredPizzas = filteredPizzas.filter(
          (pizza) =>
            pizza.description.toLowerCase().includes(searchTerm) ||
            pizza.name.toLowerCase().includes(searchTerm)
        );
      }
    }

    renderPizzas(filteredPizzas);
  }

  categoryFilter.addEventListener("change", filterPizzas);

  if (ingredientSearch) {
    ingredientSearch.addEventListener("input", filterPizzas);
  }

  if (searchByNameOnly) {
    searchByNameOnly.addEventListener("change", filterPizzas);
  }

  renderPizzas(pizzas);
  
  function openCart() {
    cartContainer.classList.add("active");
    cartOverlay.classList.add("active");
  }
  
  function closeCartMenu() {
    cartContainer.classList.remove("active");
    cartOverlay.classList.remove("active");
  }
  
  function addToCart(pizza) {
    const existingItem = cart.find(item => item.id === pizza.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...pizza,
        quantity: 1
      });
    }
    
    updateCart();
    
    alert(`${pizza.name} adicionada ao carrinho!`);
  }
  
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
  }
  
  function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    
    if (item) {
      item.quantity += change;
      
      if (item.quantity <= 0) {
        removeFromCart(id);
      } else {
        updateCart();
      }
    }
  }
  
  function calculateTotal() {
    let total = 0;
    
    cart.forEach(item => {
      const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
      total += price * item.quantity;
    });
    
    return total.toFixed(2).replace('.', ',');
  }
  
  function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    } else {
      cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        
        cartItemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price}</div>
            <div class="cart-item-quantity">
              <button class="quantity-btn minus" data-id="${item.id}">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item" data-id="${item.id}">Remover</button>
          </div>
        `;
        
        cartItems.appendChild(cartItemDiv);
      });
      
      document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), -1));
      });
      
      document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), 1));
      });
      
      document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
      });
    }
    
    cartTotal.textContent = `R$ ${calculateTotal()}`;
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    
    const total = calculateTotal();
    alert(`Compra finalizada com sucesso! Total: R$ ${total}`);
    
    cart = [];
    updateCart();
    closeCartMenu();
  }
  
  cartIcon.addEventListener('click', openCart);
  closeCart.addEventListener('click', closeCartMenu);
  cartOverlay.addEventListener('click', closeCartMenu);
  checkoutBtn.addEventListener('click', checkout);
  
  function renderPizzas(filteredPizzas) {
    pizzaListDiv.innerHTML = "";
    
    filteredPizzas.forEach((pizza) => {
      const pizzaItemDiv = document.createElement("div");
      pizzaItemDiv.classList.add("pizza-item");

      pizzaItemDiv.innerHTML = `
              <img src="${pizza.image}" alt="${pizza.name}" class="pizza-image">
              <h3>${pizza.name}</h3>
              <p>${pizza.description}</p>
              <span class="price">${pizza.price}</span>
              <button class="add-to-cart-btn" data-id="${pizza.id}">Adicionar ao Carrinho</button>
          `;

      pizzaListDiv.appendChild(pizzaItemDiv);
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const pizza = pizzas.find(p => p.id === id);
        if (pizza) {
          addToCart(pizza);
        }
      });
    });
  }
});
