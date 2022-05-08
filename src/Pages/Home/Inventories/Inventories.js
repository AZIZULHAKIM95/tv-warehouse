import React from 'react';
import useInventory from '../../Hooks/useInventory'
import Inventory from '../../Home/Inventory/Inventory'
import { CardGroup } from 'react-bootstrap';

const Inventories = () => {
    const [inventories, setInventories] = useInventory();
    
    return (
        <div className='container m-auto text-center'>
            <h1 className='text-info mt-4'>PRODUCTS WE PROVIDE</h1>
            <br />
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

export default Inventories;