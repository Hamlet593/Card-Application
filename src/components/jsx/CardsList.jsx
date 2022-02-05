import '../css/cards__list.css'
import Cardsitem from './CardsItem';

const CardsList = ({cards, onDelete}) => {
    console.log(cards)
    return (
        <div className='cards__list'>
            {
                cards.map(card => {
                    return (
                        <Cardsitem
                         key={Math.random()}
                         number={card.number}
                         onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardsList;