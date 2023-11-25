import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerIngredientStyles from "./burger-ingredient.module.css";
import Image from "next/image";
// import { useClient } from 'next/data-client';
import { useState } from "react";

interface BurgerIngredientProps {
  image: string;
  price: number;
  title: string;
}

const BurgerIngredient = (props: BurgerIngredientProps) => {
  // useClient();
  //Состояние хранит количество ингридиента
  //Временно, только для демонстрации цифры количества ингредиентов
  const [count, setCount] = useState(Math.trunc(props.price / 1000));

  const outCount = () => {
    return count > 0
      ? { count: count, style: { display: "block" } }
      : { count: 0, style: { display: "none" } };
  };

  return (
    <div className={`${BurgerIngredientStyles.card} mt-6 mb-8`}>
      <div
        className={BurgerIngredientStyles.card_count}
        style={outCount().style}
      >
        <p className="text text_type_digits-default">{outCount().count}</p>
      </div>
      <div className={`${BurgerIngredientStyles.card_image} ml-4 mr-4 mb-1`}>
        <Image src={props.image} alt={props.title} />
      </div>
      <div className={`${BurgerIngredientStyles.card_price} mb-1`}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={BurgerIngredientStyles.card_title}>
        <p className="text text_type_main-small">{props.title}</p>
      </div>
    </div>
  );
};

export default BurgerIngredient;
