function renderCart(items) {
			const $cart = document.querySelector(".cart")
			const $total = document.querySelector(".total")
			const $totalQuantity = document.querySelector(".total-quantity")
			let totalQuantity = 0

			$cart.innerHTML = items.map((item) => {
				totalQuantity += item.quantity
				return `
					<tr>
						<td>#${item.id}</td>
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},1)">+</button>
						</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},-1)">-</button>
						</td>
						<td class="text-right">$${item.price}</td>
						<td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
					</tr>`
				}).join("")
			$total.innerHTML = "$" + cartLS.total()
			$totalQuantity.innerHTML = totalQuantity
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
