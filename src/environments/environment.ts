// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apikey:"AIzaSyBQsQizbrb8QwHYBiCcaxM34MbpI2AO8Fk",
    authdomain:"pro1-ec3cd.firebaseapp.com",
    databaseURL:"https://pro1-ec3cd.firebaseio.com",
    projectID:"pro1-ec3cd",
    storageBucket: "pro1-ec3cd.appspot.com",
    messagingSenderId: "732800036183"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
