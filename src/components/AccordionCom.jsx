import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AccordionCom = () => {
  return (
    <Accordion type="single" collapsible className="flex flex-col w-full gap-5">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Praesent Finibus Dictum Nisl Sit Amet Vulputate.
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCom;
