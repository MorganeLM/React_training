import CareScale from "./CareScale"

function PlantItem(props) {
    const {id,name, cover,light, water, isBestSale, isSpecialOffer} = props;

    return (
        <li key={id} className='mpj-plant-item'>
            <h3>{name}</h3>
                        <div className="mpj-plant-list-photo-wrapper">
                            <img src={cover} alt={name} className="mpj-plant-list-photo" />
                        </div>
                        <div className="mpj-plan-tags">
                            {isBestSale ? <span> 🙌</span> : null}
                            {isBestSale && <span>🔥</span>}
                            {isBestSale && <span>°</span>}
                            {isBestSale && name === "monstera" && <span>!!</span>}
                            {isSpecialOffer && <span className="mpj-sale">soldes</span>}
                        </div>
                        <div className="mpj-plant-properties">
                            <CareScale scaleValue={light} type="light"/>
                            <CareScale scaleValue={water} type="water"/>
                        </div>
                        <button>Ajouter</button>
        </li>
    )
}

export default PlantItem