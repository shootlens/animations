import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import AlertIcon from "../assets/icons/alert-icon.svg";
import InformativeAlertPopupComponent from "../components/informative-popup-alert-component";
const InformativePopusPage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto custom-scroll">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Informative Card Popups
          </div>
          <div className="flex flex-col space-y-9">
            <div className="max-w-xl">
              <InformativeAlertPopupComponent
                title="IT service team for Customer B is presently assigned config 2 as the default bot form, this action would override that to config 1 form."
                leadingIcon={<img src={AlertIcon} alt="alert-icon" />}
                borderColor="#E79B04"
              />
            </div>

            <div className="max-w-5xl">
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
            <div>
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
            <div className="max-w-sm">
              <InformativeAlertPopupComponent
                title="Deleting this form would delete the bot form <formname>, it's ticket mappings, and it's applicability across customers and service teams. All the teams and customers this form applies to be reset to default form."
                haveTrailing
                borderColor="#E79B04"
              />
            </div>
            <div>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid pariatur, ipsum similique veniam.
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

            <div className="max-w-lg">
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

            <div>
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
        </div>
      </div>
    </>
  );
};
export default InformativePopusPage;
