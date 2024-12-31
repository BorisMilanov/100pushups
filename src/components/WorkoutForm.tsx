import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./WorkoutForm.css"; // Import the CSS file

type WorkoutFormData = {
  name: string;
  pushupsCount: number;
  date: string;
};

interface WorkoutFormProps {
  onSubmit: (data: WorkoutFormData) => void;
}

const WorkoutForm: React.FC<WorkoutFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<WorkoutFormData>();

  const onSubmitHandler: SubmitHandler<WorkoutFormData> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="form-container">
      <h1>Workout Form</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        <label htmlFor="pushupsCount">Push-ups Count</label>
        <input
          id="pushupsCount"
          type="number"
          {...register("pushupsCount", { required: "Push-ups count is required", min: 1 })}
        />
        {errors.pushupsCount && <p className="error-message">{errors.pushupsCount.message}</p>}

        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...register("date", { required: "Date is required" })} />
        {errors.date && <p className="error-message">{errors.date.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
