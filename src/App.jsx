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
      thumbnail: 'data:image/jpeg;base64,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' 
    },
    { 
      id: 2, 
      title: 'Tesla Unveils New Electric Car Model', 
      excerpt: 'Tesla announces the launch of its latest electric car model, promising enhanced performance and longer range.', 
      thumbnail: 'data:image/jpeg;base64,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' 
    },
    { 
      id: 3, 
      title: 'SpaceX Successfully Lands Starship Rocket Prototype', 
      excerpt: 'SpaceX achieves a major milestone by successfully landing its Starship rocket prototype after a high-altitude test flight.', 
      thumbnail: 'https://th.bing.com/th/id/OIP.ec2b7bQCcArj5pesb6j3YAHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7' 
    },
    // Add more articles as needed
  ]);
  

  const navigateToSettings = () => {
    // Navigate to the settings page (implementation is beyond this assignment's scope)
    console.log("Navigate to settings page");
  };

  return (
    <div className="container">
      <div className="tabs">
        <div className="tab">
          <input type="radio" id="tab1" name="tab-group" defaultChecked />
          <label htmlFor="tab1">Posted</label>
          <div className="content">
            <div className="user-info">
              <img src={user.avatar} alt="Avatar" />
              <div>
                <p>Name: {user.name}</p>
                <p>Bio: {user.bio}</p>
              </div>
            </div>
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
        </div>
        <div className="tab">
          <input type="radio" id="tab2" name="tab-group" />
          <label htmlFor="tab2">Bookmarked</label>
          <div className="content">
            {/* Bookmarked articles */}
          </div>
        </div>
      </div>
      <button className="settings-button" onClick={navigateToSettings}>Settings</button>
    </div>
  );
};

export default App;
