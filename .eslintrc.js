module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {

    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    "prettier/prettier": 0,
    "no-console": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "ts": "never",
      }
    ],
    "eslint-disable import/no-unresolved": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/camelcase": "off",
    "camelcase":"off",
    "no-useless-constructor":"off",
    "import/prefer-default-export":"off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {},
      "node": {
        "extensions": [".ts", ".tsx", ".native.js"]
      }
    }
  }
};
