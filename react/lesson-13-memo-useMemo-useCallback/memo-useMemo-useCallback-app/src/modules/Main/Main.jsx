import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import Posts from "../Posts/Posts";
import MyPurchases from "../MyPurchases/MyPurchases";

import useTheme from "../../shared/hooks/useTheme";

import styles from "./Main.module.css";

const Main = () => {
  const {theme} = useTheme();
  
  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Container>
        <PageTitle>Home Page</PageTitle>
        {/* <Posts /> */}
        <MyPurchases />
      </Container>
    </main>
  );
};

export default Main;
