# jest 

```bash
$ npm i jest @types/jest ts-jest vue-jest -D

```

`jest.config.js```

```bash
module.exports = {
  setupFiles: ["<rootDir>/test/jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  },
  moduleFileExtensions: ["js", "json", "vue", "ts", "graphql"],
  testMatch: ["<rootDir>/**/*.spec.ts", "<rootDir>/**/*.spec.js"]
}
```
