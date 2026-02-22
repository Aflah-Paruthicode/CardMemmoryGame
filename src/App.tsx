import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePlayerGame from "./pages/SinglePlayerGame";
import Navbar from "./components/Navbar";
import Lobby from "./pages/Lobby";
import Footer from "./components/Footer";
import { useState } from "react";
import { createContext } from "react";   
import { AppContext } from "./context/appContext";


type AppContextType = {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
};



function App() {  
  
  const [name, setName] = useState<string | null>(null);   
  return (
    <AppContext.Provider value={{name,setName}}>
      <Router>
        <Navbar HighScore={null} />   
        <Routes>
          <Route path="/" element={<Lobby />} />

          <Route path="/singleplayer" element={<SinglePlayerGame />} />

          {/* The Multiplayer Lobby (Waiting for friend) */}
          {/* <Route path="/lobby/:roomId" element={<MultiplayerLobby />} /> */}

          {/* The Multiplayer Arena (The actual match) */}
          {/* <Route path="/multiplayer/:roomId" element={<MultiplayerArena />} /> */}

          {/* Global Leaderboard */}
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
