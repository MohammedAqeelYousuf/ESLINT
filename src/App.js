import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WorkoutLogger from './components/WorkoutLogger';
import WorkoutHistory from './components/WorkoutHistory';
import GoalTracker from './components/GoalTracker';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container mt-4'> 
        <WorkoutLogger />
        <WorkoutHistory />
        <GoalTracker />
      </div>
    </div>
  );
}

export default App;
