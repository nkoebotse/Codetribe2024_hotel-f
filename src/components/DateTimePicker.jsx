// src/components/DateTimePicker.jsx
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ label, selectedDate, onChange }) => {
  return (
    <div className="date-time-picker">
      <label className="block mb-2">{label}</label>
      <DatePicker
        selected={selectedDate}        // Use the selectedDate from parent
        onChange={onChange}             // Pass the selected date back to parent
        showTimeSelect
        dateFormat="Pp"
        className="border rounded-md p-2"
      />
    </div>
  );
};

export default DateTimePicker;
