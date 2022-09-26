let result;

const currentDate = new Date();

result = currentDate;

let format = new Date("10-12-2002");
format = new Date("1996-12-12");
format = new Date("December 12, 1996");
format = new Date("12/12/1996");
format = new Date("12/12/1996 10:55:00");

result = format;

result = format.getDate();
result = format.getDay();
result = format.getTime();

result = currentDate.getFullYear();
result = currentDate.getHours();
result = currentDate.getMinutes();
result = currentDate.getSeconds();
result = currentDate.getMilliseconds();

result = currentDate.getTime();

format.setDate(5);
format.setMonth(5);
format.setFullYear(2022);
format.setHours(4);
format.setMinutes(54);
format.setSeconds(24);

result = format;

console.log(result);
