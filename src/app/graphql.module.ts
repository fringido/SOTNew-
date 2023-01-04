import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { ApolloClientOptions, ApolloLink, from, InMemoryCache, split } from '@apollo/client/core';

import { environment } from 'src/environments/environment';
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities';

const uri = environment.urlGraph; // <-- add the URL of the GraphQL server here
const socket = environment.ws
// const uri = 'https://rickandmortyapi.com/graphql';
const subscriptionLink = new WebSocketLink({
  uri: socket,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem("token") || '',
    },
  },
});

const authMiddleware = new ApolloLink((operation: any, forward: any) => {
  operation.setContext({
    headers: new HttpHeaders().set(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}` || '',
    ),
  });

  return forward(operation);
});

export function createApollo(httpLink: HttpLink) {
  return {
    link: from([
      authMiddleware,
      split(
        ({ query }) => {
          const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
        },
        subscriptionLink,
        httpLink.create({
          uri
        }),
      ),
    ]),
    cache: new InMemoryCache(),
  };

}
@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
