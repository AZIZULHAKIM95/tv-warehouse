import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Myitem = ({item,user,toggledeleted, settoggledeleted}) => {
    const {_id,name,img,price,seller} = item;

    const deleteItem = (id,user)=>{
        const url = `${process.env.REACT_APP_API_URL}myitems/${user}/${id}`;
        axios.delete(url)
        .then(res=>{
            if(res.data.deletedCount>0){
                settoggledeleted(!toggledeleted);
            }
            else{
                alert("Can't Delete")
            }
        })
    }

    return (
        <div className='review-item'>
        <img src={img} alt=""></img>
        <div className='product-btn-info'>
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <h4>Seller: {seller}</h4>
            </div>
            <div className='delete-container'>
                <button className='delete-btn' onClick={()=>deleteItem(_id,user)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>

    </div>
    );
};

export default Myitem;