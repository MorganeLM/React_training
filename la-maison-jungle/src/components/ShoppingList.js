import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='mpj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='mpj-plant-item'>
						{plant.name}
                        {plant.isBestSale ? <span> 🙌</span> : null}
                        {plant.isBestSale && <span>🔥</span>}
                        {!plant.isBestSale && <span>°</span>}
                        {plant.isBestSale && plant.name === "monstera" && <span>!!</span>}
                        {plant.isSpecialOffer && <div className="mpj-sale">soldes</div>}
                        <CareScale scaleValue={plant.light} type="light"/>
                        <CareScale scaleValue={plant.water} type="water"/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList