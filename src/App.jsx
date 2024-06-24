import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <Toaster>
      <SharedLayout>
        <Router>
          <Routes>
              <Route index element={<Index />} />
          </Routes>
        </Router>
      </SharedLayout>
    </Toaster>
  );
}

export default App;