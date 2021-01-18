import React from 'react'

export default function useNetwork() {
    const [connected, setConnected] = React.useState(true);
    setInterval(() => {
        const checkOnlineStatus = async () => {
            try {
              const online = await fetch("my.jpg", {method: 'GET'});
              console.log(online.status);
               if (online.status >= 200 && online.status < 300) {
                //    setConnected(true);
               }else {
                // setConnected(false);
               }
            } catch (err) {
            //   setConnected(false);
              return false; // definitely offline
            }
          };

          checkOnlineStatus();
    }, 30000)
    return {
        connected,
    }
}
