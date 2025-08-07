import ReactOnRails from "react-on-rails";

import Greeting from "../components/Greeting.server";
import Counter from "../components/Counter.client";

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Greeting,
  Counter,
});
