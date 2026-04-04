import PageWrapper from "../shared/components/PageWrapper/PageWrapper";
import Container from "../shared/components/Container/Container";

import PostsWithPagination from "../modules/Posts/PostsWithPagination";

const PostsPage = () => {
  return (
    <PageWrapper>
      <Container>
        <PostsWithPagination />
      </Container>
    </PageWrapper>
  );
};

export default PostsPage;
