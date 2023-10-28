module.exports = {
  apps: [
    {
      name: 'backend-api',
      script: 'dist/main.js',
      //instances: 'max',
      autorestart: true,
      watch: false,
      //max_memory_restart: '8G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
