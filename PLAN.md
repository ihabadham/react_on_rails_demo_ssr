# React on Rails Demo – Build Plan

A concise checklist to spin up a Rails 7 app that demonstrates **React Server Components** with **server-side rendering (SSR)** via `react_on_rails`.

---

## 1. Prerequisites

```bash
# Switch to a tested Node version (React RSC works on ≥18; 20 is proven)
nvm use 20  # or nvm install 20 && nvm use 20

# Ruby ≥3.1 with Bundler
ruby -v
bundler -v
```

## 2. Create the Rails 7 app (skip default JS)

```bash
rails new . --skip-javascript
```

## 3. Add Shakapacker and React on Rails gems

```bash
bundle add react_on_rails --strict
bundle add shakapacker --strict
```

## 4. Install Shakapacker

```bash
bundle exec rails shakapacker:install
```

Commit the changes to avoid errors:

```bash
git commit -am "Add Shakapacker and react_on_rails gems"
```

## 5. Install React on Rails boilerplate

```bash
bundle exec rails generate react_on_rails:install
# This generator will:
# • Add Webpack config
# • Create app/javascript/ packs & components
# • Install npm packages (React 18 etc.)
```

If the generator doesn't auto-install JS packages:

```bash
npm install
```

## 6. Set environment variable for Node.js runtime

```bash
# Add to .env file or export in shell
export EXECJS_RUNTIME=Node
```

## 7. Generate a controller & route

```bash
rails generate controller Home index
```

```ruby
# config/routes.rb
root "home#index"
```

## 8. Create React components

Directory structure after this step:

```
app/javascript/components/
  Greeting.server.jsx    # server component
  Counter.client.jsx     # client component
```

`Greeting.server.jsx` (shows server timestamp & nests client component):

```jsx
export default function Greeting() {
  return (
    <div>
      <h1>Hello from the server at {new Date().toLocaleTimeString()}</h1>
      <Counter />
    </div>
  );
}
```

`Counter.client.jsx` (hydrated on client):

```jsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicks: {count}</button>;
}
```

## 9. Wire it into the Rails view

`app/views/home/index.html.erb`:

```erb
<%= react_component("Greeting", {}, prerender: true) %>
```

## 10. Enable streaming SSR (optional but recommended)

`config/initializers/react_on_rails.rb` – ensure:

```ruby
ReactOnRails.configure do |config|
  config.rendering_extension = :jsx # default is :js
  config.server_bundle_js_file = "server-bundle.js" # created by generator
  config.streaming_on = true # enables renderToPipeableStream
end
```

## 11. Run it with HMR 🎉

```bash
# Terminal 1: Start webpack dev server with hot module reloading
./bin/shakapacker-dev-server

# Terminal 2: Start Rails server
./bin/dev
# Visit http://localhost:3000 – HTML arrives fully rendered; the button hydrates.
```

## 12. Next steps (after demo works)

1. Add CRUD models to showcase Rails-side data.
2. Experiment with selective hydration.
3. Deploy to Render/Fly/Heroku.

---

That’s the full, no-fluff path to a working React Server Components demo on Rails. Proceed through the checklist and you’re ready to demo & explain each piece during the interview.
