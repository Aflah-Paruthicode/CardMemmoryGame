
 import React, { useEffect,useContext , useState } from 'react'
import { socket } from '../socket';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/useAppContext';
import NameModal from '../components/NameModal';
import RoomModal from '../components/RoomModal';
 
 const Lobby = () => {

  const [gameState, setGameState] = useState<"LOBBY" | "PLAYING">("LOBBY");
  const [roomData, setRoomData] = useState({ name: "zoro", room: "12323" });
  const [showRoomInput, setShowRoomInput] = useState(false);
  const {name} = useAppContext();

  const joinGame = (userName: string, roomId: string) => {
    setRoomData({ name: userName, room: roomId });
    socket.emit("join_room", { userName, roomId });
    setGameState("PLAYING"); // For now, just jump in
  };

    useEffect(() => {
    socket.emit("join_room", { roomData, userName: "Zoro" });
    socket.on("player_list_updated", (players) => {
        console.log("Current players in room:", players);
        // If players.length === 2, show the "Start Game" button
    });
}, [roomData]);

   return (
     <div className='app justify-center relative'>

        {name ? (<div className='w-full flex flex-col items-center'>
            <div className=' w-1/2 flex justify-center' >
            <div className='flex flex-col gap-8'>
                <Link to="singleplayer" className='reset-btn w-64 text-center'>Single Player <p>👤</p></Link>
                <button onClick={() => setShowRoomInput(true)} className='reset-btn'>Multiplayer <p>👥</p></button>
            </div>
            {showRoomInput && <RoomModal closeInput={() => setShowRoomInput(false)} />}
        </div>

        <div className='  w-[95%] flex justify-between absolute bottom-10'>
            <Link to="" className='reset-btn   '>Join Room 🆚</Link>
            <Link to="" className='reset-btn'>Leaderboard 🏆</Link>
        </div>
        </div>) :(<NameModal />)}
     </div>
   )
 }
 
 export default Lobby



