import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Additem = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = product => {
        console.log(product);
        const url = `http://192.168.0.106:5000/products`;
        axios.post(url, product)
            .then(res => {
                const { data } = res;
                console.log(data);
                reset();
            })
    };


    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please Add Tv Details</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Tv name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")}
                />

                <select className='mb-2' id="category" placeholder='Category' {...register("category")}>
                    <option value="4K QLED SMART TV">4K QLED SMART TV</option>
                    <option value="LED SMART TV">LED SMART TV</option>
                    <option value="QLED SMART TV">QLED SMART TV"</option>
                    <option value="FHD SMART TV">FHD SMART TV"</option>
                    <option value="Android Tv">Android Tv</option>
                    <option value="Analog Tv">Analog Tv</option>
                </select>
                {/* <textarea className='mb-2' placeholder='Category' {...register("category")} /> */}
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Stock' type="number" {...register("stock")} />
                <input className='mb-2' placeholder='Seller Name' type="text" {...register("seller")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn-info' type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default Additem;