import { defineConfig, loadEnv } from 'vite';

export default defineConfig({});

// export default defineConfig(({ command, mode, ssrBuild }) => {
//   console.log(command, mode, ssrBuild); // serve development false
//
//   if (mode === 'production') {
//     return { base: '/vite', }
//   }
//
//   return {};
// });

// export default defineConfig(async ({ command, mode}) => {
//   const data = await someAsycFynction();
//   return {...data};
// });

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), ''); // return all vars
//   const envVite = loadEnv(mode, process.cwd(), 'VITE_'); // returns vars with VITE_
//   return {};
// });

// export default defineConfig({
//   // base: '/vite',
//   clearScreen: false,
//   envPrefix: 'APP_',
//   logLevel: 'info',
//   envDir: 'envs',
//   server: {
//     open: 'index.html',
//     port: 3000,
//     // strictPort: true,
//   },
//   preview: {
//     open: 'index.html',
//     port: 8080,
//     strictPort: true,
//   },
//   css: {
//     devSourcemap: true,
//   }
// });
