import React from 'react';
import './EmployeeDetails.css';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import './Home.css';


const EmployeeDetails = () => {
    return (
        <div className="employee-details">
            <Sidebar />
            <div className="content">
                <div className="header-d">
                    <h2>Employee Details</h2>
                </div>
                <div className="employee-card">
                    <div className="employee-info">
                        <div>
                            <img
                                src="photo.jpeg"
                                alt="Employee"
                                className="employee-photo"
                            />
                        </div>
                        <div>
                            <div className="badge">Member</div>
                            <div> <h4>Welcome, Alexa</h4></div>
                            <div>
                                Manage your info, privacy, and security to make Frontend work better for you
                            </div>
                        </div>



                    </div>

                </div>
                <div className="employee-stats">
                    <div className="ratings">

                        <div className='part1'>
                            <div >
                                <h4>Ratings</h4>
                            </div>
                            <div>
                                Edit

                            </div>
                        </div>
                        <div>
                            <img
                                src="photo.jpeg"
                                alt="Employee"
                                className="employee-photo"
                            />
                            <span style={{marginLeft:"30px"}}>< strong>Batosh</strong> </span>
                            
                            <span>-CEO</span>

                        </div>
                        <div>
                            <span>⭐⭐⭐⭐⭐</span>

                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur. Fringilla nunc elementum.Lorem ipsum dolor sit amet consectetur. Fringilla nunc elementum.</p>
                        </div>




                    </div>
                    <div className="status-summary">
                        <div className='sum1'>

                        </div>
                        <div className='sum2'>
                            <h4>All task by complete status</h4>
                            <p>55% Completed Task</p>
                            <p>30% Incompleted Task</p>
                            <p>15% Overdue</p>
                        </div>

                    </div>
                </div>

                <div className="task-overview">
                    <div className="task-columns">
                        <div className="task-column">
                            <h4>Current & Upcoming</h4>
                            <div className='div1'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (High) </p>
                                <p> <span>ZEN-01</span> <span className='high'> High</span></p>
                            </div>
                            <div className='div1'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (High)</p>
                                <p> <span>ZEN-01</span> <span className='high'> High</span></p>

                            </div>
                            <div className='div1'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (High)</p>
                                <p> <span>ZEN-01</span> <span className='high'> High</span></p>
                            </div>
                        </div>
                        <div className="task-column">
                            <h4>Completed</h4>
                            <div className='div2'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (High)</p>
                                <p> <span>ZEN-01</span> <span className='high'> High</span></p>

                            </div>
                            <div className='div2'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (Low)</p>
                                <p> <span>ZEN-01</span> <span> Low</span></p>


                            </div>


                        </div>
                        <div className="task-column">
                            <h4>Failed</h4>
                            <div className='div3'>
                                <p>ZEN Roadmap, Boards backlog & Test Hub (Medium)</p>
                                <p> <span>ZEN-01</span> <span className='medium'>Medium</span></p>

                            </div>
                            <div className="div3">
                                <p>ZEN Roadmap, Boards backlog & Test Hub (Low)</p>
                                <p> <span>ZEN-01</span> <span> Low</span></p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EmployeeDetails;
