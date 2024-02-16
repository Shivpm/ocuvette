
import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  let productarr =[
    {id : 1, title: "shoes", price: 20, stock:6},
    {id : 2, title: "sneakers", price: 10, stock:11},
    {id : 3, title: "hoodies" , price: 30, stock:12},

  ]
  return (
    <div >
      <Navbar/>
      {
        productarr.map((product,index) =>(
          <Card key={product.id} title= {product.title} price={product.price} stock= {product.stock } />
        ))
      }
    </div>
  );
}

export default App;
