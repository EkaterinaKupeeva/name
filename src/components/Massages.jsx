import { useEffect, useState } from "react";

export const Massages = () => {
const [advice, setAdvice] = useState(""); 

      useEffect(() => {
        const url = "https://api.adviceslip.com/advice";
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.slip.advice);
            setAdvice(json.slip.advice);
          } catch (error) {
            console.log("Error: ", error);
          }
        }
        fetchData();
      }, []);
      return (
      <div className="row">
        <div className="col-6 mx-auto border p-5">{advice}</div>
      </div>
    )
  };
  