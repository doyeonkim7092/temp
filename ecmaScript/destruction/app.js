//destructing => take object OR array OR etcs element's variables out

// Part.01
// const setting = {
//   notification: {
//     follow: true,
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };

// if (setting.notification.follow) {
//   //send Email
// }

// //const follow = setting.notification.follow

// const {
//   notification: { follow },
//   color,
// } = setting;

// console.log({ follow });
// console.log(follow);
// console.log(color);

//Part.02
// const setting = {
//   notification: {
//     follow: true,
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };

// const {
//   notification: { follow },
// } = setting;

// //console.log(notification); //not defined
// console.log(follow); //true

//Part.03
//if follow is not inside notification make follow and defValue false
// const setting = {
//   notification: {
//     alerts: true,
//     unfollow: false,
//   },
//   color: {
//     theme: "dark",
//   },
// };

// const {
//   notification: { follow = false },
// } = setting;

// console.log(follow);
// console.log(setting);

//Part.04 => one-line-statement
//if No notification .. notification is empty Object .. SEE.. OMFG
const setting = {
  color: {
    theme: "dark",
  },
};

const { notification: { follow = false } = {} } = setting;

console.log(follow);
