import {
  ChevronDoubleUpIcon,
  ChevronUpDownIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
  PaperClipIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const RzTableComponent = () => {
  const people = [
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    }, {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    }, {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    }, {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    }, {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <>
      <div className="max-w-6xl border border-gray-400 rounded-md mt-9 overflow-auto mx-auto max-h-fit">
        <table className=" p-9">
          <thead className=" pt-[14px] pb-[25px] bg-gray-100">
            <tr>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic items-center pt-[14px] pb-[25px]"
              >
                <input type="checkbox" className="h-4 w-4" />
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px] flex items-center"
              >
                <div className="flex items-center">
                  PRIORITY
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex">
                  <div className="flex items-center">
                    TICKET
                    <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                  </div>
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  SUBJECT
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  REQUESTED FOR
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  STATUS
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  QUEUE
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  ASSIGNED TO
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className=" whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  RESOLUTION SLA [HH:MM]
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className=" whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  RESPONSE SLA [HH:MM]
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
              <th
                scope="col"
                className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
              >
                <div className="flex items-center">
                  Actions
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr className="border-b border-[#E2E2E2]">
                <td className="text-start px-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4" />
                </td>
                <td className="text-start px-4 whitespace-nowrap">
                  <div>
                    <ChevronDoubleUpIcon className="w-[31px] h-[31px] text-green-8 bg-red-50 rounded-full p-2" />
                  </div>
                </td>
                <td className="text-start px-4 whitespace-nowrap">PMT-008</td>
                <td className="text-start px-4 whitespace-nowrap">
                  Access request for external storage device
                </td>
                <td className="text-start px-4 flex items-center my-[9px]">
                  <div className="h-9 w-9 mr-[10px] rounded-full bg-green-100 flex text-center justify-center items-center">
                    A
                    {/* <img
                      className="h-9 w-9 rounded-full "
                      src={person.image}
                      alt=""
                    /> */}
                  </div>
                  <div className="whitespace-nowrap">{person.name}</div>
                </td>
                <td className="text-start  px-4">
                  <div className="px-[5px] py-[2px] shrink-0 text-sm not-italic font-normal bg-[#F7E9CE] text-center rounded-[4px] text-[#E79B04]">
                    Assign
                  </div>
                </td>
                <td className="text-start px-4  ">
                  <div className="px-[5px] py-[2px] shrink-0 text-sm not-italic font-normal bg-[#2AC76933] text-center rounded-[4px] text-[#41A1A4] ">
                    Default
                  </div>
                </td>
                <td className="text-start  px-4">
                  <div className="px-[5px] py-[2px] shrink-0 text-sm not-italic font-normal bg-[#C4C4C433] text-center rounded-[4px] text-[#617182] ">
                    Admin user
                  </div>
                </td>
                <td className="text-start whitespace-nowrap px-4">
                  <div className="flex items-center">
                    <ArrowTrendingDownIcon className="h-5 w-5 mx-2 text-red-600 font-medium" />
                    Overdue -8:0
                  </div>
                </td>
                <td className="text-start whitespace-nowrap px-4">
                  <div className="flex items-center">
                    <ArrowTrendingUpIcon className="h-5 w-5 mx-2 text-green-600 font-medium" />
                    Met
                  </div>
                </td>
                <td className="text-start px-4 ">
                  <div className="flex">
                    <TrashIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />

                    <PencilSquareIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                    <EyeIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                    <ClipboardDocumentIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RzTableComponent;
