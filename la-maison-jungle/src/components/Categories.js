import { plantList } from "../data/plantList"

function Categories(){
    const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), [])

    return(
        <ul className='mpj-plant-categories'>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
    )
}

export default Categories