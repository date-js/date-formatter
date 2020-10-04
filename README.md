# Date Formatter

- A light javascript tool for formatting date.
- Zero dependency.
- TypeScript compatible.

## Example

``` javascript
DateFormatter.format('%l %j %F %Y', new Date());
// Sunday 12 October 2014
```

``` javascript
DateFormatter.format('%l %j %F %Y', new Date(), 'fr_FR');
// Samedi 12 octobre 2014
```

By default, Date Formatter uses the current browser language. You can force a locale like this:
``` javascript
DateFormatter.setLocale('fr-FR');
```

You can see examples in example directory.

## Install it

### With NPM

``` bash
npm install @sm-date/date-formatter --save
```

``` javascript
import DateFormatter from '@sm-date/date-formatter';
```

### Otherwise

``` html
<script src="https://cdn.jsdelivr.net/npm/@date-js/date-formatter@1.0/dist/date-formatter.js"></script>
```

## Format

| Character     | Description           | Example  |
| ------------- |:-------------:| -----:|
| %Y            | A full numeric representation of a year, 4 digits | 2020 |
| %y             | A two digit representation of a year      |   20 |
| %d             | Day of the month, 2 digits with leading zeros      |    01 to 31 |
| %l | A full textual representation of the day of the week      |    Sunday through Saturday |
| %D | A textual representation of a day, three letters      |    Mon through Sun |
| %F | A full textual representation of a month, such as January or March      |    January through December |
| %M | A short textual representation of a month, three letters      |   Jan through Dec |
| %m | Numeric representation of a month, with leading zeros      |    	01 through 12  |
| %n | Numeric representation of a month, without leading zeros      |    	1 through 12  |
| %G |  	24-hour format of an hour without leading zeros      |    	0 through 23  |
| %H |  	24-hour format of an hour with leading zeros      |    	00 through 23  |
| %i |  	Minutes with leading zeros     |    	00 to 59  |
| %s |  	Seconds with leading zeros     |    	00 to 59  |
