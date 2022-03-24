import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
import CategoriesCor from "./CategoriesCor"
import PlantItem from "./PlantItem"
import { useState } from 'react'



function ShoppingList({ cart, updateCart }) {
	//correction 
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

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

	// const [selection, updateSelection] = useState([])

    // function addCategoryToSelection(cat){
    //     let isAlreadySelected = selection.find(item => item === cat);
    //     if(isAlreadySelected){
    //         let selectionMinusCat =  selection.filter(function(item) {
    //             return item !== cat
    //         })
    //         updateSelection([...selectionMinusCat])
    //     }else{
    //         updateSelection([...selection, cat])
    //     }
    // }


	return (
		<div className="mpj-shopping-list">
			{/* <Categories selection={selection}
						addCategoryToSelection={addCategoryToSelection}/> */}

			<CategoriesCor  categories={categories}
							setActiveCategory={setActiveCategory}
							activeCategory={activeCategory}/>

			<ul className='mpj-plant-list'>
				{plantList.map((plant) => (!activeCategory || activeCategory === plant.category) && (
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