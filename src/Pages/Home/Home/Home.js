import React from 'react';
import Banner from '../Banner/Banner';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import './Home.css'
import Footer from '../../Shared/Footer/Footer'
import Inventory from '../Inventory/Inventory';
import { Button, CardGroup } from 'react-bootstrap';
import useInventory from '../../Hooks/useInventory';
import { Link } from 'react-router-dom';

const Home = () => {
    const [inventories, setInventories] = useInventory();
    return (
        <div className=''>
            <Banner></Banner>
            <br />
            <br />
            <br />
            <div className='container m-auto text-center'>
                <h1 className='text-info mt-4'>PRODUCTS WE PROVIDE</h1>
                <CardGroup>
                    {
                        inventories.slice(0, 6).map(inventory => <Inventory
                            key={inventory.id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </CardGroup>
            </div>
            <div className='container m-auto text-center'>
                <Link to='/inventories'>
                    <Button>SHOW ALL PRODUCTS</Button>
                </Link>
            </div>

            <br />
            <br />
            <br />
            <ClientFeedback></ClientFeedback>
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;