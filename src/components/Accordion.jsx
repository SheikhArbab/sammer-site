import React from 'react'
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

const AccordionC = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What is Unorthodox's approach to creating custom AI solutions?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          Unorthodox focuses on understanding the specific needs of your business, before designing and implementing bespoke AI solutions to enhance efficiency and productivity.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>How do Unorthodox's AI chatbots improve customer interactions?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          Our AI chatbots offer immediate, 24/7 responses, handling customer queries efficiently, which improves customer experience and reduces support costs.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What kind of tasks can be automated using Unorthodox's intelligent automation solutions?
          </Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          Our solutions can automate a wide range of tasks, from data processing to customer service, reducing manual errors and saving valuable time.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export default AccordionC 
