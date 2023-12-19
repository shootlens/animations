import RzCheckBox from "../animation-components/rz-checkbox";
import RzToggle from "../components/atoms/rz-toggle";

const CheckBoxesAndToggle = () => {
  const code = `
    import RzCheckBox from "../components/checkbox";

    <RzCheckBox
     checked={false}
     label="Remember me"
     onClick={() => console.log("User Checked")}
     />
  `;
  const toggleCode = `
    <RzToggle
     onToggle={() => {
     console.log("Toggled")}}
     initialToggled={true}
    />
  `;

  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9 ">
          <div className="text-lg font-bold text-gray-700 py-9   ">
            CheckBoxs and Toggles
          </div>
          <div className="inline-flex space-x-9 items-center mb-8">
            <RzCheckBox checked={false} label="Remember me" />
            <RzCheckBox checked={true} label="Remember me" />
          </div>

          <div className="bg-gray-700 w-full rounded-md text-gray-200">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
          <div className="mt-20 mb-9 flex space-x-9">
            <RzToggle
              onToggle={() => {
                console.log("toggled correctly");
              }}
            />
            <RzToggle
              onToggle={() => {
                console.log("toggled correctly");
              }}
              initialToggled={true}
            />
          </div>
          <div>
            <div className="bg-gray-700 w-full rounded-md text-gray-200 mb-9">
              <pre>
                <code>{toggleCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckBoxesAndToggle;
