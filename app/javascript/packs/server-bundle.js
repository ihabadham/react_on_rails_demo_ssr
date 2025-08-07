import ReactOnRails from "react-on-rails";

import HelloWorld from "../bundles/HelloWorld/components/HelloWorldServer";
import Greeting from "../components/Greeting";
import Counter from "../components/Counter";
import Clock from "../components/Clock";
import UserGreeting from "../components/UserGreeting";
import TodoList from "../components/TodoList";
import ThemeToggle from "../components/ThemeToggle";
import Dashboard from "../components/Dashboard";
import Posts from "../components/Posts";

// This is how react_on_rails can see the components in the browser.
ReactOnRails.register({
  Dashboard,
});
