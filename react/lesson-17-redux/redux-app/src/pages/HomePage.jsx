import Container from "../shared/components/Container/Container";
import PageTitle from "../shared/components/PageTitle/PageTitle";

import Posts from "../modules/Posts/Posts";

const Main = () => {

  return (
      <Container>
        <PageTitle>Home Page</PageTitle>
        <Posts />
      </Container>
  );
};

export default Main;
