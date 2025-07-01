import React, { useEffect, useState } from 'react';

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/workouts')
      .then((res) => res.json())
      .then((data) => setWorkouts(data || []));
  }, []);

  return (
    <div className="card p-3 mb-3">
      <h5>Workout History</h5>
      <ul className="list-group">
        {workouts.map((w, i) => (
          <li key={i} className="list-group-item">
            {w.date} - {w.activity} for {w.duration} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutHistory;