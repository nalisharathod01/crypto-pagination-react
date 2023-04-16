// import './App.css'
import { useEffect,useState } from 'react'
import { Cryptocard } from './components/Cryptocard';
function App() {
  const [cryptocoins , setCryptocoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // current page number
  const [itemsPerPage, setItemsPerPage] = useState(10); // number of items per page

 const getCryptoDetails = async() => {
 

  const resp = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  const data = await resp.json();
  console.log(data);
  setCryptocoins(data);

 }

useEffect(() => {
  getCryptoDetails();
}, []);

const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentItems = cryptocoins.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(cryptocoins.length / itemsPerPage);

const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // handle click on a page number
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };



console.log(indexOfLastItem, indexOfFirstItem ,currentItems); 

  return (
    <div className="App">
    <h1> Crypto Cards</h1>
    {currentItems.map(d => {
      return (
        <Cryptocard name={d.name} img={d.image}  currentPrice={d.current_price}/>
      )
    })}
    <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button id={number} onClick={handleClick}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    
    </div>
  )
}

export default App
