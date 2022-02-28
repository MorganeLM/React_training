import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"
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
				{plantList.map((plant, index) => (
					<li key={plant.id} className='mpj-plant-item'>
						<h3>{plant.name}</h3>
                        <div className="mpj-plant-list-photo-wrapper">
                            <img src={photoList[index]} alt={plant.name} className="mpj-plant-list-photo" />
                        </div>
                        <div className="mpj-plan-tags">
                            {plant.isBestSale ? <span> 🙌</span> : null}
                            {plant.isBestSale && <span>🔥</span>}
                            {!plant.isBestSale && <span>°</span>}
                            {plant.isBestSale && plant.name === "monstera" && <span>!!</span>}
                            {plant.isSpecialOffer && <span className="mpj-sale">soldes</span>}
                        </div>
                        <div className="mpj-plant-properties">
                            <CareScale scaleValue={plant.light} type="light"/>
                            <CareScale scaleValue={plant.water} type="water"/>
                        </div>
                        <button>Ajouter</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList