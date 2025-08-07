class ApiController < ApplicationController
  def posts
    # Simulate database query
    @posts = [
      { id: 1, title: "Getting Started with React SSR", author: "John Doe", created_at: "2024-01-15" },
      { id: 2, title: "Building Interactive UIs", author: "Jane Smith", created_at: "2024-01-14" },
      { id: 3, title: "Server-Side Rendering Best Practices", author: "Bob Johnson", created_at: "2024-01-13" }
    ]

    render json: @posts
  end
end
