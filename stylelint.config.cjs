/**
 * Stylelint configuration to support Tailwind CSS directives
 * and prevent false positives for unknown at-rules.
 */
module.exports = {
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "**/.next/**",
    "**/build/**",
    "**/*.js",
    "**/*.ts",
    "**/*.tsx",
    "vite.config.*",
    "tailwind.config.*",
    "postcss.config.*"
  ],
  rules: {
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen",
        "layer"
      ]
    }]
  }
};


