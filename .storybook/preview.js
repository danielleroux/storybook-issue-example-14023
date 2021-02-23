
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { prepareForInline } from '@storybook/addon-docs/angular/inline';

import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    inlineStories: true,
    prepareForInline,
  },
}
