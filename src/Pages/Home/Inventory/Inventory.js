import React, { useState, useEffect } from 'react';
import './Inventory.css'
import { Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../Hooks/useUser';
const Inventory = (props) => {
    const location = useLocation();
    const setInventories = props.setInventories;

    const [display, setDisplay] = useState(false);
    const [ishome, setIshome] = useState(false);
    const [user] = useUser();

    useEffect(() => {
        if (location.pathname === "/manageitems") {
            setDisplay(true);
        }
        if (location.pathname === "/" || location.pathname === "/home") {
            setIshome(true)
        }

    }, [location.pathname])

    const { _id, name, description, img, price, stock, seller } = props.inventory;
    const [newstock, setStock] = useState(stock);

    const addtoMyitems = (id) => {
        const url = `${process.env.REACT_APP_API_URL}myitems/`;
        const data = { id, user: user.email }

        axios.post(url, data)
            .then((res => {
                const data = res.data;
                if (data.insertedId) {
                    alert("Added To My items")
                }
            }))
    }
    const deleteproductbyone = (id) => {
        const deleteurl = `${process.env.REACT_APP_API_URL}products/` + id;
        // console.log(deleteurl);
        axios.delete(deleteurl)
            .then((res => {
                if (res.data.deletedCount > 0) {
                    let url = process.env.REACT_APP_API_URL;
                    fetch(url + "products")
                        .then(res => res.json())
                        .then(data => {
                            
                            setInventories(data);
                            alert("Product Deleted");
                        });
                        

                }
                else {
                    alert("Can't delete the product")
                }
            }))
    }

    const navigate = useNavigate();

    const navigateInventory = () => {
        navigate('/inventories');
    }


    const deliverStockbyOne = (id) => {
        const updateurl = `${process.env.REACT_APP_API_URL}products/` + id;
        const data = { "update": -1 }
        axios.put(updateurl, data)
            .then((res => {
                const data = res.data;
                if (data.modifiedCount) {
                    // alert("Product Stock by 1");
                    setStock(newstock - 1);
                    addtoMyitems(id);
                }
                else {
                    alert("Can't Deliver")
                }
            }))
    }

    const updateStockbyOne = (id) => {
        const url = `${process.env.REACT_APP_API_URL}products/` + id;
        const data = { "update": 1 }

        axios.put(url, data)
            .then((res => {
                const data = res.data;
                if (data.modifiedCount) {
                    // alert("Product Stock by 1");
                    setStock(newstock + 1);
                }
                else {
                    alert("Can't Stock")
                }
            }))
    }


    return (
        <div className='col-md-4'>
            <Card className='m-4'>
                <Card.Img className='w-25 m-auto bg-light' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-3'>{name}</Card.Title>
                    <Card.Title className='fs-3'>Price: ${price}</Card.Title>
                    <Card.Title className='fs-2'>Seller: {seller}</Card.Title>
                    <Card.Title className='fs-2'>Stock: {newstock}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    {
                        ishome && <>
                            <button className="btn btn-info mt-2 rounded mx-2" onClick={navigateInventory}>Update</button>

                        </>
                    }
                    {
                        display && <>
                            <button className={`btn btn-success mt-2 rounded mx-2 `} onClick={() => updateStockbyOne(_id)}>Restock</button>
                            <button className={`btn btn-danger mt-2 rounded mx-2 `} onClick={() => deliverStockbyOne(_id)}>Deliverd</button>
                            <button className="btn btn-info mt-2 rounded mx-2" onClick={() => deleteproductbyone(_id)}>Delete</button>
                        </>

                    }

                </Card.Body>

            </Card>
        </div>
    );
};

export default Inventory;