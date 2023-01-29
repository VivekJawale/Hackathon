import React, { useEffect,useCallback, useMemo } from 'react'
import {useSocket} from "../providers/Socket";
import {usePeer} from "../providers/Peer";

const Rooms = () => {
    

    const {socket}=useSocket();

    
   const peer = useMemo(() => {
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
      }, [])

      const createoffer = async () => {
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
    
        return offer;
      };

    const handleUserAwait=useCallback(async(data)=>{
          const {emailId}=data;
          console.log("2nd user new user",emailId);
          const offer=await createoffer();
          socket.emit("call-user",{emailId,offer})
    },[socket,createoffer])

    const handleIncomingCall=(data)=>{
           const {from,offer}=data;;
           console.log("incoming call",from,offer)
    }

    useEffect(()=>{
        socket.on("user-joined",handleUserAwait);
        socket.on("incomming-call",handleIncomingCall)
    },[])

  return (
    <div>roomsdgzb</div>
  )
}

export default Rooms