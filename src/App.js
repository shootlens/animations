import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftNavigation from "./components/common/left-navigation";
import CheckBoxesAndTogglePage from "./pages/checkboxes-toggle-page";
import ButtonAnimationPage from "./pages/button-page.jsx";
import InputFieldAnimationPage from "./pages/input-field-animation-page.jsx";
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
import LiveChatCardPage from "./pages/live-chat-card-page.jsx";
import FileUploadPage from "./pages/file-upload-page.jsx";
import DropdownComponentPage from "./pages/dropdown-component-page.jsx";
import SelectWithCreateAndEditComponent from "./pages/select-with-create-and-edit.jsx";
import SelectWithSearchAndAddComponent from "./pages/select-with-search-and-add.jsx";
import ButtonPageAtoms from "./pages/atoms/button-page-atoms.jsx";
import CarouselPage from "./pages/carousel-page.jsx";
import InputFieldPage from "./pages/atoms/input-field-page.jsx";
import ToggleAndCheckboxPage from "./pages/atoms/toggle-checkbox-page.jsx";
import BadgesPage from "./pages/atoms/badges-page.jsx";
import SliderPage from "./pages/atoms/slider-page.jsx";
import ProgressBarPage from "./pages/atoms/progressbar-page.jsx";
import ButtonGroupPage from "./pages/atoms/button-group-page.jsx";
import DividerPage from "./pages/atoms/divider-page.jsx";
import ProfilePicturePlaceholderPage from "./pages/atoms/profile-picture-placeholder-page.jsx";
import StepperPage from "./pages/atoms/stepper-page.jsx";
import GroupedTablePage from "./pages/grouped-table-page.jsx";
import DraggableTablePage from "./pages/draggable-table-page.jsx";

function App() {
  return (
    <Router>
      <div className="flex overflow-hidden -z-20">
        <LeftNavigation />
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/button-animation" element={<ButtonAnimationPage />} />
            <Route
              path="/checkboxes-toggle-page"
              element={<CheckBoxesAndTogglePage />}
            />
            <Route
              path="/input-field-animation-page"
              element={<InputFieldAnimationPage />}
            />
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
            <Route path="/live-chat-card-page" element={<LiveChatCardPage />} />
            <Route path="/file-upload-page" element={<FileUploadPage />} />

            <Route
              path="/dropdown-component-page"
              element={<DropdownComponentPage />}
            />
            <Route
              path="/select-with-create-and-edit"
              element={<SelectWithCreateAndEditComponent />}
            />
            <Route
              path="/select-with-search-and-add"
              element={<SelectWithSearchAndAddComponent />}
            />
            <Route path="/button-page-atoms" element={<ButtonPageAtoms />} />
            <Route path="/carousel-page" element={<CarouselPage />} />
            <Route path="/input-field-page" element={<InputFieldPage />} />
            <Route
              path="/toggle-checkbox-page"
              element={<ToggleAndCheckboxPage />}
            />
            <Route path="/badges-page" element={<BadgesPage />} />
            <Route path="/slider-page" element={<SliderPage />} />
            <Route path="/progressbar-page" element={<ProgressBarPage />} />
            <Route path="/button-group-page" element={<ButtonGroupPage />} />
            <Route path="/divider-page" element={<DividerPage />} />
            <Route
              path="/profile-picture-placeholder-page"
              element={<ProfilePicturePlaceholderPage />}
            />
            <Route path="/stepper-page" element={<StepperPage />} />
            <Route path="/grouped-table-page" element={<GroupedTablePage />} />
            <Route path="/draggable-table-page" element={<DraggableTablePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
