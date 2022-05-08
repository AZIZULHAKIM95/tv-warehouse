import React,{ useEffect,useState}  from 'react';
import './MyItems.css'

import useUser from '../../Hooks/useUser';
import axios from 'axios';
import Myitem from './Myitem';

const MyItems = () => {
    const [user] = useUser();
    const [myitems,setMyitems] = useState([]);
    const [toggledeleted,settoggledeleted] = useState(false);
    const url = `http://192.168.0.106:5000/myitems/${user.email}`;

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
            myitems.map(item=><Myitem item={item} user={user.email} toggledeleted={toggledeleted} settoggledeleted={settoggledeleted} />)
            }
        </div>
            
    )
}

export default MyItems;