//swapping (let bekuz change assigning)

// let mon = "Sat";

// let sat = "Mon";

// [sat, mon] = [mon, sat];

// console.log(sat, mon);

//skipping

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const [, , , thu, fri, , ,] = days;

console.log(thu, fri);
