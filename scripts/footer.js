document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navHeight = document.querySelector('grid-nav').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top +
      window.pageYOffset - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

function makeClickableDivs() {
  // Select all div elements
  const divs = document.querySelectorAll('grid-item');

  divs.forEach(div => {
    // Check if the div contains any links
    const link = div.querySelector('a');

    if (link) {
      // Make the div clickable
      div.style.cursor = 'pointer';

      // Add click event listener to the div
      div.addEventListener('click', function (event) {
        // Prevent the click from propagating to elements underneath
        event.stopPropagation();

        // Simulate a click on the first link found in the div
        link.click();
      });
    }
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', makeClickableDivs);

function renderCart(items) {
			const $cart = document.querySelector(".cart")
			const $total = document.querySelector(".total")
			const $totalQuantities = document.querySelectorAll(".total-quantity")
			let totalQuantity = 0

			$cart.innerHTML = items.map((item) => {
				totalQuantity += item.quantity
				const itemSubtotal = item.price * item.quantity
				return `
					<tr>
						<td>#${item.id}</td>
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td><button type="button" onClick="cartLS.quantity(${item.id},1)">+</button></td>
						<td><button type="button" onClick="cartLS.quantity(${item.id},-1)">-</button></td>
						<td>$${item.price}</td>
						<td>$${itemSubtotal}</td>
						<td><button onClick="cartLS.remove(${item.id})">Delete</button></td>
					</tr>
				`
			}).join("")

			$total.innerHTML = "$" + cartLS.total()
			$totalQuantities.forEach(element => {
				element.innerHTML = totalQuantity
			})
		}

		renderCart(cartLS.list())
		cartLS.onChange(renderCart)
        
    function getProductDetails(prodID, prodName, prodPrice) {
    const details = {
        id: '',
        name: '',
        price: ''
    };

    // Obtener los elementos por sus IDs proporcionados
    const idElement = document.getElementById(prodID);
    const nameElement = document.getElementById(prodName);
    const priceElement = document.getElementById(prodPrice);

    // Asignar valores al objeto de detalles
    details.id = idElement ? idElement.textContent.trim() : 'No disponible';
    details.name = nameElement ? nameElement.textContent.trim() : 'No disponible';
    details.price = priceElement ? priceElement.textContent.trim() : 'No disponible';

    // Verificar y convertir tipos de datos
    details.id = isNaN(Number(details.id)) ? details.id : Number(details.id);
    details.name = isNaN(Number(details.name)) ? details.name : Number(details.name);
    details.price = isNaN(Number(details.price)) ? details.price : Number(details.price);

    // Mostrar los resultados en la consola
    console.log('ID:', details.id, 'Tipo:', typeof details.id);
    console.log('Name:', details.name, 'Tipo:', typeof details.name);
    console.log('Price:', details.price, 'Tipo:', typeof details.price);

    // Agregar al carrito
    cartLS.add(details);
}
