import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import DevelopmentUrl from "../../data/api";
import imglogo from "../../image/logo.png";

const Modal = ({ modalMessage, handleClose, show,  children, handleSubmit, loadPage}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {modalMessage === "Data Submitted Successfully" ?
          <button className='btnmodalsuccess'
            onClick={loadPage}
          >
            Ok
          </button>
          :
          modalMessage === "Something went wrong" ?
          <>
            <button className='btnmodal'
            onClick={handleClose}
          >
            Check
          </button>
          :
          <button className='btnmodal'
            onClick={handleSubmit}
          >
            Try Again
          </button>
          </>
          
          : 
          <div style={{display:"flex"}}> <button className="btnmodalsuccess" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btnmodal" onClick={handleClose}>
          Cancel
        </button></div>
        }
       
      </section>
    </div>
  );
};
const Form = () => {

  let data, dateToday;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  dateToday = yyyy + "-" + mm + "-" + dd;

  const token = localStorage.getItem("token");
  const place = localStorage.getItem("location");
  const [capacity, setCapacity] = useState("");
  const [generation, setGeneration] = useState("");
  const [timerun, setRunTime] = useState("");
  const [dieselconsumption, setDieselConsumption] = useState("");

  const [capacity2, setCapacity2] = useState("");
  const [generation2, setGeneration2] = useState("");
  const [timerun2, setRunTime2] = useState("");
  const [dieselconsumption2, setDieselConsumption2] = useState("");

  const [capacity3, setCapacity3] = useState("");
  const [generation3, setGeneration3] = useState("");
  const [timerun3, setRunTime3] = useState("");
  const [dieselconsumption3, setDieselConsumption3] = useState("");

  const [kebrate, setKebRate] = useState("");
  const [fuelrate, setFuelRate] = useState("");
  const [waterrate, setWaterRate] = useState("");
  const [pngrate, setPngRate] = useState("");

  const [weathermin, setMinTempurature] = useState("");
  const [weathermax, setMaxTemperature] = useState("");
  const [humidity, setHumidity] = useState("");

  const [kitchenpng, setKitchenpng] = useState("");
  const [waterconsumption, setWaterConsumption] = useState("");
  const [solargeneration, setSolarGeneration] = useState("");
  const [kebconsumption, setKebConsumption] = useState("");

  const [err, setErr] = useState({});

  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [required, showRequired] = useState("");

  const validate = (name, value) => {
    const re =   /^\d*\.?\d*$/; ///^[0-9\b]+$/;
    const time = /^([01]\d|2[0-3]):?([0-5]\d)$/;

    switch (name) {
      case "capacity1":
        if (!value || value.trim() === "") {
          setErr({ capacity1: "Capacity is required" });
        } else if (!re.test(value)) {
          setErr({ capacity1: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "generation1":
        if (!value || value.trim() === "") {
          setErr({ generation1: "Generation is required" });
        } else if (!re.test(value)) {
          setErr({ generation1: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "timerun1":
        if (!value || value.trim() === "") {
          setErr({ timerun1: "Time Run is required" });
        } else if (!time.test(value)) {
          setErr({ timerun1: "Enter in this HH:MM format" });
        } else {
          setErr("");
        }
        break;
      case "diesel1":
        if (!value || value.trim() === "") {
          setErr({ diesel1: "Diesel Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ diesel1: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "capacity2":
        if (!value || value.trim() === "") {
          setErr({ capacity2: "Capacity is required" });
        } else if (!re.test(value)) {
          setErr({ capacity2: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "generation2":
        if (!value || value.trim() === "") {
          setErr({ generation2: "Generation is required" });
        } else if (!re.test(value)) {
          setErr({ generation2: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "timerun2":
        if (!value || value.trim() === "") {
          setErr({ timerun2: "Time Run is required" });
        } else if (!time.test(value)) {
          setErr({ timerun2: "Enter in this HH:MM format" });
        } else {
          setErr("");
        }
        break;
      case "diesel2":
        if (!value || value.trim() === "") {
          setErr({ diesel2: "Diesel Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ diesel2: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "capacity3":
        if (!value || value.trim() === "") {
          setErr({ capacity3: "Capacity is required" });
        } else if (!re.test(value)) {
          setErr({ capacity3: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "generation3":
        if (!value || value.trim() === "") {
          setErr({ generation3: "Generation is required" });
        } else if (!re.test(value)) {
          setErr({ generation3: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "timerun3":
        if (!value || value.trim() === "") {
          setErr({ timerun3: "Time Run is required" });
        } else if (!time.test(value)) {
          setErr({ timerun3: "Enter in this HH:MM format" });
        } else {
          setErr("");
        }
        break;
      case "diesel3":
        if (!value || value.trim() === "") {
          setErr({ diesel3: "Diesel Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ diesel3: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "keb":
        if (!value || value.trim() === "") {
          setErr({ keb: "KEB is required" });
        } else if (!re.test(value)) {
          setErr({ keb: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "fuel":
        if (!value || value.trim() === "") {
          setErr({ fuel: "Fuel is required" });
        } else if (!re.test(value)) {
          setErr({ fuel: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "water":
        if (!value || value.trim() === "") {
          setErr({ water: "Water is required" });
        } else if (!re.test(value)) {
          setErr({ water: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "png":
        if (!value || value.trim() === "") {
          setErr({ png: "PNG is required" });
        } else if (!re.test(value)) {
          setErr({ png: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "min":
        if (!value || value.trim() === "") {
          setErr({ min: "Min Temperature is required" });
        } else if (!re.test(value)) {
          setErr({ min: "Only numeric value allowed" });
        } else if (value >= weathermax) {
          setErr({ min: "Min Temp must be less than Max Temp" });
        } else {
          setErr("");
        }
        break;
      case "max":
        if (!value || value.trim() === "") {
          setErr({ max: "Max Temperature is required" });
        } else if (!re.test(value)) {
          setErr({ max: "Only numeric value allowed" });
        } else if (value <= weathermin) {
          setErr({ max: "Max Temp must be greater than Min Temp" });
        } else {
          setErr("");
        }
        break;
      case "humidity":
        if (!value || value.trim() === "") {
          setErr({ humidity: "Humidity is required" });
        } else if (!re.test(value)) {
          setErr({ humidity: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "pc":
        if (!value || value.trim() === "") {
          setErr({ pc: "PNG Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ pc: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "wc":
        if (!value || value.trim() === "") {
          setErr({ wc: "Water Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ wc: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "sg":
        if (!value || value.trim() === "") {
          setErr({ sg: "Solar Generation is required" });
        } else if (!re.test(value)) {
          setErr({ sg: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      case "kc":
        if (!value || value.trim() === "") {
          setErr({ kc: "KEB Consumption is required" });
        } else if (!re.test(value)) {
          setErr({ kc: "Only numeric value allowed" });
        } else {
          setErr("");
        }
        break;
      default: {
        return "";
      }
    }
  };

  const capacityHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setCapacity(value);
    }
  };

  const generationHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setGeneration(value);
    }
  };
  const runTimeHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setRunTime(value);
    }
  };
  const dieselConsumptionHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setDieselConsumption(value);
    }
  };
  const capacityHandle2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setCapacity2(value);
    }
  };
  const generationHandle2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setGeneration2(value);
    }
  };
  const runTimeHandle2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setRunTime2(value);
    }
  };
  const dieselConsumptionHandle2 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setDieselConsumption2(value);
    }
  };
  const capacityHandle3 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setCapacity3(value);
    }
  };
  const generationHandle3 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setGeneration3(value);
    }
  };
  const runTimeHandle3 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setRunTime3(value);
    }
  };
  const dieselConsumptionHandle3 = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setDieselConsumption3(value);
    }
  };
  const kebRateHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setKebRate(value);
    }
  };
  const fuelRateHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setFuelRate(value);
    }
  };
  const pngRateHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setPngRate(value);
    }
  };
  const waterrateHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setWaterRate(value);
    }
  };
  const minimumTempuratureHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setMinTempurature(value);
    }
  };
  const maximumTempuratureHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setMaxTemperature(value);
    }
  };
  const humudityHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setHumidity(value);
    }
  };
  const pngKitchenHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setKitchenpng(value);
    }
  };
  const waterConsumptionHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setWaterConsumption(value);
    }
  };

  const solarGenerationHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if(!validateResult){
      setSolarGeneration(value);
    }
   
  };

  const kebConsumptionHandle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const validateResult = validate(name, value);
    if (!validateResult) {
      setKebConsumption(value);
    }
  };

  const showModal = () => {
    if (place === 'Kabini') {
      if (capacity.length > 0 &&
        generation.length > 0 && timerun.length > 0 && dieselconsumption.length > 0
        && capacity2.length > 0 && generation2.length > 0 && timerun2.length > 0 && dieselconsumption2.length > 0
        && capacity3.length > 0 && generation3.length > 0 && timerun3.length > 0 && dieselconsumption3.length > 0
        && kebrate.length > 0 && fuelrate.length > 0 && waterrate.length > 0 && pngrate.length > 0
        && weathermin.length > 0 && weathermax.length > 0 && humidity.length > 0 && kitchenpng.length > 0
        && waterconsumption.length > 0 && solargeneration.length > 0 && kebconsumption.length > 0) {

        setShow(true);
      } else {
        setShow(false);
        showRequired("All fields are required.");
      }
    }
    else{
      if (capacity.length > 0 &&
        generation.length > 0 && timerun.length > 0 && dieselconsumption.length > 0
        && capacity2.length > 0 && generation2.length > 0 && timerun2.length > 0 && dieselconsumption2.length > 0
        && kebrate.length > 0 && fuelrate.length > 0 && waterrate.length > 0 && pngrate.length > 0
        && weathermin.length > 0 && weathermax.length > 0 && humidity.length > 0 && kitchenpng.length > 0
        && waterconsumption.length > 0 && solargeneration.length > 0 && kebconsumption.length > 0) {
          console.log(capacity.length);
        setShow(true);
      }
      else{
        setShow(false);
        showRequired("All fields are required.");
      }
    }
    
  };

  const hideModal = () => {
    setShow(false);
  };

  const refreshPage = () => {
    setCapacity("");
    setGeneration("");
    setRunTime("");
    setDieselConsumption("");
    setCapacity2("");
    setGeneration2("");
    setRunTime2("");
    setDieselConsumption2("");
    setCapacity3("");
    setGeneration3("");
    setRunTime3("");
    setDieselConsumption3("");
    setKebRate("");
    setFuelRate("");
    setWaterRate("");
    setPngRate("");
    setMinTempurature("");
    setMaxTemperature("");
    setHumidity("");
    setKitchenpng("");
    setWaterConsumption("");
    setSolarGeneration("");
    setKebConsumption("");
    showRequired("");
    setModalMessage("");
    setShow(false);
  };

  const submitForm = (e) => {
    e.preventDefault();

    data = {
      location: place,
      date: dateToday,
      keb: kebconsumption,
      generator: [
        {
          generatorname: "Generator 1",
          capacity: capacity,
          generation: generation,
          timerun: timerun,
          dieselconsumption: dieselconsumption,
        },
        {
          generatorname: "Generator 2",
          capacity: capacity2,
          generation: generation2,
          timerun: timerun2,
          dieselconsumption: dieselconsumption2,
        },
      ],
      kitchenpng: kitchenpng,
      waterconsumption: waterconsumption,
      weathermin: weathermin,
      weathermax: weathermax,
      humidity: humidity,
      kebrate: kebrate,
      fuelrate: fuelrate,
      waterrate: waterrate,
      pngrate: pngrate,
      solargeneration: solargeneration,
      kebconsumption: kebconsumption,
    };

    if (place === "Kabini") {
      data.generator.push({
        generatorname: "Generator 3",
        capacity: capacity3,
        generation: generation3,
        timerun: timerun3,
        dieselconsumption: dieselconsumption3,
      });
    }
    axios
      .post(`${DevelopmentUrl}/consume`, data, {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setModalMessage("Data Submitted Successfully");
        
      })

      .catch((err) => {
        console.log(err);
        setModalMessage("Something went wrong");
        
      });
  };

  return (
    <>
      <div className="mainContainer1">
        <div className="logoimg1">
          <img src={imglogo} alt="logo" />
        </div>
        <div className="containermain">
          <div className="heading">
            <h2 className="title">Daily Power Consumption Log {dateToday} </h2>
          </div>

          <div className="form ">
            <div className="selectiondiv">
              <h3 style={{ color: "#9A7036", borderBottom: "1px solid red" }}>
                Location : {place}
              </h3>
            </div>

            <div className="main2">
              <div className="heading">
                <h4 className="subtitle1">Generator Usage</h4>
              </div>
              <h6 className="generator1"> Generator 1</h6>
              <div className="generator ">
                <div className="inputlablegenerator">
                  <label className="capacity">Capacity:</label>
                  <br />
                  <input
                    type="text"
                    id="capacity1"
                    name="capacity1"
                    placeholder="KVA"
                    value={capacity}
                    className="capacityinput1"
                    onChange={capacityHandle}
                    required={true}
                  />
                  {err.capacity1 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.capacity1}
                    </p>
                  ) : (
                    ""
                  )}
                  
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Generation:</label>
                  <br />
                  <input
                    type="text"
                    id="generation1"
                    name="generation1"
                    placeholder="KVA"
                    value={generation}
                    className="capacityinput1"
                    onChange={generationHandle}
                    required={true}
                  />
                  {err.generation1 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.generation1}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Time Run:</label>
                  <br />
                  <input
                    type="text"
                    id="timerun1"
                    name="timerun1"
                    placeholder="HM:MM"
                    value={timerun}
                    className="capacityinput1"
                    onChange={runTimeHandle}
                    required={true}
                  />
                  {err.timerun1 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.timerun1}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Diesel Consumption:</label>
                  <br />
                  <input
                    type="text"
                    id="diesel1"
                    name="diesel1"
                    placeholder="In Liters"
                    value={dieselconsumption}
                    className="capacityinput1"
                    onChange={dieselConsumptionHandle}
                    required={true}
                  />
                  {err.diesel1 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.diesel1}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <h6 className="generator1"> Generator 2</h6>
              <div className="generator ">
                <div className="inputlablegenerator">
                  <label className="capacity">Capacity:</label>
                  <br />
                  <input
                    type="text"
                    id="capacity2"
                    name="capacity2"
                    placeholder="KVA"
                    value={capacity2}
                    className="capacityinput1"
                    onChange={capacityHandle2}
                    required={true}
                  />
                  {err.capacity2 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.capacity2}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Generation:</label>
                  <br />
                  <input
                    type="text"
                    id="generation2"
                    name="generation2"
                    placeholder="unit"
                    value={generation2}
                    className="capacityinput1"
                    onChange={generationHandle2}
                    required={true}
                  />
                  {err.generation2 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.generation2}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Time Run:</label>
                  <br />
                  <input
                    type="text"
                    id="timerun2"
                    name="timerun2"
                    placeholder="HH:MM"
                    value={timerun2}
                    className="capacityinput1"
                    onChange={runTimeHandle2}
                    required={true}
                  />
                  {err.timerun2 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.timerun2}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="inputlablegenerator">
                  <label className="capacity">Diesel Consumption:</label>
                  <br />
                  <input
                    type="text"
                    id="diesel2"
                    name="diesel2"
                    placeholder="In Liters"
                    value={dieselconsumption2}
                    className="capacityinput1"
                    onChange={dieselConsumptionHandle2}
                    required={true}
                  />
                  {err.diesel2 != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.diesel2}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {place === "Kabini" ? (
                <>
                  <h6 className="generator1"> Generator 3</h6>
                  <div className="generator ">
                    <div className="inputlablegenerator">
                      <label className="capacity">Capacity:</label>
                      <br />
                      <input
                        type="text"
                        id="capacity3"
                        name="capacity3"
                        placeholder="KVA"
                        value={capacity3}
                        className="capacityinput1"
                        onChange={capacityHandle3}
                        required={true}
                      />
                      {err.capacity3 != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>
                          {err.capacity3}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="inputlablegenerator">
                      <label className="capacity">Generation:</label>
                      <br />
                      <input
                        type="text"
                        id="generation3"
                        name="generation3"
                        placeholder="unit"
                        value={generation3}
                        className="capacityinput1"
                        onChange={generationHandle3}
                        required={true}
                      />
                      {err.generation3 != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>
                          {err.generation3}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="inputlablegenerator">
                      <label className="capacity">Time Run:</label>
                      <br />
                      <input
                        type="text"
                        id="timerun3"
                        name="timerun3"
                        placeholder="HH:MM"
                        value={timerun3}
                        className="capacityinput1"
                        onChange={runTimeHandle3}
                        required={true}
                      />
                      {err.timerun3 != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>
                          {err.timerun3}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="inputlablegenerator">
                      <label className="capacity">Diesel Consumption:</label>
                      <br />
                      <input
                        type="text"
                        id="diesel3"
                        name="diesel3"
                        placeholder="In Liters"
                        value={dieselconsumption3}
                        className="capacityinput1"
                        onChange={dieselConsumptionHandle3}
                        required={true}
                      />
                      {err.diesel3 != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>
                          {err.diesel3}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              ) : null}
              <div className="heading">
                <h4 className="rate1">Rate Matrix</h4>
              </div>
              <div className="generator margindiv ">
                <div className="margindiv">
                  <label className="capacity">KEB:</label> <br />
                  <input
                    type="text"
                    id="keb"
                    name="keb"
                    placeholder="Rate/Unit"
                    value={kebrate}
                    className="capacityinput"
                    onChange={kebRateHandle}
                    required={true}
                  />
                  {err.keb != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.keb}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="margindiv">
                  <label className="capacity">Fuel:</label>
                  <br />
                  <input
                    type="text"
                    id="fuel"
                    name="fuel"
                    placeholder="Rate/Unit"
                    value={fuelrate}
                    className="capacityinput"
                    onChange={fuelRateHandle}
                    required={true}
                  />
                  {err.fuel != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.fuel}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="margindiv">
                  <label className="capacity">Water:</label>
                  <br />
                  <input
                    type="text"
                    id="water"
                    name="water"
                    placeholder="Rate/Unit"
                    value={waterrate}
                    className="capacityinput"
                    onChange={waterrateHandle}
                    required={true}
                  />
                  {err.water != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.water}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="margindiv">
                  <label className="capacity">LPG:</label>
                  <br />
                  <input
                    type="text"
                    id="png"
                    name="png"
                    placeholder="Rate/Unit"
                    value={pngrate}
                    className="capacityinput"
                    onChange={pngRateHandle}
                    required={true}
                  />
                  {err.png != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.png}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="heading">
                <h4 className="weather1">Weather Parameters</h4>
              </div>
              <div className="generator margindiv">
                <div className="margindiv">
                  <label className="capacity">Min Temp:</label> <br />
                  <input
                    type="text"
                    id="min"
                    name="min"
                    placeholder="Celsius"
                    value={weathermin}
                    className="capacityinput"
                    onChange={minimumTempuratureHandle}
                    required={true}
                  />
                  {err.min != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.min}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="margindiv">
                  <label className="capacity">Max Temp:</label> <br />
                  <input
                    type="text"
                    id="max"
                    name="max"
                    placeholder="Celsius"
                    value={weathermax}
                    className="capacityinput"
                    onChange={maximumTempuratureHandle}
                    required={true}
                  />
                  {err.max != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.max}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="margindiv">
                  <label className="capacity">Humidity:</label> <br />
                  <input
                    type="text"
                    id="humidity"
                    name="humidity"
                    placeholder="Percentage"
                    value={humidity}
                    className="capacityinput"
                    onChange={humudityHandle}
                    required={true}
                  />
                  {err.humidity != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>
                      {err.humidity}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="flex-container">
                <div>
                  <h6 className="lastdivheading">Kitchen LPG</h6>

                  <label className="consumption">LPG Consumption:</label>
                  <br />
                  <input
                    type="text"
                    id="pc"
                    name="pc"
                    placeholder="KG"
                    value={kitchenpng}
                    className="capacityinput"
                    onChange={pngKitchenHandle}
                    required={true}
                  />
                  {err.pc != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.pc}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <h6 className="lastdivheading">Water Consumption</h6>

                  <label className="consumption">water consumption:</label>
                  <br />
                  <input
                    type="text"
                    id="wc"
                    name="wc"
                    placeholder="IN KL"
                    value={waterconsumption}
                    className="capacityinput"
                    onChange={waterConsumptionHandle}
                    required={true}
                  />
                  {err.wc != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.wc}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="solar">
                  <h6 className="lastdivheading">Solar Generation</h6>

                  <label className="consumption">Solar Generation:</label>
                  <br />
                  <input
                    type="text"
                    id="sg"
                    name="sg"
                    placeholder="Units"
                    value={solargeneration}
                    className="capacityinput"
                    onChange={solarGenerationHandle}
                    required={true}
                  />
                  {err.sg != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.sg}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="kebc">
                  <h6 className="lastdivheading">KEB Consumption</h6>

                  <label className="consumption">KEB Consumption:</label>
                  <br />
                  <input
                    type="text"
                    id="kc"
                    name="kc"
                    placeholder="Units"
                    value={kebconsumption}
                    className="capacityinput"
                    onChange={kebConsumptionHandle}
                    required={true}
                  />
                  {err.kc != null ? (
                    <p style={{ color: "red", fontSize: "11px" }}>{err.kc}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="submitbtn">
                <button type="submit" className="Button" onClick={showModal}>
                  Preview
                </button>
                {required? required : ''}
              </div>
            </div>
          </div>
          <Modal modalMessage={modalMessage} show={show} handleClose={hideModal} handleSubmit={submitForm} loadPage={refreshPage}>
            
       
           <h5>Generator 1</h5>
          
            <p>Capacity : {capacity}</p>
            <p>Generation : {generation}</p>
            <p>Time Run : {timerun}</p>
            <p>Diesel Consumption : {dieselconsumption}</p>
            <hr/>
            <h5>Generator 2</h5>
           
            <p>Capacity : {capacity2}</p>
            <p>Generation : {generation2}</p>
            <p>Time Run : {timerun2}</p>
            <p>Diesel Consumption : {dieselconsumption2}</p>
            {place === "Kabini" ? (
              <>
                    <hr/>
                <h5>Generator 3</h5>
          
                <p>Capacity : {capacity3}</p>
                <p>Generation : {generation3}</p>
                <p>Time Run : {timerun3}</p>
                <p>Diesel Consumption : {dieselconsumption3}</p>
          
              </>
            ) : (
              ""
            )}
               <hr/>  
            <h5>Rate Matrix</h5>
            
            <p>KEB : {kebrate}</p>
            <p>Fuel : {fuelrate}</p>
            <p>Water : {waterrate}</p>
            <p>LPG : {pngrate}</p>
            <hr/>
            <h5>Weather Parameters</h5>
            
            <p>Min Temp : {weathermin}</p>
            <p>Max Temp : {weathermax}</p>
            <p>Humidity : {humidity}</p>
            <hr/>
            <p>LPG Consumption : {kitchenpng}</p>
            <p>Water Consumption : { waterconsumption}</p>
            <p>Solar Generation : {solargeneration}</p>
            <p>KEB Consumption : {kebconsumption}</p>
        
            {modalMessage === "Data Submitted Successfully" ? (
              <p
                style={{
                  color: "#9A7033",
                  fontSize: "18px",
                  textAlign: "center",
                  fontFamily: "Georgia",
                }}
              >
                {modalMessage}
              </p>
            ) : (
              <p
                style={{
                  color: "red",
                  fontSize: "18px",
                  textAlign: "center",
                  fontFamily: "Georgia",
                }}
              >
                {modalMessage}
              </p>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Form;
