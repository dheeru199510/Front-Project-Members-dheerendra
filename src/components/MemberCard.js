import React from 'react';
import './MemberCard.css';
import { Link } from 'react-router-dom';

function MemberCard({ member }) {

  return (
    <div className="member-card">
      <img src={member.profilePic} alt={member.name} />
      <h3>{member.name}</h3>
      <p >{member.role}</p>
      <Link to="/employee-details">
      <button className="view-details-button">Visit Profile</button>
    </Link>
    </div>
  );
}

export default MemberCard;
