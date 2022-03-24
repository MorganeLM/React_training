import { plantList } from "../data/plantList"

function Categories({selection, addCategoryToSelection}){
    const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])
    categories.map(cat => {
        let isSelected = false
        if(selection.find(element => element === cat)){
            isSelected = true
        }
        return {
            name: cat,
            isSelected: isSelected
        }
    })

    return(
        <ul className='mpj-plant-categories'>
				{categories.map((cat) => (
					<li key={cat.name} onClick={addCategoryToSelection(cat.name)}>{cat.name}  {cat.isSelected && <span>x</span>}</li>
				))}
			</ul>
    )
}

export default Categories