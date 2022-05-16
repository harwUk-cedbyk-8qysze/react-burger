import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientsStyle from './Ingredient.module.css';
import PropTypes from 'prop-types';
import types from "../../utils/types";


const Ingredient = (props) => {
    return (
        <>
            <img className="ml-5 mr-5 mb-1" src={props.image_mobile} alt={'Булка'} />
            <div className={IngredientsStyle.price}>
                <span className={`${IngredientsStyle.span} 
                mr-2 text text_type_digits-default`}>{props.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${IngredientsStyle.name} 
            mt-2 mb-5 text text_type_main-default`}>{props.name}</p>
            <Counter count={1} size="default" />
            </>
    )
}

Ingredient.propTypes = {
    props: PropTypes.arrayOf(types.isRequired)
}

export default Ingredient;