import fr from '../translations/fr.json';
import en from '../translations/en.json';

export default class LangManager {
  static readonly supportedLang: string[] = ['fr', 'en'];

  public lang?: string = null;

  public setLang(lang?: string): void {
    if (LangManager.supportedLang.includes(lang)) {
      this.lang = lang;
    }
  }

  public getDay(dayId: number): string {
    return this.getLang().days[dayId];
  }

  public getMonth(monthId: number): string {
    return this.getLang().months[monthId];
  }

  public getLang(): { [key: string]: string[] } {
    switch (this.getLangName()) {
      case 'fr':
        return fr;
      case 'en':
        return en;
      default:
        return en;
    }
  }

  public getLangName(): string | null {
    if (this.lang !== null) {
      return this.lang;
    }
    let currentLang = navigator.language;

    if (currentLang) {
      [currentLang] = currentLang.split('-');
      return currentLang;
    }

    return null;
  }
}
