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

## 3. Add `react_on_rails`

```ruby
# Gemfile

gem "react_on_rails"  # latest stable
```

```bash
bundle install
```

## 4. Install Webpack + React on Rails boilerplate

```bash
bundle exec rails generate react_on_rails:install
# This generator will:
# • Add Webpack config
# • Create app/javascript/ packs & components
# • Install npm packages (React 18 etc.)
```

If the generator doesn’t auto-install JS packages:

```bash
npm install
```

## 5. Generate a controller & route

```bash
rails generate controller Home index
```

```ruby
# config/routes.rb
root "home#index"
```

## 6. Create React components

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

## 7. Wire it into the Rails view

`app/views/home/index.html.erb`:

```erb
<%= react_component("Greeting", {}, prerender: true) %>
```

## 8. Enable streaming SSR (optional but recommended)

`config/initializers/react_on_rails.rb` – ensure:

```ruby
ReactOnRails.configure do |config|
  config.rendering_extension = :jsx # default is :js
  config.server_bundle_js_file = "server-bundle.js" # created by generator
  config.streaming_on = true # enables renderToPipeableStream
end
```

## 9. Run it 🎉

```bash
npm run build    # or bin/webpack if using Webpacker
rails server
# Visit http://localhost:3000 – HTML arrives fully rendered; the button hydrates.
```

## 10. Next steps (after demo works)

1. Add CRUD models to showcase Rails-side data.
2. Experiment with selective hydration.
3. Deploy to Render/Fly/Heroku.

---

That’s the full, no-fluff path to a working React Server Components demo on Rails. Proceed through the checklist and you’re ready to demo & explain each piece during the interview.
