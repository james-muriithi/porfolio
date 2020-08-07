import React from 'react'
import Proptypes from 'prop-types'
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 20px;
    width: 100%;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-align: center;
    &:hover {
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);
    }`;

const Image = styled.img`
    margin-bottom: 22px;
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
`;

const Title = styled.h3`
    font-size: 20px;
`;

function ServiceCard({cardInfo, ...props}) {
    return (
        <Card {...props}>
            <div style={{ padding: '30px 15px 15px'}}>
                <Image src={cardInfo.image} alt="service" />
                <Title>{cardInfo.title}</Title>
                <p className='card-subtitle'>
                    {cardInfo.description}
                </p>
            </div>
        </Card>
    )
}

ServiceCard.proptypes = {
    cardInfo: Proptypes.object.isRequired
}

export default ServiceCard;