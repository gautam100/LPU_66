import React from 'react';

const Home = () => {
    return (
        <div className='row'>
            <div className="col">
                some data some data some data 
                some data some data some data 
            </div>
            <div className="col">
                some data some data some data 
                some data some data some data 
            </div>
            <div className="col">
                some data some data some data 
                some data some data some data 
            </div>

            <div className="row mt-4">
                <div className="col-md-5 col-lg-4">
                    <p>
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    </p>
                </div>
                <div className="col-md-3  col-lg-3">
                    <p>
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    </p>
                </div>
                <div className="col-md-4  col-lg-5">
                    <p>
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    Second row data second row data
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;