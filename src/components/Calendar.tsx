import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type CalendarFormData = {
    name: string;
    date: string;
}

interface CalendarProps {
    onSubmit: (data: CalendarFormData) => void;
}

const CalendarForm: React.FC<CalendarProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<CalendarFormData>();
    const onSubmitHandler: SubmitHandler<CalendarFormData> = (data) => {
        onSubmit(data);
    };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" {...register("date", {required: "Date is required"})}></input>
                {errors.date && <p className="error-message">{errors.date.message}</p>}
            </form>
        </div>
    )
}

export default CalendarForm