import AppHeader from './components/app-header/app-header';
import AppStyles from "./page.module.css";
// import BurgerConstructor from '../burger-constructor/burger-constructor';
// import BurgerIngredients from '../burger-ingredients/burger-ingredients';

export default function App() {
  return (
    <div className={AppStyles.wrapper}>
      <AppHeader />
      <main className={AppStyles.content}>
      </main>
    </div>
  )
};
