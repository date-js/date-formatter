export default class App {
  protected locale?: string = navigator.language;

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  public format(format: string, date: Date): string {
    let formatted = format;
    let varData;
    const varRegexp = /%([a-z]+)/gi;
    while ((varData = varRegexp.exec(format)) !== null) {
      const variableValue = this.getVariableValue(varData[1], date);
      if (variableValue !== null) {
        formatted = formatted.replace(varData[0], variableValue);
      }
    }

    return formatted.replace('\\', '');
  }

  private getVariableValue(varName: string, date: Date): string | null {
    switch (varName) {
      case 'Y':
        return date.getFullYear().toString();
      case 'y':
        return `${date.getFullYear()}`.slice(-2);
      case 'j':
        return date.getDate().toString();
      case 'd':
        return `0${date.getDate()}`.slice(-2);
      case 'l':
        return new Intl.DateTimeFormat(this.locale, { weekday: 'long' }).format(date);
      case 'F':
        return new Intl.DateTimeFormat(this.locale, { month: 'long' }).format(date);
      case 'm':
        return `0${date.getMonth() + 1}`.slice(-2);
      case 'n':
        return (date.getMonth() + 1).toString();
      case 'G':
        return date.getHours().toString();
      case 'H':
        return `0${date.getHours()}`.slice(-2);
      case 'i':
        return `0${date.getMinutes()}`.slice(-2);
      case 's':
        return `0${date.getSeconds()}`.slice(-2);
      default:
        return null;
    }
  }
}
