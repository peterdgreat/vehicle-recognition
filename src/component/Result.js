import React from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
    const {make,model, year, color} =props;
    return (
        <div>
            {make} {model} {year} {color}
        </div>
    )
}

Result.propTypes = {
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
