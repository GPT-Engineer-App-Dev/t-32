import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SharedLayout from "./components/SharedLayout.jsx";
import { ToastProvider } from "sonner";

function App() {
  return (
    <ToastProvider>
      <SharedLayout>
        <Router>
          <Routes>
              <Route index element={<Index />} />
          </Routes>
        </Router>
      </SharedLayout>
    </ToastProvider>
  );
}

export default App;