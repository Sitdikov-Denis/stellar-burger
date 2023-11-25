import BurgerItemStyles from "./burger-item.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";


interface BurgerItemProps {
  image: string;
  price: number;
  title: string;
  isLocked: boolean;
  type?: string;
}

const BurgerItem = (props: BurgerItemProps) => {
  return (
    <div className={`${BurgerItemStyles.content} ml-4 mr-4`}>
      {!props.isLocked ? (
        <div className={BurgerItemStyles.drag}>
          <DragIcon type="success" />
        </div>
      ) : (
        <div className={BurgerItemStyles.drag}></div>
      )}
      <ConstructorElement
        isLocked={props.isLocked}
        text={props.title}
        price={props.price}
        thumbnail={props.image}
      />
    </div>
  );
};

export default BurgerItem;


