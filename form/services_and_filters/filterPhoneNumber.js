app.filter('PhoneNumberFilter', function() {
  return function (number) {

    if (!number) return '';

    number = String(number);
   
    var formattedNumber = number,
        area = number.substring(0,3),
        startNumber = number.substring(3,6),
        frontNumber = number.substring(6,8),
        endNumber = number.substring(8,10);

    if (startNumber) formattedNumber = ("(" + area + ") " + startNumber);
    if (frontNumber) formattedNumber += ( "-" + frontNumber);
    if (endNumber) formattedNumber += ( "-" + endNumber);

    return formattedNumber;
  };
});