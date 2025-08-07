import ReactOnRails from "react-on-rails";

import Greeting from "../components/Greeting";
import Counter from "../components/Counter";
import Dashboard from "../components/Dashboard";

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Greeting,
  Counter,
  Dashboard,
});
