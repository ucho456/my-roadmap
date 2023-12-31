const sortImports = require.resolve("@trivago/prettier-plugin-sort-imports")

module.exports = {
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 100,
  arrowParens: "always",
  semi: true,
  endOfLine: "lf",
  plugins: [sortImports],
  importOrder: [
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@/app",
    "^@/components",
    "^@/constants",
    "^@/firebase",
    "^@/hooks",
    "^@/store",
    "^@/types",
    "^@/utils",
    "^@",
    "^/",
    "^[./]"
  ]
}
