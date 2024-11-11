import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

// Define interfaces for props
interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Item> {
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Trigger> {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof Accordion.Content> {
  className?: string;
  children: React.ReactNode;
}

const AccordionComponent = () => (
  <Accordion.Root
    className="w-full space-y-2 sm:space-y-4 bg-[#181818] shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>
        How much does it cost to set up a store?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        What kind of digital products can I sell?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        Do I need technical skills to use the platform?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>
        Is there a limit to the number of products I can list?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger>
        How do I receive payments for my sales?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger>
        Can I sell internationally on this marketplace?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger>
        What support and resources are available for sellers?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger>
        Is there a review process for uploaded products?
      </AccordionTrigger>
      <AccordionContent>
        No, not at all! Our platform is designed with user-friendliness in mind.
        You can easily navigate and set up your store without any technical
        expertise. It&#39;s as simple as a few clicks to get started!
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames("overflow-hidden rounded-2xl", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white text-black px-5 py-[14px] text-h5-mobile sm:text-h4-mobile font-bold border-b border-black border-opacity-10 leading-none outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <PlusIcon
        className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:hidden"
        width={20}
        height={20}
        aria-hidden
      />
      <MinusIcon
        className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=closed]:hidden"
        width={20}
        height={20}
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "overflow-hidden text-black bg-white text-body2-mobile sm:text-body1-mobile font-medium sm:font-bold data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent";

export default AccordionComponent;
