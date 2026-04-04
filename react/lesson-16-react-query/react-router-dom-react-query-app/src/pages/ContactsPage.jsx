import { useQuery } from "@tanstack/react-query";

import { getPostsApi } from "../shared/api/posts-api";

const ContactsPage = ()=> {
    const {data: posts, isLoading, isFetching, error} = useQuery({
        queryKey: "posts",
        queryFn: () => getPostsApi({limit: 9, page: 1}),
        // cacheTime: 1000,
        // staleTime: 1000 * 5,
        staleTime: 60_000,
      });

      console.log(posts);

    return <h1>Contacts page</h1>
}

export default ContactsPage;