import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftNavigation from "./components/common/left-navigation";
import CheckBoxesAndTogglePage from "./pages/checkboxes-toggle-page";
import ButtonAnimationPage from "./pages/button-page.jsx";
import InputFieldPage from "./pages/input-field-page";
import ProgresserPage from "./pages/progresser-page";
import NotificationPage from "./pages/notification-page";
import DropdownPage from "./pages/dropdown-page";
import TablePage from "./pages/table-page.jsx";
import CardPage from "./pages/card-page.jsx";
import RzTableComponent from "./pages/table-component-page.jsx";
import HeaderPage from "./pages/header-page.jsx";
import FooterPage from "./pages/footer-page.jsx";
import TicketRequesterProfilePage from "./pages/ticket-requester-profile-page.jsx";
import BreadcrumbPage from "./pages/breadcrumb-page.jsx";
import SearchPage from "./pages/search-page.jsx";
import PopoverPage from "./pages/popover-page.jsx";
import MulticolSortPage from "./pages/multicolumn-sort-page.jsx";
import ListingPage from "./pages/listing-page.jsx";
import AccordionPage from "./pages/accordion-page.jsx";
import PulseAnimationButtonPage from "./pages/pulse-animation-page.jsx";
import WatcherPage from "./pages/watcher-page.jsx";
import MulticolFilterPage from "./pages/multicolumn-filter-page.jsx";

function App() {
  return (
    <Router>
      <div className="flex overflow-hidden">
        <LeftNavigation />
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/button-animation" element={<ButtonAnimationPage />} />
            <Route
              path="/checkboxes-toggle-page"
              element={<CheckBoxesAndTogglePage />}
            />
            <Route path="/input-field-page" element={<InputFieldPage />} />
            <Route path="/progresser-page" element={<ProgresserPage />} />
            <Route path="/notification-page" element={<NotificationPage />} />
            <Route path="/dropdown-page" element={<DropdownPage />} />
            <Route path="/table-page" element={<TablePage />} />
            <Route path="/card-page" element={<CardPage />} />
            <Route
              path="/table-component-page"
              element={<RzTableComponent />}
            />
            <Route path="/header-page" element={<HeaderPage />} />
            <Route path="/footer-page" element={<FooterPage />} />
            <Route
              path="/ticket-requester-profile-page"
              element={<TicketRequesterProfilePage />}
            />
            <Route path="/breadcrumb-page" element={<BreadcrumbPage />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="/popover-page" element={<PopoverPage />} />
            <Route
              path="/multicolumn-sort-page"
              element={<MulticolSortPage />}
            />
            <Route path="/listing-page" element={<ListingPage />} />
            <Route path="/accordion-page" element={<AccordionPage />} />
            <Route
              path="/pulse-animation-button-page"
              element={<PulseAnimationButtonPage />}
            />
            <Route path="/watcher-page" element={<WatcherPage />} />
            <Route
              path="/multicolumn-filter-page"
              element={<MulticolFilterPage />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
