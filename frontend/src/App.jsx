import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./layout/Layout";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Assignment from "./pages/Assignment";
import Chat from "./pages/Chat";
import Progres from "./pages/Progres";
import Notifikasi from "./pages/Notifikasi";;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/kelas" element={<Kelas />} /> */}

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="learning" element={<Learning />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="submission" element={<Assignment />} />
          <Route path="diskusi" element={<Chat />} />
          <Route path="progres" element={<Progres />} />
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
