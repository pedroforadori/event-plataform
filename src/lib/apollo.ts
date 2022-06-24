import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    //uri: "https://api-sa-east-1.graphcms.com/v2/cl4psisi12cu001xk1rwi5tje/master",
     headers: {
         'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}` 
    },
    cache: new InMemoryCache()
})