import { useState } from "react"
import "./style.css"

function Cards (props){

    

    const handleFilter = props.listTransactions.filter((elem) => {

        if (props.filter === 'Todos'){
            return elem
        } else {
        return elem.type === props.filter
        }
    })

    return (
        <ul>
            {handleFilter.length > 0 ? 
            
            handleFilter.map((elem, index) => 
                <li key={index} className={elem.type === "Entrada" ? 'liPositive' : 'liNegative'}>
                    <div className="Card">
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
                        <button className="btnTrash" onClick={() => props.handleList(elem)}>🗑️</button>
                    </div>
                    </div>
                </li>
            ) :

            (
            <div className="emptyTransactions">
                <h2 className="emptyTransactionsTittle">Você ainda não possui nenhum lançamento</h2>
                <div className="emptyCard">
                    <div className="emptyCard-2">
                        <div className="emptyCard-3"></div>
                        <div className="emptyCard-4"></div>
                    </div>
                </div>
                <div className="emptyCard">
                    <div className="emptyCard-2">
                        <div className="emptyCard-3"></div>
                        <div className="emptyCard-4"></div>
                    </div>
                </div>
                <div className="emptyCard">
                    <div className="emptyCard-2">
                        <div className="emptyCard-3"></div>
                        <div className="emptyCard-4"></div>
                    </div>
                </div>
            </div>
            
            
            
            
            )
        
        
        }

        </ul>
    )
}

export default Cards