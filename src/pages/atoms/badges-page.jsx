import RzBadge from "../../components/atoms/rz-badge";

const BadgesPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Badges</div>
          <div className="flex justify-evenly py-9">
            <RzBadge
              title="Badge"
              textColor="#CF3626"
              backgroundColor="#CF362626"
            />
            <RzBadge
              title="Badge"
              textColor="#2AC769"
              backgroundColor="#2AC76926"
            />
            <RzBadge
              title="Badge"
              textColor="#8463F9"
              backgroundColor="#8463F926"
            />
            <RzBadge
              title="Badge"
              textColor="#F1C40F"
              backgroundColor="#F1C40F26"
            />
          </div>
          <div className="flex justify-evenly py-9">
            {/* <RzBadge
              title="Badge"
              textColor="green"
              backgroundColor="green"
             
            /> */}
            <RzBadge
              title="Badge"
              textColor="#CF3626"
              backgroundColor="#CF362626"
              borderColor="#CF3626"
            />
            <RzBadge
              title="Badges"
              textColor="#2AC769"
              backgroundColor="#2AC76926"
              borderColor="#2AC769"
            />
            <RzBadge
              title="Badge"
              textColor="#8463F9"
              backgroundColor="#8463F926"
              borderColor="#8463F9"
            />
            <RzBadge
              title="Badge"
              textColor="#F1C40F"
              backgroundColor="#F1C40F26"
              borderColor="#F1C40F"
            />
          </div>
          <div className="flex justify-evenly py-9">
            <RzBadge title="Badge" textColor="#CF3626" borderColor="#CF3626" />
            <RzBadge title="Badges" textColor="#2AC769" borderColor="#2AC769" />
            <RzBadge title="Badge" textColor="#8463F9" borderColor="#8463F9" />
            <RzBadge title="Badge" textColor="#F1C40F" borderColor="#F1C40F" />
          </div>
          <div className="flex justify-evenly py-9">
            <RzBadge title="Badge" textColor="white" backgroundColor="green" />
            <RzBadge title="Badge" textColor="white" backgroundColor="blue" />
            <RzBadge title="Badge" textColor="white" backgroundColor="purple" />
            <RzBadge title="Badge" textColor="white" backgroundColor="orange" />
          </div>
        </div>
      </div>
    </>
  );
};
export default BadgesPage;
