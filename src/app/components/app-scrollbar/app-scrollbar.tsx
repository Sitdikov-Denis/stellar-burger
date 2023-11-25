import { ReactNode } from 'react';
import AppScrollbarStyles from './app-scrollbar.module.css';

interface AppScrollbarProps {
    style: object;
    children: ReactNode;
};

function AppScrollbar(props: AppScrollbarProps) {  
  return (
    <div className={AppScrollbarStyles.cover} style={props.style}>
      {props.children}
    </div>
  );
};

export default AppScrollbar;