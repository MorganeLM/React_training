import CareScale from "./CareScale"

function PlantItem(props) {
    const {name, cover, light, water, isBestSale, isSpecialOffer} = props;

    return (
        <div>
            <div className="mpj-plant-item-photo-wrapper">
                <img src={cover} alt={name} className="mpj-plant-item-photo" />
            </div>
            <div className="mpj-plant-item-info">
                <h3>{name}</h3>
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
            </div>
        </div>
    )
}

export default PlantItem