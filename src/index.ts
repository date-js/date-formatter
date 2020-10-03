import App from './App';

const app = new App();

module.exports = {
  format: app.format.bind(app),
  setLocale: app.setLocale.bind(app)
};
