import React from 'react';
import Clothing from './Clothing'
import '../styles/ClothingChoices.css';
import Tshirts from './samples/generated_Tshirts.png'
import Trousers from './samples/generated_Trousers.png'
import Pullovers from './samples/generated_Pullovers.png'
import Dress from './samples/generated_Dress.png'
import Coats from './samples/generated_Coats.png'
import Sandals from './samples/generated_Sandals.png'
import Shirts from './samples/generated_Shirts.png'
import Bags from './samples/generated_Bags.png'
import Ankle_Boots from './samples/generated_Ankle_Boots.png'
import Sneakers from './samples/generated_Sneakers.png'

function ClothingChoices() {
    const clothingChoices = [
        {id: 0, title: "Tshirts", path:Tshirts},
        {id: 1, title: "Trousers", path:Trousers},
        {id: 2, title: "Pullovers", path:Pullovers},
        {id: 3, title: "Dresses", path:Dress},
        {id: 4, title: "Coats", path:Coats},
        {id: 5, title: "Sandals", path:Sandals},
        {id: 6, title: "Shirts", path:Shirts},
        {id: 7, title: "Bags", path:Bags},
        {id: 8, title: "Ankle Boots", path:Ankle_Boots},
        {id: 9, title: "Sneakers", path:Sneakers}
    ]
    
    

    const clothingElements = clothingChoices.map( x => 
        <Clothing key={x.id} title={x.title} imgPath={x.path}/>
    );

    return (
        <div className="fashion table">
            {clothingElements}
        </div>
    );

    
}


export default ClothingChoices