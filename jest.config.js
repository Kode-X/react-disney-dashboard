// jest.config.js
module.exports = {
  roots: ["<rootDir>/tests"],
  testMatch: ["**/?(*.)+(test).js?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
