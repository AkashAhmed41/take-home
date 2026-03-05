import Sidebar from "@/components/layout/sidebar/Sidebar";
import Header from "@/components/layout/header/Header";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles["layout-container"]}>
      <Sidebar />
      <div className={styles["content-wrapper"]}>
        <Header />
        <main className={styles["content"]}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
