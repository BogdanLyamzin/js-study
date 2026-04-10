import Container from "../shared/components/Container/Container";
import PageTitle from "../shared/components/PageTitle/PageTitle";

import Posts from "../modules/Posts/Posts";
import MyPurchases from "../modules/MyPurchases/MyPurchases";

const Main = () => {

  return (
      <Container>
        <PageTitle>Home Page</PageTitle>
        {/* <MyPurchases /> */}
        <Posts />
      </Container>
  );
};

export default Main;
