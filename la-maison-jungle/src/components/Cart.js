import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

	function addToCart(name, price){
		const currentPlantAdded = cart.find((plant) => plant.name === name);
		if(currentPlantAdded){
			const cartFilteredCurrentPlantAdded = cart.filter(plant => plant.name !== name);
			updateCart([
				...cartFilteredCurrentPlantAdded,
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		}else{
			updateCart([
				...cart,
				{name, price, amount: 1}
			])
		}
	}


	// console.log('plop') 
	// useEffect(() => {
	// 	console.log('useEffect')
	// }, [])

	useEffect(() => {
		document.title = `MPJ: ${total}€ d'achats`
	}, [total])

	function removeFromCart(name, price){
		const currentPlantRemoved = cart.find((plant) => plant.name === name);
		const cartFilteredCurrentPlantRemoved = cart.filter(plant => plant.name !== name);

		if(currentPlantRemoved.amount > 1){
			updateCart([
				...cartFilteredCurrentPlantRemoved,
				{name, price, amount: currentPlantRemoved.amount - 1}
			])
		}else{
			updateCart([
				...cartFilteredCurrentPlantRemoved
			])
		}
	}
	
    return isOpen ? (
        <div className='mpj-cart'>
            <button onClick={() => setIsOpen(false)} className='mpj-cart-close'>Fermer</button>
            <h2>Panier</h2>
            {
				cart
					.sort((a, b) => {
						let fa = a.name.toLowerCase(),
							fb = b.name.toLowerCase();
					
						if (fa < fb) {
							return -1;
						}
						if (fa > fb) {
							return 1;
						}
						return 0;
				})
					.map(({name, price, amount}, index) => {
						return (
						<div key={`${name}-${index}`}>
							{name} {price}€ x {amount}  <span className='mpj-cart-btn'>
															<button onClick={() => addToCart(name, price)}>+</button>
															<button onClick={() => removeFromCart(name, price)}>-</button>
														</span>
						</div>)
				})
			}
            <h3>Total : {total}€</h3>

			<button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
		<div className='mpj-cart-open' onClick={() => setIsOpen(true)}>
        	<button>Ouvrir le Panier</button>
		</div>
    )
}
export default Cart