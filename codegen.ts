import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/app/schema.graphql',
  generates: {
    'src/app/core/graphQL/serviciosGraph.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        apolloAngularVersion: 1
      },
    },
    './schema.json': {
      plugins: ['introspection'],
    },
    'src/app/core/modelsGenere/models.ts': {
      plugins: ['typescript','typescript-generic-sdk'],
      config: {
        avoidOptionals: true
      }
    },
  }

}
export default config
