import * as Avatar from "@radix-ui/react-avatar";

const AvatarComponent = () => {
  return (
    <Avatar.Root className="inline-flex size-[60px] select-none items-center justify-center overflow-hidden rounded-[368px] bg-blackA1 align-middle">
      <Avatar.Image
        className="size-full rounded-[inherit] object-cover"
        src="/influencer1.png?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback
        className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11"
        delayMs={600}
      >
        Minka Kelly
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarComponent;
