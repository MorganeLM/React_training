
function CareScale(props) {
    const {scaleValue, type} = props
    const range = [1, 2, 3]
    const scaleType = type === 'light' ? '☀️' : '💧'

    function handleClick(type, value){
        const quantity = {
            1: 'peu',
            2: 'modérement',
            3: 'beaucoup'
        }
        const needType = {
            'light': 'de lumière',
            'water': 'd\'arrosage'
        }
        const message = `Cette plante requiert ${quantity[value]} ${needType[type]}`;
        alert(message)
    }

return (
    <div onClick={() => handleClick(props.type, scaleValue)}>
            { props.type === 'light' && 'Lumière : ' }
            { props.type === 'water' && 'Arrosage : ' }
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale