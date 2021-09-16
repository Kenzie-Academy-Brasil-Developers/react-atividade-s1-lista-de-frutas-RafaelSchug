import './style.css'

const FruitList = ({fruits}) => {

    return (
        <>
        <h4>Lista de frutas:</h4>
        <ul>
            {fruits.map((item, index)=> {
                return (
                <li key={index}>{item.name}</li>
                )
            })}
        </ul>
        
        </>
    )
}

export default FruitList;