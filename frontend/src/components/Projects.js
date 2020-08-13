import React from 'react'

function Home () {
  return <div>
    <div className="filters">
      Search project:
      <input type="text"/>
      Sort by:
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
    <div className="main-content">
      <div className="projects-container">
        <ul>
          <li>
            Project:
            <p>Project description</p>
            <div className="project-options">
              <a href="#">Client</a>
              <p>10/03/2020</p>
              <a href="#">View Project</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="user-container">
        <p>Edit</p>
        <img src="../images/profile-img.jpg" alt="profile pic"/>
        <p>Naiche</p>
        <p>naiche@gmail.com</p>
        <p>Total Projects: 12</p>
      </div>
    </div>
  </div>
}
export default Home