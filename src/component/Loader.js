import React from 'react';

const Loader = ({type}) => {
    console.log(type)
    return (
    <div className={type === "miniLoader" ? "Loader w-100 h-100 d-flex" : "Loader position-fixed w-100 h-100 d-flex" }>
        <img src={require('../assets/loader.gif')} alt="loading..." className= {type === "miniLoader" ? "m-auto w-25" : "m-auto"} />
    </div>
    )
}

export default Loader

// display fixed
// width 100px