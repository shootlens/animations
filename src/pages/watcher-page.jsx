import RzWatcher from "../components/rz-watcher";

const WatcherPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-3xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Watchers</div>
          <RzWatcher />
        </div>
      </div>
    </>
  );
};
export default WatcherPage;
