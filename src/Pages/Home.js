import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import MemberCard from '../components/MemberCard';
import Pagination from '../components/Pagination';
import './Home.css';

const members = [
  { name: 'Victor', role: 'UI UX Team Lead', profilePic: 'photo.jpeg' },
  { name: 'Alexa', role: 'Sr. UI UX Designer', profilePic: 'photo.jpeg' },
  { name: 'Juliet', role: 'Blockchain Dev. Team Lead', profilePic: 'photo.jpeg'},
  { name: 'Hina', role: 'QA Team Lead', profilePic: 'photo.jpeg' },
  { name: 'Steve', role: 'UI UX Team Manager', profilePic: 'photo.jpeg' },
  { name: 'Andrielle', role: 'Sr. UI UX Designer', profilePic: 'photo.jpeg' },
  { name: 'Billie', role: 'Blockchain Dev. Team Manager', profilePic: 'photo.jpeg' },
  { name: 'Alita', role: 'QA Team Manager', profilePic: 'photo.jpeg' },
];

function Home() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <div className="header-dd">
          <h2>Project Members</h2>
          <SearchBar />
        </div>
        <div className="members-grid">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
