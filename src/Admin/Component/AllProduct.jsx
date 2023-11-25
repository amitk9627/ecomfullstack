import React, { useEffect, useState } from 'react'
import { Container, Typography, } from '@mui/material';
import axios from 'axios';
const AllProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    axios.get("https://fullstack-zwjf.onrender.com/products")
    .then(res => setData(res.data.products))
    .catch(e => console.log(e));
  } )
  return (
    <Container fluid sx={{ width: '80vw',  }} >
      <Typography variant='h4'>Product List</Typography>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Sale Price</th>
              <th>Regular Price</th>
              <th>brand</th>
              <th>category</th>
              <th>quantity</th>
              <th> thumbnail</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,i)=>{
                return <tr key={i}>
                  <td>{item.title}</td><td>{item.salePrice}</td>
                  <td>{item.regularPrice}</td>
                  <td>{item.category}</td>
                  <td>{item.brand}</td>
                  <td>{item.quantity}</td>
                  <td><img src={item.thumbnail} alt="" height={50}/></td>
                </tr>
              })
            }

          </tbody>
        </table>

      </div>
    </Container>
  )
}

export default AllProduct
