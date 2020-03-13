import App from './App';

const app = new App();

module.exports = {
  format: app.format.bind(app),
  setLang: app.setLang.bind(app),
};
