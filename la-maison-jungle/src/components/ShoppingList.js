import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import PlantItem from "./PlantItem"


function ShoppingList({ cart, updateCart }) {
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

	return (
		<div className="mpj-shopping-list">
			<Categories />
			<ul className='mpj-plant-list'>
				{plantList.map((plant) => (
					<li className='mpj-plant-item' key={plant.id}>
						<PlantItem name={plant.name} 
								   cover={plant.cover} 
								   light={plant.light} 
								   water={plant.water} 
								   isBestSale={plant.isBestSale} 
								   isSpecialOffer={plant.isSpecialOffer}/>

						<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList