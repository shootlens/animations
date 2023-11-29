import RzCard from "../components/rz-card";
import {
  UserGroupIcon,
  PencilSquareIcon,
  DeviceTabletIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import RzEmptyStateCard from "../components/rz-empty-state-card";

const CardPage = () => {
  const normalCard = `  
  <RzCard
    title="Uploaded Documents"
    titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
    description="This release focuses on visual improvement of existing 
    cards in the password reset flow; and introduces a new flow to automate 
    O365 license allocation"
  />`;
  const normalCardWithActions = ` 
  const iconsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    }, ...
  ];
  

  <RzCard
    title="Uploaded Documents"
    titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
    description="This release focuses on visual improvement of existing 
    cards in the password reset flow; and introduces a new flow to automate 
    O365 license allocation"
    showActions={true}
    iconsList={iconsList}
  />`;
  const normalCardWithSubscriptions = ` 
  const iconsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    }, ...
  ];
  

  <RzCard
    title="Uploaded Documents"
    titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
    description="This release focuses on visual improvement of existing 
    cards in the password reset flow; and introduces a new flow to automate 
    O365 license allocation"
    showActiveSubscriptions={true}
    showActions={true}
    iconsList={iconsList}
  />`;

  const normalCardWithAvatar = ` 
  const iconsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    }, ...
  ];
  

  <RzCard
    title="Uploaded Documents"
    titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
    description="This release focuses on visual improvement of existing 
    cards in the password reset flow; and introduces a new flow to automate 
    O365 license allocation"
    showActiveSubscriptions={true}
    showActions={true}
    iconsList={iconsList}
    showAvatar={true}
  />`;

  const workflowCard = ` 
    const iconsList = [
      {
        icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
        onClick: handleIconClick,
       }, ...
     ];
  
     <RzCard
      workflowTitle="Workflow Card"
      workflowCard={true}
      workFlowIcon1={
        <CodeBracketIcon className="text-gray-700 w-5 h-5" />
      }
      workFlowIcon2={
        <CodeBracketIcon className="text-gray-700 w-5 h-5" />
      }
      workflowActionsList={workflowActionsList}
    />`;
  const emptyStateCard = ` 
     <RzEmptyStateCard
       title="Create a new database"
        databaseCard={true}
     />`;
  const surveyCard = ` 
     <RzEmptyStateCard
      title="Create a new database"
      databaseCard={true}
     />`;

  const handleIconClick1 = () => {
    console.log("Icon clicked!");
  };

  const handleIconClick = () => {
    console.log("Icon clicked!");
  };

  const iconsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <PencilSquareIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <DeviceTabletIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick1,
    },
  ];
  const workflowActionsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <PencilSquareIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <DeviceTabletIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick1,
    },
  ];

  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className="w-full max-w-5xl mx-auto my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Card</div>
          <div className="flex justify-between pb-6">
            <RzCard
              title="Uploaded Documents"
              titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
              description="This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation"
            />
            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto px-4 mx-6">
              <pre>
                <code>{normalCard}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6">
            <RzCard
              title="Uploaded Documents"
              titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
              description="This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation"
              showActions={true}
              iconsList={iconsList}
            />
            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[230px] px-4 mx-6">
              <pre>
                <code>{normalCardWithActions}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6">
            <RzCard
              title="Uploaded Documents"
              titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
              description="This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation"
              showUsrAvatar={true}
              showActions={true}
              iconsList={iconsList}
            />
            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[230px] px-4 mx-6">
              <pre>
                <code>{normalCardWithAvatar}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6">
            <RzCard
              title="Uploaded Documents"
              titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
              description="This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation"
              showActiveSubscriptions={true}
              showActions={true}
              iconsList={iconsList}
            />
            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[230px] px-4 mx-6">
              <pre>
                <code>{normalCardWithSubscriptions}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6">
            <RzCard
              workflowTitle="Workflow Card"
              workFlowIcon1={
                <CodeBracketIcon className="text-gray-700 w-5 h-5" />
              }
              workFlowIcon2={
                <CodeBracketIcon className="text-gray-700 w-5 h-5" />
              }
              workflowCard={true}
              workflowActionsList={workflowActionsList}
            />

            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[190px] px-4 mx-6">
              <pre>
                <code>{workflowCard}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6 mx-4">
            <RzEmptyStateCard
              title="Create a new database"
              databaseCard={true}
            />
            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[190px] px-4 mx-8">
              <pre>
                <code>{emptyStateCard}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-between pb-6 mx-4">
            <RzEmptyStateCard title="Create a new database" />

            <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-5xl overflow-auto max-h-[190px] px-4 mx-8">
              <pre>
                <code>{surveyCard}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
