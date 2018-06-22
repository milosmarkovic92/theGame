import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {cardMap} from '../utils/CardConstants';
import './Card.css';

class Card extends Component {
    static propTypes = {
        cardType: PropTypes.oneOf([...Array.from(cardMap.keys()), ''])
    };
    render() {
        return(
            <span className={'card' + (this.props.cardType ? '' : ' card-empty')} 
                style={{
                    backgroundImage: this.props.cardType 
                        ? `url('${cardMap.get(this.props.cardType)}')` 
                        : ''
                }}></span>
        )
    }
    
}

export default Card;