// ProductList.js
import { useState } from 'react';
// import React {useState} from 'react';
import { useCart } from './CartContext';
import "./products.css";
import Productcard from './components/product/Productcard';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";

const products = [
    {
      "userId": 1,
      "id": 855,
      "count":1,
      "all":10,
      "company":"SUMEET TEX",
      "title":"Bahubali",
      "typeof":"Saree",
      "desno":123445
    },
    {
      "userId": 1,
      "id": 806,
      "count":1,
      "all":10,
      "company":"SUMEET TEXtile Surat ",
      "title":"Bahubali Gold Star Skill King Is Messi Is Gold And All",
      "typeof":"Saree",
      "desno":12344534

    },
    {
      "userId": 1,
      "id": 3,
      "count":1,
      "all":10,
      "typeof":"Shirt",
      "company":"Donear",
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "count":1,
      "all":10,
      "typeof":"Shirt",
      "company":"Raymond",
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "count":1,
      "all":10,
      "company":"Donear",
      "typeof":"Shirt",
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
  ];

function ProductList() {
  const { totalitem } = useCart();
  const [data, setData] = useState(products);
  const [filter, setFilter] = useState('Saree');
  const [activeButton, setActiveButton] = useState('Saree');
  const [activeButtoncolor, setActiveButtoncolor] = useState('Saree');

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    // console.log(searchTerm);
    // console.log(filteredData);

    const filteredResults = data.filter(
      (item) =>
      (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase() )) || (item.company && item.company.toLowerCase().includes(searchTerm.toLowerCase())
    ));

    setFilteredData(filteredResults);
  };
  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    setActiveButton(selectedFilter)
    setActiveButtoncolor(selectedFilter);

    if (selectedFilter === 'all') {
      setData(products);
    } else {
      // setData([])
      const filteredData = products.filter(item => item.typeof.toLowerCase()=== selectedFilter.toLowerCase());
      // console.log(filteredData)
      setData(filteredData);
    }
  };
  const dataToMap = filteredData.length > 0 ? filteredData : data;

  return (
    <div className='products'>
      <div className="products_nav">
        {/* <h2>Shree Ganesh Kateya Billing System</h2> */}
          <h1>Products</h1>
          <div className="product_nav_link">
          <NavLink to="/cart" className="nav-link" > {<ShoppingCartIcon/>} </NavLink>
          {/* <NavLink className="Nav__style" to="/project" compo={<ShoppingCartIcon/>} ></NavLink> */}
            {/* <ShoppingCartIcon/> */}
            <h6>{totalitem}</h6>
          </div>
      </div>
      <div className="products_nav_filter_navbar">
        {/* <button onClick={()=>handleFilter('Saree')  }>Saree</button> */}
        <button
        onClick={() => handleFilter('Saree')}
        style={{ backgroundColor: activeButton === 'Saree' ? 'black' : 'initial'  ,color: activeButtoncolor === "Saree" ? "white":"initial" }}
      >
        Saree
      </button>
      <button
        onClick={() => handleFilter('Shirt')}
        style={{ backgroundColor: activeButton === 'Shirt' ? 'black' : 'initial' ,color: activeButtoncolor === "Shirt" ? "white":"initial" }}
      >
        Shirt
      </button>
      <button
        onClick={() => handleFilter('Pant')}
        style={{ backgroundColor: activeButton === 'Pant' ? 'black' : 'initial'  ,color: activeButtoncolor === "Pant" ? "white":"initial" }}
      >
        Pant
      </button>
      <button
        onClick={() => handleFilter('Lehanga')}
        style={{ backgroundColor: activeButton === 'Lehanga' ? 'black' : 'initial'  ,color: activeButtoncolor === "Lehanga" ? "white":"initial"}}
      >
        Lehanga
      </button>
      <button
        onClick={() => handleFilter('Others')}
        style={{ backgroundColor: activeButton === 'Others' ? 'black' : 'initial'  ,color: activeButtoncolor === "Others" ? "white":"initial" }}
      >
        Others
      </button>
      </div>
      <div className="products_data_shows">
        <div className="product_data_show_input">
          <SearchIcon className='style'/>
          <input
              type="text"
              placeholder="Laxmipati or Gold Star"
              value={searchTerm}
              onChange={handleSearch}
            />
        </div>
        <div className="product_data_show_list">
            {
            dataToMap.map((product) => (
              <Productcard item={product}/>
            ))
            }
        </div>
      </div>
    </div>
  );
}

export default ProductList;
