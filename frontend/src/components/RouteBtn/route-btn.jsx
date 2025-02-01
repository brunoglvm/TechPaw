import { Link } from "react-router-dom";
import styles from "./route-btn.module.css";

export function RouteBtn({ to, children }) {
  return (
    <Link to={to} className={styles.routeBtn}>
      {children}
    </Link>
  );
}
