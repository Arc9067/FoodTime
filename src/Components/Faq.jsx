import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Questions from "./Questions";
const Faq = () => {
  return (
    <section className="py-[50px] w-full">
      <div className="container">
        <div className="w-full">
          <Accordion
            draggable="true"
            className="grid md:grd-cols-2 w-full gap-10"
          >
            {Questions.map((tt) => {
              const { question, answer } = tt;
              return (
                <AccordionItem className="border p-3 rounded-xl">
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex justify-between font-medium">
                      {question}
                      <AiOutlinePlus />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="mt-4">
                    <p>{answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
