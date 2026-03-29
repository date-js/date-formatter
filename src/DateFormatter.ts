export default class DateFormatter {
  private locale: string;

  constructor(locale?: string) {
    this.locale = locale ?? (typeof navigator !== 'undefined' ? navigator.language : 'en');
  }

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  public format(format: string, date: Date, locale?: string): string {
    let formatted = format;
    let varData;
    let delta = 0;
    const varRegexp = /(?<!\\)%([a-zA-Z])/g;
    while ((varData = varRegexp.exec(format)) !== null) {
      const variableValue = this.getValueFromSymbol(varData[1], date, locale ?? this.locale);
      if (variableValue !== undefined) {
        const pos = varData.index + delta;
        formatted = formatted.slice(0, pos) + variableValue + formatted.slice(pos + varData[0].length);
        delta += variableValue.length - varData[0].length;
      }
    }

    return formatted.replace(/\\%/g, '%');
  }

  private getValueFromSymbol(symbol: string, date: Date, locale: string): string | undefined {
    switch (symbol) {
      case 'Y':
        return date.getFullYear().toString();
      case 'y':
        return String(date.getFullYear()).slice(-2);
      case 'j':
        return date.getDate().toString();
      case 'd':
        return String(date.getDate()).padStart(2, '0');
      case 'l':
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
      case 'D':
        return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date);
      case 'F':
        return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
      case 'M':
        return new Intl.DateTimeFormat(locale, { month: 'short' }).format(date);
      case 'm':
        return String(date.getMonth() + 1).padStart(2, '0');
      case 'n':
        return (date.getMonth() + 1).toString();
      case 'G':
        return date.getHours().toString();
      case 'H':
        return String(date.getHours()).padStart(2, '0');
      case 'i':
        return String(date.getMinutes()).padStart(2, '0');
      case 's':
        return String(date.getSeconds()).padStart(2, '0');
      default:
        return undefined;
    }
  }
}
