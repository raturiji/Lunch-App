import React from 'react';

const Loader = () => {
    return (
    <div className="Loader position-fixed w-100 h-100 d-flex">
        <img src={require('../assets/loader.gif')} alt="loading..." className="m-auto" />
    </div>
    )
}

export default Loader