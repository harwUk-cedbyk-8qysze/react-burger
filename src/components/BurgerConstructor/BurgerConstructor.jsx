import React from 'react';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './BurgerConstructor.module.css';
import Constructor from "../Constructor/Constructor";
import data from '../../utils/data.js'


const BurgerConstructor = () => {
    const snack = data.filter(el => (el.type !== 'bun'));
    return(
        <section className={`${burgerConstructorStyles.section} pt-25 pl-4 ml-5`}>
            <div className={`${burgerConstructorStyles.block} mr-4 `}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={20}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                />
            </div>
                <ul className={`${burgerConstructorStyles.list} mr-1 pr-1`}>
                    {snack.map(element => (
                        <Constructor key={element._id} {...element}/>
                    ))}
                </ul>
            <div className={`${burgerConstructorStyles.block} mr-4 `}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={20}
                    thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                />
            </div>
            <div className={`${burgerConstructorStyles.cost} mt-10 mr-4`}>
            <p className={`text text_type_digits-medium mr-10`}>610
                <CurrencyIcon type="primary" className="p-4"/>
            </p>
            <Button type="primary" size="large">
                Оформить заказ
            </Button>
            </div>
        </section>
    )
}

export default BurgerConstructor;