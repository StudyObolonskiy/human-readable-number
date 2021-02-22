module.exports = function toReadable (number) {
    let str = '';
    let lessTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'],
      tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      if (number < 20) {
      str = lessTwenty[number];
      }
      if (number >= 20 && number < 100) {
        str = number % 10 != 0 ? tens[Math.trunc(number / 10) -2] + ' ' + lessTwenty[number % 10] : tens[Math.trunc(number / 10) -2];
      }
      if (number >= 100 ) {
        let hundred = number % 100;
        str += lessTwenty[Math.trunc(number / 100)] + ' hundred '
        if (hundred < 20) {
          str += hundred != 0 ? lessTwenty[hundred] : '';
        } else if (hundred >= 20) {
          str += hundred % 10 != 0 ? tens[Math.trunc(hundred / 10) -2] + ' ' + lessTwenty[hundred % 10] : tens[Math.trunc(hundred / 10) -2]}
      }
      return str.trim()
  
}
