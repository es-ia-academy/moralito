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
        
       
       function getProductDetails() {
            // Crear el objeto con las propiedades específicas
            const details = {
                id: '',
                name: '',
                price: ''
            };

            // Recuperar los elementos por sus IDs y asignar los valores al objeto
            const idElement = document.getElementById('arzFhCa');
            const nameElement = document.getElementById('KeOyCtZ');
            const priceElement = document.getElementById('RRlnWZt');

            // Asignar valores a las propiedades del objeto
            details.id = idElement ? idElement.textContent.trim() : 'No disponible';
            details.name = nameElement ? nameElement.textContent.trim() : 'No disponible';
            details.price = priceElement ? priceElement.textContent.trim() : 'No disponible';

            // Mostrar el objeto en la consola
            console.log(details);
            return details;
        }