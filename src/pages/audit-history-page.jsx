import AuditHistoryItem from "../components/audit-hisory-item";

const AuditHistoryPage = () => {
  const AuditHitoryData = [
    {
      title: "Admin",
      time: "Timing",
      description: "Deployed KiteTail (5c1fd07f in master) to production",
    },
    {
      title: "Admin",
      time: "Timing",
      description: "Deployed KiteTail (5c1fd07f in master) to production",
    },
    {
      title: "Admin",
      time: "Timing",
      description: "Deployed KiteTail (5c1fd07f in master) to production",
    },
    {
      title: "Admin",
      time: "Timing",
      description: "Deployed KiteTail (5c1fd07f in master) to production",
    },
    {
      title: "Admin",
      time: "Timing",
      description: "Deployed KiteTail (5c1fd07f in master) to production",
    },
    {
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },{
        title: "Admin",
        time: "Timing",
        description: "Deployed KiteTail (5c1fd07f in master) to production",
      },
  ];
  return (
    <>
      <div className="bg-white h-screen w-full overflow-hidden">
        <div className="px-4 mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Audit history page
          </div>
          <div className="max-h-[600px] overflow-auto custom-scroll">
            {AuditHitoryData.map((e) => (
              <AuditHistoryItem
                title={e.title}
                Description={e.description}
                time={e.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default AuditHistoryPage;
