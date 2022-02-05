import '../css/cards__item.css'

const Cardsitem = ({number, onDelete}) => {
    return (
        <>
            <div className='cards__item'>
                <span>{number}</span>
                <button onClick={() => {
                    onDelete(number)
                }}>X</button>
            </div>
        </>
    );
}

export default Cardsitem;