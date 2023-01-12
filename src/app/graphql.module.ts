import { NgModule } from '@angular/core';
import {  HttpHeaders } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { ApolloClient, ApolloClientOptions, ApolloLink, from, InMemoryCache, split } from '@apollo/client/core';
import { environment } from 'src/environments/environment';
import { getMainDefinition } from '@apollo/client/utilities';

const uri = environment.urlGraph; // <-- add the URL of the GraphQL server here
const socket = environment.ws

interface Definintion {
  kind: string;
  operation?: string;
};
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any>{

  const middleware = new ApolloLink((operation: any, forward: any) => {
    operation.setContext({
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${JSON.parse(localStorage.getItem("token") || '')}`,
      ),
    });

    return forward(operation);
  });

  const http = httpLink.create({
    uri: uri,
    includeExtensions: true,
    headers: new HttpHeaders().set(
      "Authorization",
      `Bearer ${JSON.parse(localStorage.getItem("token") || '')}`,
    ),
  })

  const ws = new WebSocketLink({
    uri: socket,
    options: {
      reconnect: true,
  }
});

  const link =
    split(
      ({ query }) => {
        const { kind, operation }:Definintion = getMainDefinition(query);
        return kind === "OperationDefinition" && operation === "subscription";
      },
      middleware.concat(ws),
      middleware.concat(http),
    )

  return {
    link: link,
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
