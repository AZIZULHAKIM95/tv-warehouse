import React from 'react';
import './ManageItems.css'
import useInventory from '../../Hooks/useInventory'
import Inventory from '../../Home/Inventory/Inventory'
import { Button, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Manageitems = () => {
    const [inventories, setInventories] = useInventory();
    
    return (
        <div className='container m-auto text-center'>
            <h1 className='text-info mt-4'>PRODUCTS WE PROVIDE</h1>
            <br />
            <div className='container m-auto text-center'>
         <Link to='/additem'>
             <Button>ADD ITEMS</Button>
         </Link>
     </div>
            <br />
            <CardGroup>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory} setInventories={setInventories}
                    ></Inventory>)
                }
            </CardGroup>

        </div>
         


    );
};

export default Manageitems;