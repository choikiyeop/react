import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  
}

export const CustomDatePicker = ({
  ...props
}: CustomDatePickerProps) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  return (
    <ReactDatePicker 
      onChange={handleChange}
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      {...props}
    />    
  )
}