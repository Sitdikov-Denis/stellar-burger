import AppHeader from './components/app-header/app-header';
import AppStyles from "./page.module.css";
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

import ingredientsData from './utils/data';

export default function App() {
  return (
    <div className={AppStyles.wrapper}>
      <AppHeader />
      <main className={AppStyles.content}>
        <BurgerIngredients data={ingredientsData}/>
        <BurgerConstructor data={ingredientsData}/>
      </main>
    </div>
  )
};
