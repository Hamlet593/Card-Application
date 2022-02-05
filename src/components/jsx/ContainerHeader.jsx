import '../css/container__header.css'

const ContainerHeader = ({onAdd, sortCards}) => {
    return (
        <div className='container__header'>
            <button onClick={() => {
                onAdd();
            }}>Add Card</button>
            <button onClick={() => {
                sortCards()
            }}>Sort Card</button>
        </div>
    );
}

export default ContainerHeader;