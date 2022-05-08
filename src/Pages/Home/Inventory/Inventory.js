import React, { useState,useEffect } from 'react';
import './Inventory.css'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useUser from '../../Hooks/useUser';
const Inventory = (props) => {

    const [disabled,setDisabled] = useState("disabled");

    const [user] = useUser();
     
    useEffect(()=>{
        if(user){
        setDisabled("");
    }
    },[user])

    const {_id, name, description, img, price, stock, seller } = props.inventory;
    const [newstock, setStock] = useState(stock);

    const addtoMyitems = (id)=>{
        const url = "http://192.168.0.106:5000/"+"myitems/";
        const data = {id,user:user.email}

        axios.post(url,data)
        .then((res=>{
            const data = res.data;
            console.log(data);
        }))
    }

    const navigate = useNavigate();

    const navigateInventory = () => {
        navigate('/inventories');
    }


    const deliverStockbyOne = (id)=>{
        const updateurl = "http://192.168.0.106:5000/"+"products/"+id;
        const data = {"update":-1}
        axios.put(updateurl,data)
        .then((res=>{
            const data = res.data;
            if(data.modifiedCount){
                // alert("Product Stock by 1");
                setStock(newstock-1);
                addtoMyitems(id);
            }
            else{
                alert("Can't Deliver")
            }
        }))
    }

    const updateStockbyOne = (id) =>{
        const url = "http://192.168.0.106:5000/"+"products/"+id;
        const data = {"update":1}

        axios.put(url,data)
        .then((res=>{
            const data = res.data;
            if(data.modifiedCount){
                // alert("Product Stock by 1");
                setStock(newstock+1);
            }
            else{
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
                    <button className="btn btn-success mt-2 rounded mx-auto"   onClick={navigateInventory}>Update</button>
                    <br />
                    <button className={`btn btn-success mt-2 rounded mx-auto ${disabled}`} onClick={()=>updateStockbyOne(_id)}>Restock</button>
                    <br />
                    <button className={`btn btn-success mt-2 rounded mx-auto ${disabled}`} onClick={()=>deliverStockbyOne(_id)}>Deliverd</button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Inventory;