import React, { useState, useEffect } from 'react';

const GoalTracker = () => {
  const [goal, setGoal] = useState(300);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/workouts')
      .then((res) => res.json())
      .then((data) => {
        const total = data.reduce((sum, w) => sum + Number(w.duration), 0);
        setProgress(total);
      });
  }, []);

  const percent = Math.min((progress / goal) * 100, 100).toFixed(1);

  return (
    <div className="card p-3 mb-3">
      <h5>Goal Progress</h5>
      <p>
        You've logged <strong>{progress}</strong> out of <strong>{goal}</strong> minutes.
      </p>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }}>{percent}%</div>
      </div>
    </div>
  );
};

export default GoalTracker;