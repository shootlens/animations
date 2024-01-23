import React from "react";
import Card from "../components/rz-card";
import {
  UserGroupIcon,
  PencilSquareIcon,
  TrashIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import "../index.css";

const story = {
  title: "Components/Card",
  component: Card,
};

export default story;

const Template = (args) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Card
      title="Card Title"
      titleIcon={<UserGroupIcon className="w-5 h-5 text-gray-500" />}
      description="This release focuses on visual improvement of existing 
    cards in the password reset flow; and introduces a new flow to automate 
    O365 license allocation"
      {...args}
    />
  </div>
);

export const Default = Template.bind({});
export const CardWithActions = Template.bind({});
const ActionIcons = [
  {
    icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
    onClick: "",
  },
  {
    icon: <PencilSquareIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
    onClick: "",
  },
  {
    icon: <TrashIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
    onClick: "",
  },
];
CardWithActions.args = {
  showActions: true,
  ActionIconsList: ActionIcons,
};

export const CardWithUserAvater = Template.bind({});
CardWithUserAvater.args = {
  showUsrAvatar: true,
};

export const WorkflowCard = Template.bind({});
WorkflowCard.args = {
  workflowTitle: "Workflow Card",
  workflowCard: true,
  workFlowIcon1: <CodeBracketIcon className="text-gray-700 w-5 h-5" />,
  workFlowIcon2: <CodeBracketIcon className="text-gray-700 w-5 h-5" />,
  workflowActionsList: ActionIcons,
};

export const ActiveSubscription = Template.bind({});
ActiveSubscription.args = {
  showActions: true,
  ActionIconsList: ActionIcons,
  showActiveSubscriptions: true,
};
