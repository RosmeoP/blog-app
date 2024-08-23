import React, { useState } from 'react';
import Button from './buttonSpace'; // Adjust the path if needed

const initialPosts = [];

export default function PostsManager() {
  const [posts, setPosts] = useState(initialPosts);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    href: '#',
    description: '',
    date: '',
    datetime: '',
    category: { title: '', href: '#' },
    author: {
      name: '',
      role: '',
      href: '#',
      imageUrl: '',
    },
  });

  const handleSavePost = () => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => post.id === editingPost.id ? { ...editingPost, ...newPost, isNew: false } : post));
      setEditingPost(null);
    } else {
      // Create new post
      setPosts([...posts, { ...newPost, id: Date.now(), isNew: true }]);
    }
    setNewPost({
      title: '',
      href: '#',
      description: '',
      date: '',
      datetime: '',
      category: { title: '', href: '#' },
      author: {
        name: '',
        role: '',
        href: '#',
        imageUrl: '',
      },
    });
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setNewPost(post);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('category.') || name.startsWith('author.')) {
      const [parentKey, key] = name.split('.');
      setNewPost(prevPost => ({
        ...prevPost,
        [parentKey]: {
          ...prevPost[parentKey],
          [key]: value
        }
      }));
    } else {
      setNewPost({ ...newPost, [name]: value });
    }
  };

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Add a Blog Post</h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Ready to share your insights and stories with the world? Use the form below to create a new post and let your voice be heard!
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`flex max-w-xl flex-col items-start justify-between ${post.isNew ? 'bg-white' : 'bg-black'}  p-4 rounded-lg`}
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
              <button onClick={() => handleEditPost(post)} className="text-sm text-blue-500 hover:underline">Edit</button>
              <button onClick={() => handleDeletePost(post.id)} className="text-sm text-red-500 hover:underline">Delete</button>
            </article>
          ))}
        </div>

        {/* Form for creating or editing posts */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-white">{editingPost ? 'Edit Post' : 'Add New Post'}</h3>
          <div className="mt-6 border border-[#372b38] p-4 flex flex-col gap-4 rounded-lg">
            <input
              name="title"
              value={newPost.title}
              onChange={handleChange}
              placeholder="Title"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <textarea
              name="description"
              value={newPost.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="date"
              type="date"
              value={newPost.date}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="datetime"
              type="datetime-local"
              value={newPost.datetime}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="category.title"
              value={newPost.category.title}
              onChange={handleChange}
              placeholder="Category Title"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="author.name"
              value={newPost.author.name}
              onChange={handleChange}
              placeholder="Author Name"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="author.role"
              value={newPost.author.role}
              onChange={handleChange}
              placeholder="Author Role"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <input
              name="author.imageUrl"
              value={newPost.author.imageUrl}
              onChange={handleChange}
              placeholder="Author Image URL"
              className="w-full p-2 rounded-lg bg-transparent border border-[#ffffff] text-white placeholder-opacity-75 focus:outline-none input-hover-purple"
            />
            <Button
              onClick={handleSavePost}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
