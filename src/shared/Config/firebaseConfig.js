// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
// import { getAnalytics } from "firebase/analytics";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};



// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app);

// Hàm để lắng nghe thông báo
export const listenForNotifications = (userId, setNotification) => {
  const notificationsRef = ref(database, `notifications/${userId}`);
  // console.log(notificationsRef);



  onValue(notificationsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      setNotification(data);
      // console.log(data); // Kiểm tra dữ liệu nhận được
      // setTimeout(() => {
      //   // remove(notificationsRef).then(() => {
      //   //   console.log("Notification removed successfully.");
      //   // }).catch((error) => {
      //   //   console.error("Error removing notification: ", error);
      //   // });
      // }, 1000);

    }
  });
};




// Hàm để lắng nghe thông báo
export const listenForNotificationsRemove = (userId, setNotification) => {
  const notificationsRef = ref(database, `notifications/${userId}`);
  // console.log(notificationsRef);



  onValue(notificationsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      setNotification(data);
      // console.log(data); // Kiểm tra dữ liệu nhận được
      setTimeout(() => {
        remove(notificationsRef).then(() => {
          console.log("Notification removed successfully.");
        }).catch((error) => {
          console.error("Error removing notification: ", error);
        });
      }, 1000);

    }
  });
};
