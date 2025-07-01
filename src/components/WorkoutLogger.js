import React, { useState } from 'react';

const WorkoutLogger = () => {
  const [activity,setActivity] = useState('');
  const [duration,setDuration] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activity || !duration) return alert('All fields required');

    const newWorkout = { activity, duration, date: new Date().toLocaleDateString() };
    await fetch('http://localhost:5000/workouts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWorkout),
    });
    setActivity('');
    setDuration('');
    alert('Workout Logged!');
  };
  return (
    <div className='card p-3 mb-4'>
      <h5>New Workout</h5>
      <form onSubmit={handleSubmit}>
        <input className='form-control mb-2' placeholder='Activity' value={activity} onChange={(e)=>setActivity(e.target.value)} />
        <input className='form-control mb-2' placeholder='Duration' value={duration} onChange={(e)=>setDuration(e.target.value)} />
        <button type='subit' className='btn btn-primary'>Add Workout</button>
      </form>
    </div>
  );
};

export default WorkoutLogger;