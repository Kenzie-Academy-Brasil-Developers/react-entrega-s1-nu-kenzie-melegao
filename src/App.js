import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import TotalMoney from './components/TotalMoney';

function App() {

  const [listTransactions, setListTransactions] = useState([])

  function handleList (deleteItem){
    const newList = listTransactions.filter((elem) => elem !== deleteItem && elem)
    setListTransactions(newList)
  }


  return (
    <div className="App">
      <Header />
      <div className='main'>
        <aside>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          {listTransactions.length > 0 && (<TotalMoney listTransactions={listTransactions}/>)}
        </aside>
        <div className='container'>
          <List listTransactions={listTransactions} handleList={handleList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
