import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.imageUrl} alt="country photo" />
        <span className="country-name">{props.country.name}</span>
    </div>
);

export default CountryFlag;