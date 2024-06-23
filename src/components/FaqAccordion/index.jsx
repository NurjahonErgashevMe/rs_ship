import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function FaqAccordion({ question, answer }) {
  return (
    <>
      <Accordion allowZeroExpanded className="accordion" >
        <AccordionItem className="accordion__item">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion__button">
              {question}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion__panel">
            {answer}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FaqAccordion;
