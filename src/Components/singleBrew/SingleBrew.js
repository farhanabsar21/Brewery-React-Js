import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleBrew.css";
import bottle from "../../Image/bottle.png";

const SingleBrew = (props) => {
    const { id, name, brewery_type, state, city} = props.item;
    
    return (
        <div className="single-brew">
            <div className="single-brew-img">
                <img src={bottle} alt="bottle beer" />
            </div>
            <div className="single-brew-details">
                <h3>{name}</h3>
                <h4>Type: {brewery_type}</h4>
                <p>State: <strong>{state}</strong></p>
                <Link to={`/breweries/${id}`}><button>Show details</button></Link>
            </div>
        </div>
    );
};

export default SingleBrew;