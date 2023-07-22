// vite.config.js
export default {
  root: '.',  // the root directory for the server
  base: '/exercise-log/',  // the base URL the server will run on
  build: {
    outDir: 'dist',  // the output directory for the build
  },
  server: {
    port: 5500  // the port the dev server will run on
  }
}
