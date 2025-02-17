"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = ({ children, ...props }: AccordionPrimitive.AccordionSingleProps) => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <AccordionPrimitive.Root
      {...props}
      onValueChange={(value:any) => setOpenItem(value || null)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { openItem } as any) // Ensure type safety
          : child
      )}
    </AccordionPrimitive.Root>
  );
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { openItem?: string | null }
>(({ className, openItem, ...props }, ref) => {
  const isOpen = openItem === props.value; // Check if this item is open
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    >
      {React.Children.map(props.children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isOpen } as any) // Ensure type safety
          : child
      )}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        " flex flex-1 items-center justify-between py-4 text-xl font-semibold transition-all hover:underline text-right"
      )}
      {...props}
    >
      {children}
      {/* Show Plus when closed, Minus when open */}
      {isOpen ? (
        <Minus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" />
      ) : (
        <Plus className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base font-normal data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
