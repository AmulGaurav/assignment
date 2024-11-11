import * as Popover from "@radix-ui/react-popover";

import User from "./User";

export default function AnimatedPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="flex cursor-default items-center justify-center outline-none p-0.5 lg:p-0 w-10 lg:w-0 h-10 text-sm rounded-lg focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-label="Update dimensions"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[190px] rounded-[15px] bg-[#000000] text-white px-6 py-9 backdrop-blur-[30px] 
data-[state=open]:animate-slide-in-right
data-[state=closed]:animate-slide-out-left
duration-300 ease-out flex flex-col gap-y-9"
          sideOffset={10}
        >
          <User />

          <Popover.Close
            className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 hover:bg-gray-800 focus:outline-none"
            aria-label="Close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
