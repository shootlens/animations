import RzBadge from "../../components/atoms/rz-badge";

const BadgesPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Input field
          </div>
          <div className="flex justify-evenly py-9">
            <RzBadge title="badge" textColor="white" backgroundColor="green" />
            <RzBadge
              title="badge"
              textColor="#CF3626"
              backgroundColor="#CF362626"
            />
            <RzBadge
              title="badge"
              textColor="#2AC769"
              backgroundColor="#2AC76926"
            />
            <RzBadge
              title="badge"
              textColor="#8463F9"
              backgroundColor="#8463F926"
            />
            <RzBadge
              title="badge"
              textColor="#F1C40F"
              backgroundColor="#F1C40F26"
            />
          </div>
          <div className="flex justify-evenly py-9">
            <RzBadge
              title="badge"
              textColor="green"
              backgroundColor="green"
              normalBadge={true}
            />
            <RzBadge
              title="badge"
              textColor="#CF3626"
              backgroundColor="#CF362626"
              normalBadge={true}
            />
            <RzBadge
              title="badge"
              textColor="#2AC769"
              backgroundColor="#2AC76926"
              normalBadge={true}
            />
            <RzBadge
              title="badge"
              textColor="#8463F9"
              backgroundColor="#8463F926"
              normalBadge={true}
            />
            <RzBadge
              title="badge"
              textColor="#F1C40F"
              backgroundColor="#F1C40F26"
              normalBadge={true}
            />
          </div>
          <div className="flex justify-evenly py-9">
            <RzBadge
              title="badge"
              textColor="white"
              backgroundColor="green"
              badgeRadius={100}
            />
            <RzBadge
              title="badge"
              textColor="#CF3626"
              backgroundColor="#CF362626"
              badgeRadius={100}
            />
            <RzBadge
              title="badge"
              textColor="#2AC769"
              backgroundColor="#2AC76926"
              badgeRadius={100}
            />
            <RzBadge
              title="badge"
              textColor="#8463F9"
              backgroundColor="#8463F926"
              badgeRadius={100}
            />
            <RzBadge
              title="badge"
              textColor="#F1C40F"
              backgroundColor="#F1C40F26"
              badgeRadius={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default BadgesPage;
