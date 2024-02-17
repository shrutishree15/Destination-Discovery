import React from 'react'
import Card from './card';
const Tours = ({removeTour,tours}) => {



    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Shruti</h2>
            </div>
            <div className = 'cards'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour} />;
                    })
                }
            </div>
        </div>
    )
}

export default Tours;