import App from './App';

const app = new App();
const DateFormatter = {
  format: app.format.bind(app),
  setLocale: app.setLocale.bind(app),
  getValueFromSymbol: app.getValueFromSymbol.bind(app)
};

module.exports = DateFormatter;
export default DateFormatter;
