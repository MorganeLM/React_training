import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"
import un from '../assets/cardPhotos/un.jpg'
import deux from '../assets/cardPhotos/deux.jpg'
import trois from '../assets/cardPhotos/trois.jpg'
import quatre from '../assets/cardPhotos/quatre.jpg'
import cinq from '../assets/cardPhotos/cinq.jpg'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    const photoList = [un, deux, trois, quatre, cinq, un, deux, trois, quatre, cinq];

	return (
		<div className="mpj-shopping-list">
			<ul className='mpj-plant-categories'>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='mpj-plant-list'>
				{plantList.map((plant) => (
					<PlantItem id={plant.id} 
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