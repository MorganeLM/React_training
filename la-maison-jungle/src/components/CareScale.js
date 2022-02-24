
function CareScale(props) {
    const {scaleValue, type} = props
    const range = [1, 2, 3]
    const scaleType = type === 'light' ? '☀️' : '💧'

    return (
        <div>
            { props.type === 'light' && 'Lumière : ' }
            { props.type === 'water' && 'Arrosage : ' }
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale