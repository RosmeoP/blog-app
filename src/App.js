import React from 'react';
import Navbar from './components/navbar'
import Blog from './components/blog';
import Posts  from './components/Posts';
import PostsManager from './components/PostManager';
import Footer from './components/Footer';






function App() {
  return (
    <div >
   <Navbar/>
   <Blog/>
   <Posts/>
   <PostsManager/>
   <Footer/>
   <div class="main"></div>
    </div>
  );
}

export default App;
