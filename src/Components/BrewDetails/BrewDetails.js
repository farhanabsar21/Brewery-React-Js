import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./BrewDetails.css";
import brewImg from "../../Image/brew.jpg";

const BrewDetails = () => {
    const { itemId } = useParams();
    const [detailData, setDetailData] = useState({})
    useEffect(()=> {
        fetch(`https://api.openbrewerydb.org/breweries/${itemId}`)
            .then(res => res.json())
            .then(data => setDetailData(data))
    }, [itemId])
    const { name, brewery_type, city, state, country, phone, website_url} = detailData;
    return (
        <section>
            <div className="data-details-container">
                <div className="data-details-img-container">
                    <img src={brewImg} alt="brew-hand" />
                </div>
                <div className="data-details">
                    <h1>Brewery Name: {name}</h1>
                    <h2>Type: {brewery_type}</h2>
                    <h2>Location: {city}, {state}, {country}</h2>
                    <h4>Contact: {phone}</h4>
                    <h4>Pay a visit: {website_url}</h4>
                </div>
            </div>
        </section>
    );
};

export default BrewDetails;