const body = document.getElementById('body');
const pictureUrl = document.getElementById('pictureUrl');
const os = document.getElementById('os');
const userId = document.getElementById('userId');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
//const email = document.getElementById('email');

async function main() {
  // use function after init is easier
  // liff.ready.then(
  //   () => {
  //     if (liff.isInClient()) {
  //       mainLiff();
  //     }
  //   },
  //   (err) => {
  //     os.innerHTML = 'error' + err;
  //   }
  // );
  await liff.init(
    { liffId: '1657051316-r2qQzYRj' },
    () => {
      os.innerHTML = '<b>Device : </b>' + liff.getOS();
      mainLiff();
      // if (liff.isLoggedIn()) {
      //   mainLiff();
      // } else {
      //   os.innerHTML = 'not login in LINE';
      // }
    },
    (err) => {
      os.innerHTML = 'error' + err;
    }
  );
}

main();

function mainLiff() {
  //os.innerHTML = '<b>OS: </b>' + liff.getOS();
  if (liff.isInClient()) {
    getUserProfile();
  } else {
    userId.innerHTML = 'please use in LINE';
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>User ID: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
}
