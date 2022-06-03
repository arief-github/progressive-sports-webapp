import NotificationHelper from "./notification-helper";
import CONFIG from "./config";
const WebSocketInitiator = {
    init(url) {
      const webSocket = new WebSocket(url);
      webSocket.onmessage = this._onMessageHandler;
    },
   
    _onMessageHandler() {
        NotificationHelper.sendNotification()
      },
    };
     
    export default WebSocketInitiator;