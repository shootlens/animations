import RzBreadCrumb from "../components/rz-breadcrumb";

const BreadcrumbPage = () => {
  const breadcrumbItems = ["Home", "Category", "Subcategory", "Current Page"];
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Breadcrumb</div>
          <RzBreadCrumb items={breadcrumbItems} navigationArrow={true} />
        </div>
      </div>
    </>
  );
};
export default BreadcrumbPage;
