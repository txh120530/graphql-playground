import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

import GetCharacters from "../Components/GetCharacters";

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    })
  }
});

const link = from ([
  errorLink,
  new HttpLink({uri: "https://rickandmortyapi.com/graphql" }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  credentials: 'include'
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <GetCharacters />
    </ApolloProvider>
  )
}
