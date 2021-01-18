//function saveSettings(followAlert, unfollowAlert, mrkAlert, themeColor) {}

/*
point01 - 변수들의 가독성 확보
point02 - 각 변수의 기본값을 설정
*/
// function saveSettings({ followAlert, unfollowAlert, color = "blue" }) {
//   console.log(color);
// }

// saveSettings({
//   followAlert: true,
//   unfollowAlert: true,
//   mktAlert: true,
//   themeColor: "green",
// });

// function saveSettings({ notifications, color }) {
//   console.log(color);
// }

function saveSettings({ notifications, color: { theme } }) {
  console.log(theme);
}

saveSettings({
  notifications: {
    followAlert: true,
    unfollowAlert: true,
    mktAlert: false,
  },
  color: {
    theme: "blue",
  },
});
