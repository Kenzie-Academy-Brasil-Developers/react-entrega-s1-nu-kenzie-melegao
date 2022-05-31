import "./style.css"

function List (props) {

    return (
        <div>
            <div className="listHeader">
                <h3>Resumo Financeiro</h3>
                <div className="btnResume">
                    <button>Todos</button>
                    <button>Entradas</button>
                    <button>Saídas</button>
                </div> 
            </div>
            <div className="lancamentos">
                <ul>
                    {props.listTransactions.map((elem, index) => 
                        <li key={index}>
                            <div className="lacamentosConteudo-1">
                                <h3>{elem.description}</h3>
                                <p>{elem.type}</p>
                            </div>
                            <div className="lacamentosConteudo-2">
                                <p>
                                    {Math.abs(elem.value).toLocaleString('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}
                                </p>
                                {/* <p>R$ {elem.value.toFixed(2).replace('.',',')}</p> */}
                                <button className="btnTrash" onClick={() => props.handleList(elem)}>🗑️</button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default List