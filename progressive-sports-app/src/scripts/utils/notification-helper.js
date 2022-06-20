import { async } from "@firebase/util";

const NotificationHelper = {
    sendNotification() {
      if (!this._checkAvailability()) {
        console.log('Notification not supported in this browser');
        return;
      }
   
      if (!this._checkPermission()) {
        console.log('User did not yet granted permission');
        this._requestPermission();
        return;
      }
   
      //this._showNotification();
    },
   
    _checkAvailability() {
      return !!('Notification' in window);
    },
   
    _checkPermission() {
      return Notification.permission === 'granted';
    },
   
    async _requestPermission() {
      const status = await Notification.requestPermission();
   
      if (status === 'denied') {
        console.log('Notification Denied');
      }
   
      if (status === 'default') {
        console.log('Permission closed');
      }
    },
   
    async _showNotification() {
      const serviceWorkerRegistration = await navigator.serviceWorker.ready;
      serviceWorkerRegistration.showNotification( "New Massage from progressive sport", {
        body: "Lets see the next match!",
        icon: "icons/icon.png"
    });
        serviceWorkerRegistration.onclick = () => {
            window.location.href = "http://localhost:5000/#/game-page";
        };
    },
  };
   
  export default NotificationHelper;