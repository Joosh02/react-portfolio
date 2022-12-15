import React from 'react';
import PortfolioDetail from '../portfolio/portfolio-detail';

export default function(props) {
    return (
        <div>
            <h2>PortfolioDetail for {props.match.params.slug}</h2>

        </div>
    );
}