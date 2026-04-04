import PageWrapper from "../shared/components/PageWrapper/PageWrapper";
import Container from "../shared/components/Container/Container";

import SinglePost from "../modules/SinglePost/SinglePost";

const SinglePostPage = () => {
  return (
    <PageWrapper>
      <Container>
        <SinglePost />
      </Container>
    </PageWrapper>
  );
};

export default SinglePostPage;
