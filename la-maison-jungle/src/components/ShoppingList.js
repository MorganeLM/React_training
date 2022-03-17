import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"


function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	
	return (
		<div className="mpj-shopping-list">
			<ul className='mpj-plant-categories'>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='mpj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem key={plant.id}
							   name={plant.name} 
							   cover={plant.cover} 
							   light={plant.light} 
							   water={plant.water} 
							   isBestSale={plant.isBestSale} 
							   isSpecialOffer={plant.isSpecialOffer}/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList