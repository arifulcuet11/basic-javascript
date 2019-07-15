# Description

This is simple conversion such as minute, hours, different date,list to pdf, list copy, parse html. 

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install basic-javascript.

```bash
npm i basic-javascript
```

## Usage

```node
import {{MinuteConversion}} from 'basic-javascript' // for angular-2+
MinuteConversion(120') # returns '2:00'
```
## Other Method Usage
```base
Hours: minutes: second
HMSConversion(Seconds, ConvsersionType)

ConversionType='s' and 'd'
d means dot format s means string format
let x = HMSConversion(120, 's') return 2 mintues
let y = HMSConversion(120, 'd') return 00:02:00

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
