import { CheckIcon } from "@heroicons/react/20/solid";
const RzStepper = () => {
  const steps = [
    {
      name: "Choose Issues",
      description: "5 issue selected",
      status: "complete",
    },
    {
      name: "Choose Operation",
      status: "complete",
    },
    {
      name: "Operation Details",
    },
    {
      name: "Confirm",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav aria-label="Progress">
        <ol className="overflow-hidden">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "pb-16" : "",
                "relative"
              )}
            >
              {step.status === "complete" ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute left-[12.5px] top-[40px] -ml-px  h-3/5 w-[3px] bg-[#D9D9D9] rounded-full"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-start"
                  >
                    <span className="flex h-9 items-center">
                      <span className="relative z-10 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#1E90FF]">
                        <CheckIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-black text-base not-italic font-normal">
                        {step.name}
                      </span>
                      <span className="text-[#617182] text-base not-italic font-normal">
                        {step.description}
                      </span>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute left-[12.5px] top-[40px] -ml-px  h-3/5 w-[3px] bg-[#D9D9D9] rounded-full"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="group relative flex items-start"
                  >
                    <span className="flex h-9 items-center" aria-hidden="true">
                      <span className="relative z-10 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#DBDDE0] ">
                        <CheckIcon
                          className="h-5 w-5 text-[#C4C4C4]"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                    <span className="ml-4 flex min-w-0 flex-col">
                      <span className="text-[#C4C4C4] text-base not-italic font-normal">
                        {step.name}
                      </span>
                      <span className="text-[#C4C4C4] text-base not-italic font-normal">
                        {step.description}
                      </span>
                    </span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
export default RzStepper;
