import React, { useEffect, useMemo } from "react";

const peercontext = React.createContext({});

export const usePeer = () => {
  React.useContext(peercontext);
};

export const PeerProvider = (props:any) => {
 useEffect(()=>{ const peer = useMemo(() => {
    new RTCPeerConnection({
      iceServers: [
        {
          urls: [
            "stun:stun.l.google.com:19302",
            "stun:global.stun.twilio.com:3478",
          ],
        },
      ],
    });
  }, []);})

  const createoffer = async () => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);

    return offer;
  };

  return (
    <peercontext.Provider value={{ peer, createoffer }}>
      {props.children}
    </peercontext.Provider>
  );
};
