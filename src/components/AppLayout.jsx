import Header from './Header'
import Body from './Body'
import { Outlet } from 'react-router-dom';

export default function AppLayout () {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};