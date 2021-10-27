import React from "react";
import 'styles/InfoCard.css'

interface Props {
    data: {
        image?: string;
        name?: string;
        description?: string;
    }
}

const InfoCard: React.FC<Props> = ({data}) => {

    return Object.keys(data).length !== 0 ? (
        <div className="card" data-testid="card">
            <img src={data.image} alt={data.name} className="card-img" data-testid="card-img" />
            <h4 className="card-title" data-testid="card-title">
                {data.name}
            </h4>
            <div className="card-body" data-testid="card-body">
                {data.description}
            </div>
        </div>
    ) : null;
}

export default InfoCard;
