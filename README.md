# sm-date

- A light javascript tool for formatting date.
- Zero dependency.
- TypeScript compatible.

## Example 

``` javascript
console.log(dateFormatter.format('%l %j %F %Y', new Date()));
```

The browser language is used by default. You can force a language like this:
``` javascript
dateFormatter.setLang('fr-FR');
```
 
You can see examples in example directory.

## Install it

### ES6

``` bash
npm install sm-date --save
```

### Otherwise

``` html
<script src="https://cdn.jsdelivr.net/npm/sm-date@1.0/dist/sm-date.js"></script>
```

## Format

| Character     | Description           | Example  |
| ------------- |:-------------:| -----:|
| %Y            | A full numeric representation of a year, 4 digits | 2020 |
| %y             | A two digit representation of a year      |   20 |
| %d             | Day of the month, 2 digits with leading zeros      |    01 to 31 |
| %l | A full textual representation of the day of the week      |    Sunday through Saturday |
| %F | A full textual representation of a month, such as January or March      |    January through December |
| %m | Numeric representation of a month, with leading zeros      |    	01 through 12  |
| %n | Numeric representation of a month, without leading zeros      |    	1 through 12  |
| %G |  	24-hour format of an hour without leading zeros      |    	0 through 23  |
| %H |  	24-hour format of an hour with leading zeros      |    	00 through 23  |
| %i |  	Minutes with leading zeros     |    	00 to 59  |
| %s |  	Seconds with leading zeros     |    	00 to 59  |