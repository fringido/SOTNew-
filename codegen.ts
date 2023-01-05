import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/app/schema.graphql',
  // generates: {
  //   'src/app/core/graphQL/file': {
  //     plugins: ['apollo-angular'],
  //     config: {
  //       apolloAngularVersion: 1
  //     },
  //   },
  //   './schema.json': {
  //     plugins: ['introspection'],
  //   },
  //   'src/app/core/modelsGenere/file.ts': {
  //     plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk'],
  //   },
  // }
  generates: {
    './src/core/modules/': {
      preset: 'graphql-modules',
      presetConfig: {
        baseTypesPath: '../generated-types/graphql.ts',
        filename: 'generated-types/module-types.ts'
      },
      plugins: [
        {
          add: {
            content: 'typescript-operations'
          }
        },
        'typescript',
        'typescript-resolvers'
      ]
    }
  }
}
export default config
