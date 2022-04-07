import { plantList } from "../data/plantList"
import '../styles/ShoppingList.css'
//import CategoriesCor from "./CategoriesCor"
import Categories from "./Categories"
import PlantItem from "./PlantItem"
import { useState } from 'react'



function ShoppingList({ cart, updateCart }) {
	//correction 
	//const [activeCategory, setActiveCategory] = useState('')
	const [selection, updateSelection] = useState([])

	// const categories = plantList.reduce(
	// 	(acc, plant) =>
	// 		acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 	[]
	// )

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

	const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])
    let dynamicCategories = categories.map(cat => {
        let isSelected = false
        if(selection.findIndex(element => element.name === cat) !== -1){
            isSelected = true
        }
        return {
            name: cat,
            isSelected: isSelected
        }
    })

	function returnSelectedPlant(categories, plantList){
		let dynamicPlantList = [];
		let dynamicCategories = categories.filter(cat => cat.isSelected)
		if(dynamicCategories.length > 0){
			dynamicCategories.forEach(category => {
				let plants = plantList.filter(plant => plant.category === category.name);
				let selectedPlants = plants.map(plant => {
					return {
									...plant,
									isSelected: true
								}
				}
					)
				selectedPlants.forEach(plant => dynamicPlantList.push(plant))
			});
		}else{
			let selectedPlants = plantList.map(plant => {
				return {
								...plant,
								isSelected: true
							}
			})
			selectedPlants.forEach(plant => dynamicPlantList.push(plant))
		}
		
		return dynamicPlantList;
	}


	let dynamicPlantList = returnSelectedPlant(dynamicCategories, plantList)
	

    function addCategoryToSelection(cat){
        let isAlreadySelected = selection.find(item => item.name === cat.name);
        if(isAlreadySelected){
            let selectionMinusCat =  selection.filter(function(item) {
                return item.name !== cat.name
            })
            updateSelection([...selectionMinusCat])
        }else{
            updateSelection([...selection, cat])
        }
    }


	return (
		<div className="mpj-shopping-list">
			<Categories dynamicCategories={dynamicCategories}
						addCategoryToSelection={addCategoryToSelection}/>
{/* 
			<CategoriesCor  categories={categories}
							setActiveCategory={setActiveCategory}
							activeCategory={activeCategory}/> */}

			<ul className='mpj-plant-list'>
				{dynamicPlantList.map((plant) => (
					(plant.isSelected) && <li className='mpj-plant-item' key={plant.id}>
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