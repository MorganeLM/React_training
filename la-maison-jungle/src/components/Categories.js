
function Categories({dynamicCategories, addCategoryToSelection}){
    return(
        <ul className='mpj-plant-categories'>
            {dynamicCategories.map((cat) => (
                <li key={cat.name} onClick={() => addCategoryToSelection(cat)}>{cat.name} {cat.isSelected &&<span>+++</span>}</li>
            ))}
		</ul>
    )
}

export default Categories