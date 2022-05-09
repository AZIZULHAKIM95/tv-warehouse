import React,{ useEffect,useState}  from 'react';
import './MyItems.css'

import useUser from '../../Hooks/useUser';
import axios from 'axios';
import Myitem from './Myitem';

const MyItems = () => {
    const [user] = useUser();
    const [myitems,setMyitems] = useState([]);
    const [toggledeleted,settoggledeleted] = useState(false);
    const url = `${process.env.REACT_APP_API_URL}myitems/${user.email}`;

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            const items = res.data;
            setMyitems(items);
        })
    },[toggledeleted]);
    

    return(
        <div className="container">
            {
            myitems.map(item=><Myitem  key={item._id} item={item} user={user.email} toggledeleted={toggledeleted} settoggledeleted={settoggledeleted} />)
            }
        </div>
            
    )
}

export default MyItems;