import React, { useState } from "react";
// import WorkoutForm from "./components/WorkoutForm";
import SliderWithSwiper from "./components/Slider";
import "./App.css"
// import CalendarForm from "./components/Calendar";
// type Workout = {
//   name: string;
//   pushupsCount: number;
//   date: string;
// };

const App: React.FC = () => {
  // const [workout, setWorkout] = useState<Workout | null>(null);

  // const handleFormSubmit = (data: Workout) => {
  //   setWorkout(data);
  //   console.log("Workout Data: ", data);
  // };

  return (
    <div>
      {/* <CalendarForm onSubmit={function (data: { name: string; date: string; }): void {
        throw new Error("Function not implemented.");
      } } /> */}
      <SliderWithSwiper/>
      {/* <WorkoutForm onSubmit={handleFormSubmit} />
       */}
      {/* {workout && (
        <div>
          <h2>Submitted Workout</h2>
          <p><strong>Name:</strong> {workout.name}</p>
          <p><strong>Push-ups Count:</strong> {workout.pushupsCount}</p>
          <p><strong>Date:</strong> {workout.date}</p>
        </div>
      )} */}
    </div>
  );
};

export default App;
