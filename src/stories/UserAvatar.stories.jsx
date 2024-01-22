import React from "react";
import Avatar from "../components/rz-avatar";
import "../index.css";

const story = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    isSingleLetter: {
      control: { type: "boolean" },
    },
    customRadius: {
      options: [40, 50, 70],
      control: { type: "select" },
    },
  },
};

export default story;

const Template = (args) => (
  <div className="flex justify-center items-center w-full">
    <Avatar firstName="Hello" customRadius={32} {...args} />
  </div>
);

export const Default = Template.bind({});

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  imgUrl:
    "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
};
