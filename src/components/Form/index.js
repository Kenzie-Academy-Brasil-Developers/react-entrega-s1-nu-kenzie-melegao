import { useState } from "react"
import "./style.css"

function Form (props) {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('Entrada')

    const addTransaction = () => {
        const newTransaction = {
            description: description,
            value: Number(value),
            type: type
        }

        const newOutcomeTransaction = {
            description: description,
            value: Number(value * -1),
            type: type
        }

        if (type === "Entrada"){
            props.setListTransactions([...props.listTransactions, newTransaction])
        } else {
            props.setListTransactions([...props.listTransactions, newOutcomeTransaction])
        }
    }

    return (
        <form className="form" onSubmit={(event) => event.preventDefault()}>
            <input
                type='text'
                placeholder="Digite aqui sua descrição"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
            />
            <div className="formInside">
                <input
                    name="value"
                    type='number'
                    placeholder="Valor"
                    min='0'
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <select
                name="type"
                value={type}
                onChange={(event) => {
                    setType(event.target.value)
                }}
                >
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
            </div>
            <button onClick={() => addTransaction()}>Inserir valor</button>
        </form>
    )
}

export default Form