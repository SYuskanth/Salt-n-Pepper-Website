import React, { useState, useEffect } from 'react';
import Footer from '../Salt n Pepper/src/Components/Footer';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  // Initialize with some sample posts (in a real app, this would come from an API)
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: "The Future of Food Business: Trends to Watch in 2025",
        excerpt: "Discover the latest trends shaping the food industry and how your business can stay ahead of the curve.",
        content: `<p>The food industry is constantly evolving, and 2025 promises to bring exciting changes that will reshape how we think about food businesses.</p>`,
        author: "Salt n Pepper Team",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
        tags: ["Trends", "Business Strategy", "Innovation"],
        status: "published"
      },
      {
        id: 2,
        title: "5 Marketing Strategies That Work for Food Businesses",
        excerpt: "Learn effective marketing strategies specifically designed for food businesses.",
        content: `<p>Marketing in the food industry requires unique approaches and strategies.</p>`,
        author: "Marketing Team",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        tags: ["Marketing", "Business Tips"],
        status: "published"
      }
    ];
    setPosts(samplePosts);
  }, []);

  // Form state for creating/editing posts
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    image: '',
    imageFile: null,
    imageUploadType: 'url', // 'url' or 'file'
    tags: '',
    date: new Date().toISOString().split('T')[0], // Default to today's date
    status: 'draft'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        imageFile: file,
        image: URL.createObjectURL(file) // Create preview URL
      }));
    }
  };

  const handleImageTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      imageUploadType: type,
      image: '',
      imageFile: null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle image based on upload type
    let finalImage = formData.image;
    if (formData.imageUploadType === 'file' && formData.imageFile) {
      // In a real application, you would upload the file to a server
      // For now, we'll use the object URL for preview
      finalImage = formData.image;
    }
    
    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      ...formData,
      image: finalImage,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      date: formData.date // Use the date from form instead of auto-generating
    };

    if (editingPost) {
      setPosts(prev => prev.map(post => post.id === editingPost.id ? newPost : post));
      setEditingPost(null);
    } else {
      setPosts(prev => [...prev, newPost]);
    }

    // Reset form and go back to posts list
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      image: '',
      imageFile: null,
      imageUploadType: 'url',
      tags: '',
      date: new Date().toISOString().split('T')[0],
      status: 'draft'
    });
    setActiveTab('posts'); // Go to posts list after creating/editing
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      image: post.image,
      imageFile: null,
      imageUploadType: 'url', // Default to URL when editing
      tags: post.tags.join(', '),
      date: post.date,
      status: post.status
    });
    setEditingPost(post);
    setActiveTab('create'); // Switch to create tab for editing
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(prev => prev.filter(post => post.id !== postId));
    }
  };

  const publishedPosts = posts.filter(post => post.status === 'published');
  const draftPosts = posts.filter(post => post.status === 'draft');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/Logo.png"
                alt="Salt n Pepper Logo"
                className="h-12 w-12 mr-3"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">Salt n Pepper - Content Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="/" 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                ← Back to Website
              </a>
              <span className="text-sm text-gray-500">Welcome, Admin</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  📊 Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('posts')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'posts' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  📝 All Posts
                </button>
                <button
                  onClick={() => {
                    setActiveTab('create');
                    setEditingPost(null);
                    setFormData({
                      title: '',
                      excerpt: '',
                      content: '',
                      author: '',
                      image: '',
                      imageFile: null,
                      imageUploadType: 'url',
                      tags: '',
                      date: new Date().toISOString().split('T')[0],
                      status: 'draft'
                    });
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'create' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  ➕ Create Post
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Stats Cards */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <span className="text-2xl">📄</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Total Posts</h3>
                        <p className="text-2xl font-bold text-blue-600">{posts.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-green-100 rounded-full">
                        <span className="text-2xl">✅</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Published</h3>
                        <p className="text-2xl font-bold text-green-600">{publishedPosts.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-yellow-100 rounded-full">
                        <span className="text-2xl">📝</span>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Drafts</h3>
                        <p className="text-2xl font-bold text-yellow-600">{draftPosts.length}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 5).map((post) => (
                      <div key={post.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center">
                          <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded-lg mr-4" />
                          <div>
                            <h4 className="font-medium text-gray-900">{post.title}</h4>
                            <p className="text-sm text-gray-500">{post.date} • {post.status}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="text-red-600 hover:text-red-800 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* All Posts Tab */}
            {activeTab === 'posts' && (
              <div className="bg-white rounded-lg shadow-md">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">All Posts</h3>
                    <button
                      onClick={() => {
                        setActiveTab('create');
                        setEditingPost(null);
                        setFormData({
                          title: '',
                          excerpt: '',
                          content: '',
                          author: '',
                          image: '',
                          imageFile: null,
                          imageUploadType: 'url',
                          tags: '',
                          date: new Date().toISOString().split('T')[0],
                          status: 'draft'
                        });
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      + New Post
                    </button>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {posts.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      No posts found. Create your first post!
                    </div>
                  ) : (
                    posts.map((post) => (
                      <div key={post.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-20 h-20 object-cover rounded-lg mr-4"
                            />
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h4>
                              <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                              <div className="flex items-center text-sm text-gray-500 space-x-4">
                                <span>By {post.author}</span>
                                <span>{post.date}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  post.status === 'published' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {post.status}
                                </span>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {post.tags.map((tag, index) => (
                                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => handleEdit(post)}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Create/Edit Post Tab */}
            {activeTab === 'create' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {editingPost ? 'Edit Post' : 'Create New Post'}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Post Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                      Post Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter post title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Post Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Post Image *
                    </label>
                    
                    {/* Image Upload Type Selector */}
                    <div className="mb-4">
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="imageUploadType"
                            value="url"
                            checked={formData.imageUploadType === 'url'}
                            onChange={(e) => handleImageTypeChange(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">Image URL</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="imageUploadType"
                            value="file"
                            checked={formData.imageUploadType === 'file'}
                            onChange={(e) => handleImageTypeChange(e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">Upload File</span>
                        </label>
                      </div>
                    </div>

                    {/* URL Input */}
                    {formData.imageUploadType === 'url' && (
                      <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    )}

                    {/* File Upload */}
                    {formData.imageUploadType === 'file' && (
                      <div>
                        <input
                          type="file"
                          id="imageFile"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          required={!formData.image}
                        />
                        <p className="mt-2 text-sm text-gray-500">
                          Supported formats: JPG, PNG, GIF, WebP (Max 5MB)
                        </p>
                      </div>
                    )}
                    
                    {/* Image Preview */}
                    {formData.image && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                        <div className="relative inline-block">
                          <img 
                            src={formData.image} 
                            alt="Preview" 
                            className="w-48 h-32 object-cover rounded-lg border shadow-sm"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                image: '',
                                imageFile: null
                              }));
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Post Excerpt */}
                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                      Post Excerpt *
                    </label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      placeholder="Brief description of the post"
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Post Content */}
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                      Post Content *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Write your post content here... (supports HTML)"
                      rows="12"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Author, Date and Tags Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                        Author *
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Author name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Publication Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="Business, Marketing, Tips"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          value="draft"
                          checked={formData.status === 'draft'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">Save as Draft</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={formData.status === 'published'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">Publish</span>
                      </label>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingPost(null);
                          setActiveTab('dashboard');
                          setFormData({
                            title: '',
                            excerpt: '',
                            content: '',
                            author: '',
                            image: '',
                            imageFile: null,
                            imageUploadType: 'url',
                            tags: '',
                            date: new Date().toISOString().split('T')[0],
                            status: 'draft'
                          });
                        }}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        {editingPost ? 'Update Post' : 'Create Post'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;