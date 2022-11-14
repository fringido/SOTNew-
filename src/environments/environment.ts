// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl          : 'https://hydra.gmm.local:4455/',
  // fingerprintAPI  : 'http://hydra.gmm.local:3000/',
  // socketServer    : 'http://hydra.gmm.local:3100/'
  apiUrl          : 'http://calixto.gmm.local:8070/',
  fingerprintAPI  : 'http://calixto.gmm.local:8081/',
  socketServer    : 'http://calixto.gmm.local:4100/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
