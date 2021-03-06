import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('');
    const isArobaseError = inputValue.length > 0 ? !inputValue.includes('@') : false

    // const isArobaseThere = (e) => {
    //     if(!e.target.value.includes('@')){
    //         alert('Votre adresse e-mail est invalide !')
    //     }
    // }

    const isArobaseThere = () => {
        if(isArobaseError){
            alert('Votre adresse e-mail est incomplète !')
        }
    }
    const checkInputValue = (e) => setInputValue(e.target.value)

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                value={inputValue}
                onChange={checkInputValue}
                placeholder="adresse@email.fr"
                onBlur={isArobaseThere}
            />
            {isArobaseError && <span className='arobaseError'>Adresse non valide</span>}
		</footer>
	)
}

export default Footer