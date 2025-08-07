class HomeController < ApplicationController
  def index
    # Simulate fetching posts from API (in real app, this would be a service call)
    posts = [
      { id: 1, title: "Getting Started with React SSR", author: "John Doe", created_at: "2024-01-15" },
      { id: 2, title: "Building Interactive UIs", author: "Jane Smith", created_at: "2024-01-14" },
      { id: 3, title: "Server-Side Rendering Best Practices", author: "Bob Johnson", created_at: "2024-01-13" }
    ]

    @dashboard_props = {
      userData: {
        userName: "Demo User",
        userRole: "admin"
      },
      posts: posts,
      serverTime: Time.zone.now.strftime("%H:%M:%S"),
      serverDate: Time.zone.today.strftime("%Y-%m-%d")
    }
  end
end
