import type { CodegenConfig } from '@graphql-codegen/cli'
import { environment } from 'src/environments/environment.prod'

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
  }

}
export default config
