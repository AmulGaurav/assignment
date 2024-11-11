import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

const PopoverComponent = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="w-full h-full flex cursor-default items-center justify-between outline-none"
          aria-label="Update dimensions"
        >
          <Image
            src={"/tabler-icon-user-filled.png"}
            quality={100}
            width={15}
            height={10}
            alt="user icon"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-[147px] rounded-[15px] bg-[#000000] text-white p-5 backdrop-blur-[30px] will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={10}
        >
          <div className="space-y-8">
            <div>Profile</div>
            <div>Dashboard</div>
            <div>My Store</div>
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverComponent;
