import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface BurgerTotalProps {
  sum: number
};

const BurgerTotal = (props: BurgerTotalProps) => {
  return (
    <div>
      <p className="text text_type_digits-medium">
        {props.sum}<CurrencyIcon type="primary" />
      </p>
    </div>
  );
};

export default BurgerTotal;