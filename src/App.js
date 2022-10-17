import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Pagination from './Pagination';

function App() {

  const [product, setProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(4)

  const getProducts = async () => {
    const productUrl = await axios.get('https://fakestoreapi.com/products')
    // console.log(productUrl.data);
    setProduct(productUrl.data)
  }

  useEffect(() => {
    getProducts()
  })

  let lastPostIndex = postPerPage * currentPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let currentPosts = product.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="App">
      <h2>Pagination</h2>
      <Card product={currentPosts} />
      <Pagination setCurrentPage={setCurrentPage} totalPosts={product.length} postPerPage={postPerPage} />
    </div>
  );
}

export default App;
