import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from '../../node_modules/next/link';

const Container = styled.div`
    max-width: 100%;
    padding: 10px;
`;
const Image = styled.img`
    margin: 15px;
    object-fit: cover;
    min-width: 100%;
    min-height: 300px;
    max-width: 100%;
    max-height: 300px;
    &:hover {
        opacity: .4
        background: #555;
        cursor: pointer;
      }
`;

const Description = styled.div`
    text-align: center
`;

const Title = styled.h3 `
    text-weight: 500;
    font-size: 12px;
`;

const Price = styled.h3 `
    font-weight: 300;
    font-size: 12px;
`;

const LineUpCard = ({productInfo}) => {
    return(
        <Container>
            <Link href={{ pathname: '/product', query: { id: productInfo.id } }}>
            <a>
                <Image src={productInfo.images[0].src}/>
            </a>
            </Link>    
            <Description>
                <Title>{productInfo.title}</Title>
                <Price>{productInfo.variants[0].price} €</Price>
            </Description>
        </Container>        
    );
};

LineUpCard.propTypes = { 
    productInfo: PropTypes.object, 
} 

export default LineUpCard;