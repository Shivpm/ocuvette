import React , {useState} from 'react'
import './Card.css'
import PropTypes from 'prop-types'
export default function Card({title,price,stock}) {
  let [stockCount, setstockCount] = useState(stock);
  function decrementStock(){
    setstockCount(--stockCount);
    console.log(stockCount)
  }
  return (
    <div className='card'>
        <h1 className='title'>{title}</h1>
        <p className='price'>${price}</p>
        <p>In Stock: {stockCount}</p>
        <p className='add'> <button onClick={decrementStock}> Add To Cart</button></p>
      
    </div>
  )
}
 Card.propTypes = {
    title: PropTypes.string.isRequired ,
    price : PropTypes.number 
 }
 Card.defaultProps = {
    title : 'Cuvette Basics',
    stock: 0
  }
  