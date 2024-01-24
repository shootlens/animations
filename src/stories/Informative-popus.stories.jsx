import React from "react";
import "../index.css";
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import AlertIcon from "../assets/icons/alert-icon.svg";

import InformativeAlertPopupComponent from "../components/informative-popup-alert-component";
export default {
  title: "Components/InformativePopus",
};

export const AlertPopup = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <div className="max-w-xl">
        <InformativeAlertPopupComponent
          title="IT service team for Customer B is presently assigned config 2 as the default bot form, this action would override that to config 1 form."
          leadingIcon={<img src={AlertIcon} alt="alert-icon" />}
          borderColor="#E79B04"
        />
      </div>
    </div>
  </div>
);
AlertPopup.storyName = "Alert popup";

export const ErrorPopup = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <div className="max-w-5xl w-full">
        <InformativeAlertPopupComponent
          title="IT service team for Customer B is presently assigned config 2 as the default bot form, this action would override that to config 1 form."
          leadingIcon={
            <XCircleIcon className=" w-6 h-6 shrink-0 text-[#F87171]" />
          }
          backgroundColor="#FEF2F2"
          textColor="#991B1B"
          borderColor="#CF3626"
        />
      </div>
    </div>
  </div>
);
ErrorPopup.storyName = "Error popup";
export const SuccessPopup = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center max-w-6xl mx-auto">
      <InformativeAlertPopupComponent
        title="Successfully uploaded"
        leadingIcon={
          <CheckCircleIcon className=" w-6 h-6 shrink-0 text-[#34D399]" />
        }
        haveTrailing
        trailing={<XMarkIcon className="w-6 h-6 text-[#10B981]" />}
        backgroundColor="#ECFDF5"
        textColor="#065F46"
        titleStyle="font-medium leading-5"
      />
    </div>
  </div>
);
SuccessPopup.storyName = "Success popup";
export const AlertPopupWithCancelButton = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <div className="max-w-sm w-full">
        <InformativeAlertPopupComponent
          title="Deleting this form would delete the bot form <formname>, it's ticket mappings, and it's applicability across customers and service teams. All the teams and customers this form applies to be reset to default form."
          haveTrailing
          borderColor="#E79B04"
        />
      </div>
    </div>
  </div>
);
AlertPopupWithCancelButton.storyName = "Alert popup with cancel button";
export const SuccessPopupWithActions = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <InformativeAlertPopupComponent
        title="There were 2 errors with your submission"
        leadingIcon={
          <CheckCircleIcon className=" w-6 h-6 shrink-0 text-[#34D399]" />
        }
        trailing={<XMarkIcon className="w-6 h-6 text-[#10B981]" />}
        backgroundColor="#ECFDF5"
        textColor="#065F46"
        titleStyle="font-medium leading-5"
        description={
          <div>
            <div className="text-sm text-[#047857] not-italic font-normal leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              pariatur, ipsum similique veniam.
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-sm not-italic font-medium leading-5 text-[#065F46] p-2">
                View Status
              </div>
              <div className="text-sm not-italic font-medium leading-5 text-[#065F46] p-2">
                Dismiss
              </div>
            </div>
          </div>
        }
      />
    </div>
  </div>
);
SuccessPopupWithActions.storyName = "Success popup with actions";
export const AlertToast = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <div className="max-w-lg w-full">
        <InformativeAlertPopupComponent
          title="Successfully uploaded"
          leadingIcon={
            <CheckCircleIcon className=" w-6 h-6 shrink-0 text-[#FBBF24] " />
          }
          borderColor="#FBBF24"
          borderOnlyOnLeft
          backgroundColor="#faf1e1"
          textColor="#92400E"
          titleStyle="font-medium leading-5"
        />
      </div>
    </div>
  </div>
);
AlertToast.storyName = "Alert toast";

export const InformationPopup = () => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className=" w-full flex justify-center items-center">
      <InformativeAlertPopupComponent
        title="A new software update is available. See what’s new in version 2.0.4. "
        leadingIcon={
          <InformationCircleIcon className=" w-6 h-6 shrink-0 text-[#60A5FA]" />
        }
        haveTrailing
        trailing={
          <div className="flex items-center space-x-1">
            <div className="text-sm text-[#1D4ED8] not-italic font-medium leading-5">
              Details
            </div>
            <div>
              <ArrowRightIcon className="text-[#1D4ED8] w-3 h-3" />
            </div>
          </div>
        }
        backgroundColor="#EFF6FF"
        textColor="#1E40AF"
        titleStyle="font-medium leading-5"
      />
    </div>
  </div>
);
InformationPopup.storyName = "Information popup";
