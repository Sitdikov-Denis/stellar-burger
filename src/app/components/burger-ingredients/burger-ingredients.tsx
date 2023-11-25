import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';

import AppScrollbar from '../app-scrollbar/app-scrollbar';
import Ingredient from '../burger-ingredient/burger-ingredient';

import BurgerIngredientsStyles from './burger-ingredients.module.css';

interface BurgerIngredientsProps {
    data: Array<BurgerIngredientsItemProps>
  }
  
  interface BurgerIngredientsItemProps {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  }

function BurgerIngredients(props: BurgerIngredientsProps) {
  const [current, setCurrent] = useState('buns');

  return (
    <section className={BurgerIngredientsStyles.content}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div style={{ display: 'flex' }} className="mb-8">
        <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauses" active={current === 'sauses'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <AppScrollbar style={{maxHeight: 'calc(100vh - 304px)'}}>
        <h3 className="text text_type_main-medium mt-2">Булки</h3>
        <div className={`${BurgerIngredientsStyles.sections} pl-4`}>
          <ul>
            { 
              props.data.filter(data => data.type === "bun").map((ingredient) => (
                <li key={ingredient._id}>
                  <Ingredient 
                    image = {ingredient.image} 
                    price = {ingredient.price} 
                    title = {ingredient.name}
                  />
                </li>
              ))
            }
          </ul>
        </div>
        <h3 className="text text_type_main-medium mt-2">Соусы</h3>
        <div className={`${BurgerIngredientsStyles.sections} pl-4`}>
          <ul>
            { 
              props.data.filter(data => data.type === "sauce").map((ingredient) => (
                <li key={ingredient._id}>
                  <Ingredient 
                    image = {ingredient.image} 
                    price = {ingredient.price} 
                    title = {ingredient.name}
                  />
                </li>
              ))
            }
          </ul>
        </div>
        <h3 className="text text_type_main-medium mb-6">Начинки</h3>
        <div className={`${BurgerIngredientsStyles.sections} pl-4`}>
          <ul>
            { 
              props.data.filter(data => data.type === "main").map((ingredient) => (
                <li key={ingredient._id}>
                  <Ingredient 
                    image = {ingredient.image} 
                    price = {ingredient.price} 
                    title = {ingredient.name}
                  />
                </li>
              ))
            }
          </ul>          
        </div>
      </AppScrollbar>
    </section>
  );
};

export default BurgerIngredients;