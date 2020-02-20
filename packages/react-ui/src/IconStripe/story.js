import React from "react";
import { Custom, Document } from "../icons";
import { Section } from "../layout/Section";
import { IconStripe } from ".";

export default {
  component: IconStripe,
  title: "Components|IconStripe"
};

export const base = () => (
  <>
    <Section>
      <IconStripe icon={Custom}>
        This is a very basic component that simply puts an icon on the left of
        the children
      </IconStripe>
    </Section>
    <Section>
      <IconStripe icon={Document}>
        Check how it fits with another icon
      </IconStripe>
    </Section>
    <Section>
      <IconStripe centered icon={Document}>
        In some case, you may prefer that the icon gets centered with the text.
        <br />
        You can do that by providing a centered prop to the component.
        <br />
        Another line to be sure it is centered.
      </IconStripe>
    </Section>
  </>
);
