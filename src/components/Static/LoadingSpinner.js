import React from 'react';
import RingLoader from "react-spinners/RingLoader";

const LoadingSpinner = () => (
    <center>
        <RingLoader
            size={150}
            loading={true}
        />
        <h2 style={{color: '#585858', marginLeft: 20, fontFamily: "Raleway, Helvetica, sans-serif"}}>Loading...</h2>
    </center>
)

export default LoadingSpinner;