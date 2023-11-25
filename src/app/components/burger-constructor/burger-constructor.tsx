import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerItem from "../burger-item/burger-item";
import BurgerTotal from "../burger-total/burger-total";
import AppScrollbar from "../app-scrollbar/app-scrollbar";

import BurgerConstructorStyles from "./burger-constructor.module.css";

interface BurgerConstructorProps {
  data: Array<BurgerConstructorItemProps>;
}

interface BurgerConstructorItemProps {
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

function BurgerConstructor(props: BurgerConstructorProps) {
  return (
    <section className={`${BurgerConstructorStyles.content} pt-25`}>
      <BurgerItem
        image={props.data[0].image}
        price={props.data[0].price}
        title={`${props.data[0].name} (верх)`}
        isLocked={true}
        type="top"
      />

      <AppScrollbar style={{ maxHeight: "calc(100vh - 500px)" }}>
        <ul>
          {props.data.map((ingredient, index, arr) => {
            if (index > 0 && index < arr.length - 1) {
              return (
                <li key={index}>
                  <BurgerItem
                    image={ingredient.image}
                    price={ingredient.price}
                    title={ingredient.name}
                    isLocked={false}
                  />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </AppScrollbar>

      <BurgerItem
        image={props.data[props.data.length - 1].image}
        price={props.data[props.data.length - 1].price}
        title={`${props.data[props.data.length - 1].name} (низ)`}
        isLocked={true}
        type="bottom"
      />

      <div className={`${BurgerConstructorStyles.summary} mt-10`}>
        <div className={`${BurgerConstructorStyles.total} mr-10`}>
          <BurgerTotal sum={610} />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
        <div style={{ width: "16px" }}></div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
