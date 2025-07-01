import React, { useState } from 'react';

const WorkoutLogger = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!activity || !duration) {return alert('All fields required');};

    const newWorkout = {
      activity,
      duration,
      date: new Date().toLocaleDateString(),
    };

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
    <div className="card shadow-sm p-4 mb-4 bg-light">
      <h5 className="mb-3 text-primary">Log New Workout</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Activity</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Running, Yoga"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Duration (in minutes)</label>
          <input
            type="number"
            className="form-control"
            placeholder="e.g., 30"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutLogger;
