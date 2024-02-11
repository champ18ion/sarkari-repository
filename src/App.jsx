// App.js

import React, { useState } from 'react';
import './App.css'

const App = () => {
  // Dummy user data
  const [user] = useState({
    name: 'John Doe',
    bio: 'Passionate about news!',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50', // Direct link to the avatar image
  });

  // Dummy articles data
  const [articles] = useState([
    { 
      id: 1, 
      title: 'COVID-19 Vaccine Distribution Begins Worldwide', 
      excerpt: 'Governments across the globe have started distributing COVID-19 vaccines to combat the pandemic.', 
      thumbnail: 'https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1' 
    },
    { 
      id: 2, 
      title: 'Tesla Unveils New Electric Car Model', 
      excerpt: 'Tesla announces the launch of its latest electric car model, promising enhanced performance and longer range.', 
      thumbnail: 'https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1' 
    },
    { 
      id: 3, 
      title: 'SpaceX Successfully Lands Starship Rocket Prototype', 
      excerpt: 'SpaceX achieves a major milestone by successfully landing its Starship rocket prototype after a high-altitude test flight.', 
      thumbnail: 'https://th.bing.com/th/id/OIP.ec2b7bQCcArj5pesb6j3YAHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    // Add more articles as needed
  ]);

  // Dummy bookmarked articles
  const [bookmarkedArticles] = useState([
    { 
      id: 4, 
      title: 'Artificial Intelligence: A Modern Approach', 
      excerpt: 'A comprehensive introduction to the field of artificial intelligence.', 
      thumbnail: 'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1' 
    },
    { 
      id: 5, 
      title: 'The Great Gatsby', 
      excerpt: 'A classic novel by F. Scott Fitzgerald set in the roaring twenties.', 
      thumbnail: 'https://images.pexels.com/photos/458195/pexels-photo-458195.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1' 
    },
  ]);

  const [showBookmarked, setShowBookmarked] = useState(false);

  const toggleBookmarked = () => {
    setShowBookmarked(!showBookmarked);
  };

  const navigateToSettings = () => {
    // Navigate to the settings page (implementation is beyond this assignment's scope)
    console.log("Navigate to settings page");
  };

  return (
    <div className="app">
      <div className="profile-info">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />
        <div>
          <p className="profile-name">Name: {user.name}</p>
          <p className="profile-bio">Bio: {user.bio}</p>
        </div>
      </div>
      <div className="tabs">
        <input type="radio" id="tab1" name="tab-group" defaultChecked />
        <label htmlFor="tab1">Posted</label>
        <input type="radio" id="tab2" name="tab-group" onClick={toggleBookmarked} />
        <label htmlFor="tab2">Bookmarked</label>
        <div className="tab-content">
          <div className="content">
            <h2>Posted Articles:</h2>
            {articles.map(article => (
              <div key={article.id} className="article">
                <img src={article.thumbnail} alt="Thumbnail" />
                <div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="content" style={{ display: showBookmarked ? 'block' : 'none' }}>
            <h2>Bookmarked Articles:</h2>
            {bookmarkedArticles.map(article => (
              <div key={article.id} className="article">
                <img src={article.thumbnail} alt="Thumbnail" />
                <div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="content">
            {/* Settings content */}
          </div>
        </div>
      </div>
      <button className="settings-button" onClick={navigateToSettings}>Settings</button>
    </div>
  );
};

export default App;
