{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "moduleResolution": "node",
    "baseUrl": "modules",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "paths": {
      "@uno_bot/*": [
        "*/src"
      ],
      "@uno_bot/*/typings": [
        "*/typings"
      ]
    }
  },
  "include": [
    "replikit.config.ts",
    "modules/**/*.ts"
  ]
