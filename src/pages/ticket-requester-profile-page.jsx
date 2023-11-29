import TicketRequesterProfile from "../components/ticket-requester-profile";

const TicketRequesterProfilePage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Ticekt Requester Profile
          </div>
          <TicketRequesterProfile />
        </div>
      </div>
    </>
  );
};

export default TicketRequesterProfilePage;
