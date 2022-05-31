import { useState } from "react"
import Cards from "../Cards"
import "./style.css"

function List (props) {

    const [filter, setFilter] = useState('Todos')

    return (
        <div>
            <div className="listHeader">
                <h3>Resumo Financeiro</h3>
                <div className="btnResume">
                    <button onClick={() => setFilter('Todos')}>Todos</button>
                    <button onClick={() => setFilter('Entrada')}>Entradas</button>
                    <button onClick={() => setFilter('Saída')}>Saídas</button>
                </div> 
            </div>
            <div className="lancamentos">
                <Cards filter={filter} listTransactions={props.listTransactions} handleList={props.handleList}/>
            </div>
        </div>
    )
}

export default List