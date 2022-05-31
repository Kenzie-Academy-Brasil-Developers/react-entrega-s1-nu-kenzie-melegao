import "./style.css"

function TotalMoney(props) {

    const valorTotal = props.listTransactions.reduce((valorAnterior, valorAtual) => {
        return valorAtual.value + valorAnterior;
    }, 0)   


    return (
        <div className="totalMoney">
            <div className="TotalMoneyResume">
                <h3 className="totalMoneyTittle">Valor total:</h3>
                <h3 className="totalMoneyAmount">
                    {Math.abs(valorTotal).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </h3>
            </div>
            <small className="totalMoneySmall">O valor se refere ao saldo</small>

        </div>
    )
}


export default TotalMoney