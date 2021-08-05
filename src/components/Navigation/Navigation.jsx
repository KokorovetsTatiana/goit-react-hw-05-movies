import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={styles.container}>
        <header>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <NavLink className={styles.link} to="/">
                  <Button variant="contained" color="primary">
                    Home
                  </Button>
                </NavLink>
              </li>
              <li className={styles.navListItem}>
                <NavLink className={styles.link} to="/movies">
                  <Button variant="contained" color="primary">
                    Movies
                  </Button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
}

export default Navigation;