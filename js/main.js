/* The Owl's Fancy JS */
document.addEventListener('DOMContentLoaded', function(){
  // Example: Smooth scroll handled by CSS scroll-behavior
  // Example: Fake form submission feedback
  const orderForm = document.getElementById('orderForm');
  if(orderForm){
    orderForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Grazie! (Demo) Il tuo ordine non è realmente inviato.");
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addProductBtn');
  const orderList = document.getElementById('orderList');
  const orderForm = document.getElementById('orderForm');

  addBtn.addEventListener('click', () => {
    const productSelect = document.getElementById('orderItem');
    const quantityInput = document.getElementById('orderQuantity');

    const product = productSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (!product || quantity < 1) {
      alert('Please select a product and enter a valid quantity.');
      return;
    }

    // Crea un elemento lista
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = `${product} x ${quantity}`;

    // Aggiungi un bottone per rimuovere l'elemento
    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-sm btn-danger';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      orderList.removeChild(li);
    });

    li.appendChild(removeBtn);
    orderList.appendChild(li);

    // Reset campi
    productSelect.selectedIndex = 0;
    quantityInput.value = 1;
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const items = [];
    orderList.querySelectorAll('li').forEach(li => {
      // testo formato "Product x Quantity"
      const text = li.firstChild.textContent.trim();
      const [product, qtyStr] = text.split(' x ');
      items.push({ product, quantity: parseInt(qtyStr) });
    });

    if (items.length === 0) {
      alert('Please add at least one product to your order.');
      return;
    }

    console.log('Order submitted:', items);
    alert('Order sent! Check console for details.');

    // Qui puoi inviare i dati a server o elaborare come vuoi

    // Pulisci lista e form
    orderList.innerHTML = '';
    orderForm.reset();
  });
});
