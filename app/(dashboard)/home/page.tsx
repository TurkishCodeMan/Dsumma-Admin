import Invoices from "@/features/invoices/invoices";
import UsersPage from "@/features/users/components/UsersPage";
import React from "react";
import style from "./style.module.scss";

const DashboardPage: React.FC = () => {
  return (
    <main className={style["container"]}>
      <div className={style['profile']}>
        <span>Hüseyin Altikulac</span>
      </div>
      <div className={style['main']}>
        <div className={style["menu"]}>
         <div className={style['menu-header']}>
         <p>Logo</p>
          <h2>Dsumma Admin</h2>
          <p>admin@dsumma.com</p>
         </div>
        </div>
        <div className={style["active-page"]}>
          <Invoices />
        </div>
        <div className={style["control-panel"]}>Control Panel</div>
      </div>
    </main>
  );
};

export default DashboardPage;
