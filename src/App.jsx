import React from 'react';
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="profile-info">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Avatar" className="profile-avatar" />
        <div>
          <p className="profile-name">Name: John  Doe</p>
          <p className="profile-bio">Bio: Passionate about news!</p>
        </div>
      </div>
      <div className="tabs">
        <div className="content">
          <h2>Posted Articles:</h2>
          <div className="article">
            <img src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1" alt="Thumbnail" />
            <div>
              <h3>COVID-19 Vaccine Distribution Begins Worldwide</h3>
              <p>Governments across the globe have started distributing COVID-19 vaccines to combat the pandemic.</p>
            </div>
          </div>
          <div className="article">
            <img src="https://images.pexels.com/photos/258083/pexels-photo-258083.jpeg?auto=compress&cs=tinysrgb&w=300&h=750&dpr=1" alt="Thumbnail" />
            <div>
              <h3>Tesla Unveils New Electric Car Model</h3>
              <p>Tesla announces the launch of its latest electric car model, promising enhanced performance and longer range.</p>
            </div>
          </div>
          <div className="article">
            <img src="https://th.bing.com/th/id/OIP.ec2b7bQCcArj5pesb6j3YAHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7" alt="Thumbnail" />
            <div>
              <h3>SpaceX Successfully Lands Starship Rocket Prototype</h3>
              <p>SpaceX achieves a major milestone by successfully landing its Starship rocket prototype after a high-altitude test flight.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
