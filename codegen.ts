import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'src/app/schema.graphql',
  documents: './src/**/*.gql',
  generates: {
    'src/app/core/graphQL/serviciosGraph.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular'],
      config: {
        addExplicitOverride: true
      },
    },
    // './schema.json': {
    //   plugins: ['introspection'],
    // },
    // 'src/app/core/modelsGenere/models.ts': {
    //   plugins: ['typescript','typescript-generic-sdk'],
    //   config: {
    //     avoidOptionals: true
    //   }
    // },
  }

}
export default config
