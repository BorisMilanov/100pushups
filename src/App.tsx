import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import "./App.css"
type Workout = {
  name: string;
  pushupsCount: number;
  date: string;
};

const App: React.FC = () => {
  const [workout, setWorkout] = useState<Workout | null>(null);

  const handleFormSubmit = (data: Workout) => {
    setWorkout(data);
    console.log("Workout Data: ", data);
  };

  return (
    <div>
      <h1>Push-ups Workout Form</h1>
      <WorkoutForm onSubmit={handleFormSubmit} />
      
      {workout && (
        <div>
          <h2>Submitted Workout</h2>
          <p><strong>Name:</strong> {workout.name}</p>
          <p><strong>Push-ups Count:</strong> {workout.pushupsCount}</p>
          <p><strong>Date:</strong> {workout.date}</p>
        </div>
      )}
    </div>
  );
};

export default App;
