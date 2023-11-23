import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftNavigation from "./components/left-navigation";
import CheckBoxesAndTogglePage from "./pages/checkboxes-toggle-page";
import ButtonAnimationPage from "./pages/button-page.jsx";
import InputFieldPage from "./pages/input-field-page";
import ProgresserPage from "./pages/progresser-page";
import NotificationPage from "./pages/notification-page";
import DropdownPage from "./pages/dropdown-page";
import TablePage from "./pages/table-page.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <LeftNavigation />
        <div className="flex-1">
          <Routes>
            <Route path="/button-animation" element={<ButtonAnimationPage />} />
            <Route path="/checkboxes-toggle-page" element={<CheckBoxesAndTogglePage />}/>
            <Route path="/input-field-page" element={<InputFieldPage />} />
            <Route path="/progresser-page" element={<ProgresserPage />} />
            <Route path="/notification-page" element={<NotificationPage />} />
            <Route path="/dropdown-page" element={<DropdownPage />} />
            <Route path="/table-page" element={<TablePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
