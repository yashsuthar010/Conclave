import "./App.css";
import Home2 from "./pages/Home2";
import EditorPage from "./pages/EditorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./components/Nav";
import Tutorial from "./pages/Tutorial";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              theme: {
                primary: "blue",
              },
            },
          }}
        ></Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />}></Route>
          <Route path="/tutorial" element={<Tutorial />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
