# @date-js/date-formatter

[![npm](https://img.shields.io/npm/v/@date-js/date-formatter)](https://www.npmjs.com/package/@date-js/date-formatter)
[![license](https://img.shields.io/npm/l/@date-js/date-formatter)](LICENSE)

**Format a date. Nothing else. Under 1KB gzipped.**

No config. No plugins. No dependencies. Locale support out of the box via the native `Intl` API.

```javascript
DateFormatter.format('%l, %F %j %Y', new Date());
// Sunday, March 29 2026

DateFormatter.format('%l %j %F %Y', new Date(), 'fr-FR');
// dimanche 29 mars 2026
```

## Why this lib?

If all you need is to display a date, there's no point in shipping a full date toolkit. Perfect for landing pages, lightweight widgets, or any project where pulling in a full date library would be overkill.

- **Under 1KB gzipped** — no dead code, no bloat
- **Zero dependencies** — nothing to audit, nothing to break
- **Locale support out of the box** — automatically uses the browser language, no config needed
- **Familiar syntax** — `%Y-%m-%d` style, like PHP's `date()` or Python's `strftime`

## Install & Usage

### With a bundler (webpack, Vite, Rollup…)

```bash
npm install @date-js/date-formatter
```

Use the default export to get a ready-to-use singleton:

```javascript
import DateFormatter from '@date-js/date-formatter';

DateFormatter.format('%d/%m/%Y', new Date()); // 29/03/2026
DateFormatter.setLocale('fr-FR');
DateFormatter.format('%l %j %F %Y', new Date()); // dimanche 29 mars 2026
```

Or import the class directly to create isolated instances (useful when managing multiple locales):

```javascript
import { DateFormatter } from '@date-js/date-formatter';

const fr = new DateFormatter('fr-FR');
const en = new DateFormatter('en-US');

fr.format('%l %j %F %Y', new Date()); // dimanche 29 mars 2026
en.format('%l %j %F %Y', new Date()); // Sunday March 29 2026
```

### In a browser — classic script tag

The UMD bundle exposes `DateFormatter` as a global:

```html
<script src="https://cdn.jsdelivr.net/npm/@date-js/date-formatter@2/dist/date-formatter.
js"></script>
<script>
  DateFormatter.format('%d/%m/%Y', new Date()); // 29/03/2026
</script>
```

### In a browser — ES module

Modern browsers support `<script type="module">` without any bundler:

```html
<script type="module">
  import DateFormatter from 'https://cdn.jsdelivr.
  net/npm/@date-js/date-formatter@2/dist/date-formatter.js';

  DateFormatter.format('%d/%m/%Y', new Date()); // 29/03/2026
</script>
```

## Format specifiers

| Specifier | Description | Example |
|---|---|---|
| `%Y` | Year, 4 digits | `2026` |
| `%y` | Year, 2 digits | `26` |
| `%d` | Day of the month, with leading zero | `01` – `31` |
| `%j` | Day of the month, without leading zero | `1` – `31` |
| `%l` | Full weekday name *(locale-aware)* | `Sunday`, `dimanche` |
| `%D` | Short weekday name *(locale-aware)* | `Sun`, `dim.` |
| `%F` | Full month name *(locale-aware)* | `March`, `mars` |
| `%M` | Short month name *(locale-aware)* | `Mar`, `mars` |
| `%m` | Month, with leading zero | `01` – `12` |
| `%n` | Month, without leading zero | `1` – `12` |
| `%H` | Hour (24h), with leading zero | `00` – `23` |
| `%G` | Hour (24h), without leading zero | `0` – `23` |
| `%i` | Minutes, with leading zero | `00` – `59` |
| `%s` | Seconds, with leading zero | `00` – `59` |

Escape a `%` with a backslash: `\%`.

## License

MIT
