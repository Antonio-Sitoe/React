import React from 'react';
import { Outlet } from 'react-router-dom';
import Style from './Login.module.css';

function Login() {


  React.useEffect(() => {
    
    async function fecth(){
      

    }fecth()

  }, []);
  return (
    <div className={Style.div}>
      <Outlet />
    </div>
  );
}

export default Login;
