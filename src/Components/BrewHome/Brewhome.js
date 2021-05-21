import React from 'react';
import { useEffect, useState } from 'react';
import SingleBrew from '../singleBrew/SingleBrew';
import typeData from "../../Data/TypeData.json";
import cityData from "../../Data/CityData.json";
import "./BrewHome.css";

const Brewhome = () => {
    const [brewer, setBrewer] = useState([]);
    const [allBrewer, setAllBrewer] = useState([]);
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState("");
    useEffect(() => {
        fetch(`https://api.openbrewerydb.org/${searchData}`)
            .then(res => res.json())
            .then(data => {
                setBrewer(data)
                setAllBrewer(data)
            })
    }, [searchData])
    const handleTypeFilter = event => {
        if(event.target.checked){
            let newType = brewer.filter(item => item.brewery_type === event.target.value)
            setBrewer(newType)
        }else{
            setBrewer(allBrewer)
        }
    }
    const handleCityFilter = event => {
        if(event.target.checked){
            let newType = brewer.filter(item => item.city === event.target.value)
            setBrewer(newType)
        }else{
            setBrewer(allBrewer)
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        let searchStr = search.target.value;
        setSearchData(searchStr);
    }
    return (
        <div className="brew-container">
            {/* two types of filters and search option*/}
            <div className="filter-container">
                <div>
                    {/* input box for search */}
                <h1 className="main-heading">Welcome To the <span className="brewery-header">Brewery</span></h1>
                <div className="search-input">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="type breweries and search" onChange={e => setSearch(e)}/>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <h2>Filter by Type</h2>
                {typeData.map((inputs, index) =>
                    <div key={index} class="pretty p-default p-curve p-fill">
                        <input type="checkbox" name="byType" id="" value={inputs.typeInput} onChange={handleTypeFilter} />
                        <div className="state p-warning">
                            <label htmlFor="byType">{inputs.typeName}</label>
                        </div>
                    </div>)
                }
                <h2>Filter by City</h2>
                {cityData.map((cities, index) =>
                    <div key={index} class="pretty p-default p-curve p-fill">
                        <input type="checkbox" name="byType" id="" value={cities.cityName} onChange={handleCityFilter} />
                        <div className="state p-warning">
                            <label>{cities.cityName}</label>
                        </div>
                    </div>)
                }
                </div>
            </div>
            {/* data according to search and filter*/}
            <div className="data-container">
                <h1>We Found Total Brewers: {brewer.length}</h1>
                {brewer.map(item => <SingleBrew item={item} key={item.id}></SingleBrew>)}
            </div>
        </div>
    );
};

export default Brewhome;