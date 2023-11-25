import React, { useState } from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, InputLabel, MenuItem, Select, FormControl } from '@mui/material';


const AddProduct = () => {
    const [title, setTitle] = useState("");
    const [thumbnail, setProductImage] = useState("");
    const [description, setDescription] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [salePrice, setSalePrice] = useState("");
    const [rating, setRating] = useState("");
    const [quantity, setQuantity] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");


    const handleImage = (e) => {
        setProductImage("")
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setProductImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error :- ", error);
        }
    }
    const AddNewProduct = () => {

       
            const body = {
                title, brand, category, thumbnail, quantity, description, regularPrice, salePrice, rating
            };
           axios.post("http://localhost:3002/createProduct",body,{headers:{}})
           .then(data=>console.log(data))
           .catch(e=>console.log(e))
        
    }
    return (
        <>
            <Box sx={{ flexGrow: 1, height: '90vh' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ lg: 16 }}>
                    <Grid lg={16} className>
                        <Typography>Product Name</Typography>
                        <TextField
                            sx={{ width: 500, bgcolor: "white" }}
                            required

                            label="Product Name"
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid lg={8} >
                        <Typography>Product Description</Typography>
                        <textarea
                            style={{ width: 500, height: 150, padding: 10, border: 0, outline: 0 }}
                            type='text'
                            placeholder="Product Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid lg={8}>
                        <Typography>Product Image</Typography>
                        <TextField
                            required
                            sx={{ width: 400, bgcolor: "white" }}

                            type='file'
                            onChange={handleImage}
                        />
                        {!thumbnail ? "" : <><br /> <img src={thumbnail} alt="" width={200} height={110} /></>}
                    </Grid>
                    <Grid columns={{ lg: 16 }} sx={{ display: "flex", gap: 9, flexWrap: "wrap" }} >
                        <Grid lg={4} >
                            <TextField
                                required

                                type='number'
                                label='Regular Price'
                                sx={{ bgcolor: "white" }}
                                value={regularPrice}
                                onChange={(e) => setRegularPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid lg={4}>
                            <TextField
                                required

                                type='number'
                                label='Sale Price'
                                sx={{ bgcolor: "white" }}
                                value={salePrice}
                                onChange={(e) => setSalePrice(e.target.value)}
                            />
                        </Grid>
                        <Grid lg={4}>
                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={rating}
                                    label="Rating"
                                    onChange={(e) => setRating(e.target.value)}
                                    sx={{ width: 200, bgcolor: 'white' }}
                                >
                                    <MenuItem value={1} >1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid lg={4}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="category"
                                    sx={{ width: 200, bgcolor: 'white' }}
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value={'Electronics'} >Electronics</MenuItem>
                                    <MenuItem value={'Fashion'}>Fashion</MenuItem>
                                    <MenuItem value={'Furniture'}>Furniture</MenuItem>
                                    <MenuItem value={'Groceries'}>Groceries</MenuItem>
                                    <MenuItem value={'Baby products'}>Baby products</MenuItem>
                                    <MenuItem value={'Books'}>Books</MenuItem>
                                    <MenuItem value={'Jewellery'}>Jewellery</MenuItem>
                                    <MenuItem value={'Mobiles and tablets'}>Mobiles and tablets</MenuItem>
                                    <MenuItem value={'Outdoor equipment'}>Outdoor equipment</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid columns={{ lg: 16 }} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Grid>
                            <TextField
                                sx={{ width: 300, bgcolor: "white" }}
                                required

                                label="Brand"
                                type='text'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                sx={{ width: 300, bgcolor: "white" }}
                                required

                                label="Quantity"
                                type='text'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <button onClick={() => AddNewProduct()}>Add new Product</button>
                </Grid>
            </Box >
        </>
    )
}

export default AddProduct
