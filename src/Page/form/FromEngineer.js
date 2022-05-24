import React, { useState } from 'react'
import './Form.css';
import axios from 'axios'
import DevelopmentUrl from '../../data/api';
import imglogo from '../../image/logo.png'

const Modal = ({ handleClose, show, loadPage, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const value = children.props.children
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        {value === "Data Submitted Successfully" ?
          <button className='btnmodalsuccess'
            onClick={loadPage}
          >
            Ok
          </button>
          :
          <button className='btnmodal'
            onClick={handleClose}
          >
            Try Again
          </button>
        }
      </section>
    </div>
  );
};
const Form = () => {
  let data, dateToday;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  dateToday = yyyy + '-' + mm + '-' + dd;

  const token = localStorage.getItem("token");
  const place = localStorage.getItem("location");
  const [capacity, setCapacity] = useState()
  const [generation, setGeneration] = useState()
  const [timerun, setRunTime] = useState()
  const [dieselconsumption, setDieselConsumption] = useState()

  const [capacity2, setCapacity2] = useState()
  const [generation2, setGeneration2] = useState()
  const [timerun2, setRunTime2] = useState()
  const [dieselconsumption2, setDieselConsumption2] = useState()

  const [capacity3, setCapacity3] = useState()
  const [generation3, setGeneration3] = useState()
  const [timerun3, setRunTime3] = useState()
  const [dieselconsumption3, setDieselConsumption3] = useState()

  const [kebrate, setKebRate] = useState()
  const [fuelrate, setFuelRate] = useState()
  const [waterrate, setWaterRate] = useState()
  const [pngrate, setPngRate] = useState()

  const [weathermin, setMinTempurature] = useState()
  const [weathermax, setMaxTemperature] = useState()
  const [humidity, setHumidity] = useState()

  const [kitchenpng, setKitchenpng] = useState()
  const [waterconsumption, setWaterConsumption] = useState()
  const [solargeneration, setSolarGeneration] = useState()
  const [kebconsumption, setKebConsumption] = useState()

  const [err, setErr] = useState({});
  
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  // const [isDisabled, setisDisabled] = useState(true);

  const validate = (name, value) => {
    const re = /^[0-9\b]+$/;

    switch (name) {
      case "capacity1":
        if (!value || value.trim() === "") {
          setErr({ capacity1: "Capacity is required" });
          
        }
        else if (!re.test(value)) {
          setErr({ capacity1: "Only numeric value allowed" });
          
        }
        else {
          setErr("");
          setCapacity(value)
          
        }
        break;
      case "generation1":
        if (!value || value.trim() === "") {
          setErr({ generation1: "Generation is required" });
          
        }
        else if (!re.test(value)) {
          setErr({ generation1: "Only numeric value allowed" });
          
        }
        else {
          setErr("");
          setGeneration(value)
          
        }
        break;
      case "timerun1":
        if (!value || value.trim() === "") {
          setErr({ timerun1: "Time Run is required" });
          
        } else {
          setErr("");
          setRunTime(value);
          
        }
        break;
      case "diesel1":
        if (!value || value.trim() === "") {
          setErr({ diesel1: "Diesel Consumption is required" });
        
        } else if (!re.test(value)) {
          setErr({ diesel1: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setDieselConsumption(value);
          
        }
        break;
      case "capacity2":
        if (!value || value.trim() === "") {
          setErr({ capacity2: "Capacity is required" });
          
        } else if (!re.test(value)) {
          setErr({ capacity2: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setCapacity2(value);
          
        }
        break;
      case "generation2":
        if (!value || value.trim() === "") {
          setErr({ generation2: "Generation is required" });
      
        } else if (!re.test(value)) {
          setErr({ generation2: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setGeneration2(value);
          
        }
        break;
      case "timerun2":
        if (!value || value.trim() === "") {
          setErr({ timerun2: "Time Run is required" });
          
        } else {
          setErr("");
          setRunTime2(value);
          
        }
        break;
      case "diesel2":
        if (!value || value.trim() === "") {
          setErr({ diesel2: "Diesel Consumption is required" });
          
        } else if (!re.test(value)) {
          setErr({ diesel2: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setDieselConsumption2(value);
          
        }
        break;
      case "capacity3":
        if (!value || value.trim() === "") {
          setErr({ capacity3: "Capacity is required" });
          
        } else if (!re.test(value)) {
          setErr({ capacity3: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setCapacity3(value);
          
        }
        break;
      case "generation3":
        if (!value || value.trim() === "") {
          setErr({ generation3: "Generation is required" });
          
        } else if (!re.test(value)) {
          setErr({ generation3: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setGeneration3(value);
          
        }
        break;
      case "timerun3":
        if (!value || value.trim() === "") {
          setErr({ timerun3: "Time Run is required" });
          
        } else {
          setErr("");
          setRunTime3(value);
          
        }
        break;
      case "diesel3":
        if (!value || value.trim() === "") {
          setErr({ diesel3: "Diesel Consumption is required" });
        
        } else if (!re.test(value)) {
          setErr({ diesel3: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setDieselConsumption3(value);
          
        }
        break;
      case "keb":
        if (!value || value.trim() === "") {
          setErr({ keb: "KEB is required" });
          
        } else if (!re.test(value)) {
          setErr({ keb: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setKebRate(value);
          
        }
        break;
      case "fuel":
        if (!value || value.trim() === "") {
          setErr({ fuel: "Fuel is required" });
          
        } else if (!re.test(value)) {
          setErr({ fuel: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setFuelRate(value);
          
        }
        break;
      case "water":
        if (!value || value.trim() === "") {
          setErr({ water: "Water is required" });
          
        } else if (!re.test(value)) {
          setErr({ water: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setWaterRate(value);
          
        }
        break;
      case "png":
        if (!value || value.trim() === "") {
          setErr({ png: "PNG is required" });
          
        } else if (!re.test(value)) {
          setErr({ png: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setPngRate(value);
          
        }
        break;
      case "min":
        if (!value || value.trim() === "") {
          setErr({ min: "Min Temperature is required" });
          
        } else if (!re.test(value)) {
          setErr({ min: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setMinTempurature(value);
          
        }
        break;
      case "max":
        if (!value || value.trim() === "") {
          setErr({ max: "Max Temperature is required" });
         
        } else if (!re.test(value)) {
          setErr({ max: "Only numeric value allowed" });
          
        } else if (weathermin >= value) {
          setErr({ max: "Max Temp must be greater than Min Temp" });
          
        } else {
          setErr("");
          setMaxTemperature(value);
          
        }
        break;
      case "humidity":
        if (!value || value.trim() === "") {
          setErr({ humidity: "Humidity is required" });
          
        } else if (!re.test(value)) {
          setErr({ humidity: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setHumidity(value);
          
        }
        break;
      case "pc":
        if (!value || value.trim() === "") {
          setErr({ pc: "PNG Consumption is required" });
          
        } else if (!re.test(value)) {
          setErr({ pc: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setKitchenpng(value);
          
        }
        break;
      case "wc":
        if (!value || value.trim() === "") {
          setErr({ wc: "Water Consumption is required" });
          
        } else if (!re.test(value)) {
          setErr({ wc: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setWaterConsumption(value);
          
        }
        break;
      case "sg":
        if (!value || value.trim() === "") {
          setErr({ sg: "Solar Generation is required" });
          
        } else if (!re.test(value)) {
          setErr({ sg: "Only numeric value allowed" });
        
        } else {
          setErr("");
          setSolarGeneration(value);
          
        }
        break;
      case "kc":
        if (!value || value.trim() === "") {
          setErr({ kc: "KEB Consumption is required" });
          
        } else if (!re.test(value)) {
          setErr({ kc: "Only numeric value allowed" });
          
        } else {
          setErr("");
          setKebConsumption(value);
        
        }
        break;
      default: {
        return "";
      }
    }
  };

  const showModal = () => {
    setShow(true);
  }

  const hideModal = () => {
    setShow(false);
  }

  const refreshPage = () => {

    window.location.reload();
  }

  const submitForm = (e) => {
    e.preventDefault();
   
    if (place === 'Kabini') {
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
            dieselconsumption: dieselconsumption
          },
          {
            generatorname: "Generator 2",
            capacity: capacity2,
            generation: generation2,
            timerun: timerun2,
            dieselconsumption: dieselconsumption2
          },
          {
            generatorname: "Generator 3",
            capacity: capacity3,
            generation: generation3,
            timerun: timerun3,
            dieselconsumption: dieselconsumption3
          }

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
        kebconsumption: kebconsumption

      }
    }
    else {
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
            dieselconsumption: dieselconsumption
          },
          {
            generatorname: "Generator 2",
            capacity: capacity2,
            generation: generation2,
            timerun: timerun2,
            dieselconsumption: dieselconsumption2
          }

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
        solargeneration: solargeneration

      }
    }
    axios.post(`${DevelopmentUrl}/consume`, data, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        console.log(res)
        setModalMessage("Data Submitted Successfully");
        // alert("Form submitted successfully");
      }
      )

      .catch(err => {
        console.log(err)
        setModalMessage("Something went wrong!!");
        // alert("Something went wrong!!");
      });

  }

  return (
    <>
      <div className='mainContainer1'>
        <div className='logoimg1'>
          <img src={imglogo} alt="logo" />
        </div>
        <div className='containermain'>

          <div className='heading'>
            <h2 className='title'>Daily Power Consumption Log {dateToday} </h2>

          </div>

          <form className='form ' onSubmit={submitForm}>
            <div className='selectiondiv'>
              <h3 style={{ color: "#9A7036" }}>{place}</h3>
            </div>

            <div className='main2'>
              <div className='heading'>
                <h4 className='subtitle1'>Generator Usage</h4>
              </div>
              <h6 className='generator1'> Generator 1</h6>
              <div className='generator '>
                <div className='inputlablegenerator'>
                  <label className='capacity'>Capacity:</label><br />
                  <input type="text" id="capacity1" name="capacity1" placeholder="KVA" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.capacity1 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.capacity1}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Generation:</label><br />
                  <input type="text" id="generation1" name="generation1" placeholder="KVA" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.generation1 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.generation1}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Time Run:</label><br />
                  <input type="text" id="timerun1" name="timerun1" placeholder="HM:MM" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.timerun1 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.timerun1}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Diesel Consumption:</label><br />
                  <input type="text" id="diesel1" name="diesel1" placeholder="In Liters" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.diesel1 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.diesel1}</p> : ''}
                </div>


              </div>


              <h6 className='generator1'> Generator 2</h6>
              <div className='generator '>
                <div className='inputlablegenerator'>


                  <label className='capacity'>Capacity:</label><br />
                  <input type="text" id="capacity2" name="capacity2" placeholder="KVA" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.capacity2 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.capacity2}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Generation:</label><br />
                  <input type="text" id="generation2" name="generation2" placeholder="unit" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.generation2 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.generation2}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Time Run:</label><br />
                  <input type="text" id="timerun2" name="timerun2" placeholder="HH:MM" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.timerun2 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.timerun2}</p> : ''}
                </div>
                <div className='inputlablegenerator'>

                  <label className='capacity'>Diesel Consumption:</label><br />
                  <input type="text" id="diesel2" name="diesel2" placeholder="In Liters" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.diesel2 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.diesel2}</p> : ''}
                </div>
              </div>

              {
                (place === 'Kabini') ?
                  <>

                    <h6 className='generator1'> Generator 3</h6>
                    <div className='generator '>
                      <div className='inputlablegenerator'>


                        <label className='capacity'>Capacity:</label><br />
                        <input type="text" id="capacity3" name="capacity3" placeholder="KVA" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                        {err.capacity3 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.capacity3}</p> : ''}

                      </div>
                      <div className='inputlablegenerator'>

                        <label className='capacity'>Generation:</label><br />
                        <input type="text" id="generation3" name="generation3" placeholder="unit" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                        {err.generation3 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.generation3}</p> : ''}
                      </div>
                      <div className='inputlablegenerator'>

                        <label className='capacity'>Time Run:</label><br />
                        <input type="text" id="timerun3" name="timerun3" placeholder="HH:MM" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                        {err.timerun3 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.timerun3}</p> : ''}
                      </div>
                      <div className='inputlablegenerator'>

                        <label className='capacity'>Diesel Consumption:</label><br />
                        <input type="text" id="diesel3" name="diesel3" placeholder="In Liters" className='capacityinput1' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                        {err.diesel3 != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.diesel3}</p> : ''}
                      </div>
                    </div>
                  </>
                  :
                  null

              }
              <div className='heading'>
                <h4 className='rate1'>Rate Matrix</h4>
              </div>
              <div className='generator margindiv '>
                <div className='margindiv'>
                  <label className='capacity'>KEB:</label> <br />
                  <input type="text" id="keb" name="keb" placeholder="Rate/Unit" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.keb != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.keb}</p> : ''}
                </div>
                <div className='margindiv'>
                  <label className='capacity'>Fuel:</label><br />
                  <input type="text" id="fuel" name="fuel" placeholder="Rate/Unit" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.fuel != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.fuel}</p> : ''}
                </div>
                <div className='margindiv'>
                  <label className='capacity'>Water:</label><br />
                  <input type="text" id="water" name="water" placeholder="Rate/Unit" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.water != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.water}</p> : ''}
                </div>
                <div className='margindiv'>
                  <label className='capacity'>PNG:</label><br />
                  <input type="text" id="png" name="png" placeholder="Rate/Unit" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.png != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.png}</p> : ''}
                </div>
              </div>
              <div className='heading'>
                <h4 className='weather1'>Weather Parameters</h4>
              </div>
              <div className='generator margindiv'>
                <div className='margindiv'>
                  <label className='capacity'>Min:</label> <br />
                  <input type="text" id="min" name="min" placeholder="Celsius" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.min != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.min}</p> : ''}
                </div>
                <div className='margindiv'>
                  <label className='capacity'>Max:</label> <br />
                  <input type="text" id="max" name="max" placeholder="Celsius" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.max != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.max}</p> : ''}
                </div>
                <div className='margindiv'>
                  <label className='capacity'>Humidity:</label> <br />

                  <input type="text" id="humidity" name="humidity" placeholder="Percentage" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.humidity != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.humidity}</p> : ''}
                </div>
              </div>

              <div className='flex-container'>
                <div >
                  <h6 className='lastdivheading'>Kitchen PNG</h6>

                  <label className='consumption'>PNG Consumption:</label><br />
                  <input type="text" id="pc" name="pc" placeholder="KG" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.pc != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.pc}</p> : ''}
                </div>
                <div>
                  <h6 className='lastdivheading'>Water Consumption</h6>

                  <label className='consumption' >water consumption:</label><br />
                  <input type="text" id="wc" name="wc" placeholder="IN KL" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.wc != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.wc}</p> : ''}
                </div>
                <div className='solar' >
                  <h6 className='lastdivheading'>Solar Generation</h6>

                  <label className='consumption' >Solar Generation:</label><br />
                  <input type="text" id="sg" name="sg" placeholder="Units" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.sg != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.sg}</p> : ''}
                </div>
                <div className='kebc' >
                  <h6 className='lastdivheading' >KEB Consumption</h6>

                  <label className='consumption'>KEB Consumption:</label><br />
                  <input type="text" id="kc" name="kc" placeholder="Units" className='capacityinput' onChange={(e) => { validate(e.target.name, e.target.value) }} />
                  {err.kc != null ? <p style={{ color: "red", fontSize: "11px" }}>{err.kc}</p> : ''}
                </div>
              </div>


              <div className='submitbtn'>

                <button type="submit" className='Button' onClick={showModal}>Submit</button>

              </div>

            </div>

          </form>
          <Modal show={show} handleClose={hideModal} loadPage={refreshPage}>
            {modalMessage === "Data Submitted Successfully" ?
              <p style={{ color: "#9A7033", fontSize: "18px", textAlign: "center", fontFamily: "Georgia" }}>{modalMessage}</p>

              :
              <p style={{ color: "red", fontSize: "18px", textAlign: "center", fontFamily: "Georgia" }}>{modalMessage}</p>
            }

          </Modal>
        </div>


      </div>
    </>



  )
}

export default Form;