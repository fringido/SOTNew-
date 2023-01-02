import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

// import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { WebSocketLink } from '@apollo/client/link/ws'

// const uri = environment.url;
// <-- add the URL of the GraphQL server here

const uri = 'https://rickandmortyapi.com/graphql';


export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const http = httpLink.create({ uri })
        const middleware = new ApolloLink((operation, forward) => {
          operation.setContext({
            headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token') || null}`)
          })
          return forward(operation)
        })

    const link = middleware.concat(http)

  return {
    link,
    cache: new InMemoryCache()
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
export class GraphQLModule {}
