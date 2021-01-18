const days = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// const ["Mon", "Tue", "Wed"] = days ... bolloks

// const mon = days[0];
// const tue = days[1];
// const wed = days[2];
// const thu = days[3];
// const fri = days[4];
// const sat = days[5];
// const sun = days[6];

// console.log(mon, tue, wed);

//defValue is , w
const [mon, tue, wed, sun] = days();
console.log(mon, tue, wed, sun);
