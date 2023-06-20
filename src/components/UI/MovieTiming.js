import React, { useContext , useCallback } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../../data"; // importing data slots
import "../styles/movieTiming.css";
// The BsContext is imported from ../../context/Context, which is a React Context object that is used to share state between components.
import BsContext from "../../context/BsContext";


//Inside the TimeShedule component, the useContext hook is used to extract time and changeTime from the BsContext. 
const TimeShedule = () => {
  const context = useContext(BsContext);

  const { time, changeTime } = context;


  // This code defines a function called handleChangeTime, which takes a value parameter. When this function is called, it invokes the changeTime function with the value parameter and saves the value in the local storage
  const handleChangeTime = useCallback((value) => {
    //The useCallback hook is used to memoize this function so that it is only created once and not recreated on every re-render of the component.
    changeTime(value);
    window.localStorage.setItem("slot", value);
  }, [changeTime]);

  return (
    <>
      <div className="Slot_container">
        <div className="TS_main_container">
        <h1 className="TS_heading">Select a Schedule :-</h1>
          {slots.map((el, index) => {
            // rendering the radio component on each time slot
            return (
              <RadioComponent
                text={el}
                changeSelection={handleChangeTime}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeShedule;
