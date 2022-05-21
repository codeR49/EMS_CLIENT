import React, { useEffect, useState } from 'react';
import usePagination from '../Pagination/Pagination';
import "./ViewDataTable.css"
import axios from "axios";
import { Pagination, Stack } from '@mui/material';
import DevelopmentUrl from "../../data/api";
import imglogo from '../../image/logo.png'


const Modal = ({ modal, handleClose, children, approve, disapprove, showId }) => {
  const showHideClassName = modal ? 'modal display-block' : 'modal display-none';
  // console.log(showId);
  
  
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <p>{children}</p>
        
        <button className='btnapprove'
          onClick={() => approve(showId)}>
          Approve
        </button>

        <button   className='btnmdl'
          onClick={() => disapprove(showId)}>
          DisApprove
        </button>
      </section>
    </div>
  );
};

function GmViewDataTable() {
  const token = localStorage.getItem("token");
  const location = localStorage.getItem("location");
  const [datefrom, setDatefrom] = useState();
  const [dateto, setDateto] = useState();
  const [consumeData, setConsumeData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);

  const [showId, setShowId] = useState();
  let [page, setPage] = useState(1);
  const PER_PAGE = 15;

  const datefromHandleChange = (e) => {
    setDatefrom(e.target.value);
    console.log(e.target.value);
  }

  const datetoHandleChange = (e) => {
    setDateto(e.target.value);
    console.log(e.target.value);
  }

  const [modal, setModal] = useState(false);
  const showModal = (id) => {
    setModal(true);
    setShowId(id)
  }

  const hideModal = () => {
    setModal(false);

  }

  useEffect(() => {
    axios.get(DevelopmentUrl + '/consume', {
      headers: {

        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        setConsumeData(res.data);
        console.log(res.data);
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }, [])

  const submitHandler = () => {
    let filterArray = consumeData.filter(function (el) {
      return el.location === location &&
        el.date >= datefrom &&
        el.date <= dateto// Changed this so a home would match
    });
    filterArray.length > 0 ? setShow(false) : setShow(true)
    setFilter(filterArray);
  }

  const count = Math.ceil(filter.length / PER_PAGE);
  const _DATA = usePagination(filter, PER_PAGE);

  const handleChange = (e, p) => {

    setPage(p);
    _DATA.jump(p);

  };

  const approve = (id) => {
    // console.log(id);
    
    let formdata = {
      status: true
    };


    axios.put(DevelopmentUrl + `/consume/approvedisapprove/${id}`, formdata, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        console.log(res)
        // setShowApprove(true);
      })
      .catch(err => console.log(err));

  }

  const disapprove = (id) => {
    // console.log(id);
    let formdata = {
      status: false
    };


    axios.put(DevelopmentUrl + `/consume/approvedisapprove/${id}`, formdata, {
      headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${token}`
      }
    })
      .then(res => {
        console.log(res)
        // setShowApprove(true);
      })
      .catch(err => console.log(err));

  }

  function Mybutton({ value, onClick, style }) {
    return (<button style={{
      backgroundColor: `${style}`, cursor: "pointer", border: "none", color: "white", width: "80px", borderRadius: "4px", height: "30px", marginleft: "5px",
      marginright: "5px",
    }}
      onClick={() => onClick()}
    >
      {value}
    </button>)
  }


  return (
    <>
      <div className='mainContainer'>
        <div className='logoimg2'>
          <img src={imglogo} />
        </div>
        <div className='table-responsive'>

          <h3 style={{ textAlign: "center", color: "#F1844D", fontSize: "20px" }}>
            {location}
          </h3>
          <div className='maindiv' style={{ display: "flex" }}>


            {/* <div>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>Choose Property</label>
              <br />
              <select name="Property" className='form-control' onChange={locationHandleChange}>
                <option >Select Property</option>
                <option value="Coorg">Coorg</option>
                <option value="Hampi">Hampi</option>
                <option value="Kabini">Kabini</option>

              </select>

            </div> */}
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>From Date</label><br />
              <input type="date" className='form-control ' max={new Date().toISOString().split("T")[0]} onChange={datefromHandleChange} />
            </div>
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>To Date</label>
              <br />
              <input type="date" className='form-control ' max={new Date().toISOString().split("T")[0]} onChange={datetoHandleChange} />
            </div>
            <button className='btnsearch' onClick={submitHandler}>Search</button>

          </div>
          <br />

          {
            filter.length > 0 ? <>
              {/* <button className='btnexport' >Export Data</button> */}
              <table >
                <tr>
                  <th >Action</th>
                  <th>Date</th>
                  <th >Time</th>
                  <th >KEB Consumption (in Units)</th>
                  <th>Generator Usage

                    <table>
                      <th>Generator Name</th>
                      <th>Capacity</th>
                      <th>Generation</th>
                      <th>Time Run</th>
                      <th>Diesel Consumption</th>
                    </table>

                  </th>
                  <th>Kitchen (PNG)</th>
                  <th>Water consumption</th>
                  <th>Weather Parameters</th>
                  <th>Rate Matrix</th>
                  <th>Solar Generation</th>
                </tr>

                <tbody>
                  {_DATA.currentData().map((data) => {
                    return (
                      <>
                        <tr>

                          <td>
                          {data.status === true ? "Approved": <button type="submit" onClick={() => showModal(data._id)}>Pending</button>}
                          
                            {/* <Mybutton onClick={() => approve(data._id)} value={data.status == false ? showApprove : "Approved"} style={data.status == false ? "#9A7036" : "#F1844D"} /> */}
                          </td>
                          {/* {console.log(typeof(data.date))} */}
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.date}</td>
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.timeofrecording}</td>
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.keb}</td>
                          <td>
                            <table>

                              <tr>


                                <table>

                                  {data.generator.map((details) => {
                                    return (
                                      <>
                                        <tr>
                                          <td style={{
                                            fontSize: "12px",
                                            fontFamily: "Georgia, Regular"
                                          }}>{details.generatorname}</td>
                                          <td style={{
                                            fontSize: "12px",
                                            fontFamily: "Georgia, Regular"
                                          }}>{details.capacity}</td>
                                          <td style={{
                                            fontSize: "12px",
                                            fontFamily: "Georgia, Regular"
                                          }}>{details.generation}</td>
                                          <td style={{
                                            fontSize: "12px",
                                            fontFamily: "Georgia, Regular"
                                          }}>{details.timerun} Hr</td>
                                          <td style={{
                                            fontSize: "12px",
                                            fontFamily: "Georgia, Regular"
                                          }}>{details.dieselconsumption.$numberDecimal} Ltrs</td>
                                        </tr>

                                      </>
                                    )
                                  })}

                                  <tr>
                                    {/* <td></td> */}
                                    <td colSpan="2" style={{
                                      fontSize: "12px",
                                      fontFamily: "Georgia, Regular"
                                    }}>Total</td>
                                    <td style={{
                                      fontSize: "12px",
                                      fontFamily: "Georgia, Regular"
                                    }}>{data.total[0].totalGeneration}</td>
                                    <td style={{
                                      fontSize: "12px",
                                      fontFamily: "Georgia, Regular"
                                    }}>{data.total[0].totalTimeRun} Hr</td>
                                    <td style={{
                                      fontSize: "12px",
                                      fontFamily: "Georgia, Regular"
                                    }}>{data.total[0].dieselConsumption} Ltrs</td>
                                  </tr>

                                </table>



                              </tr>
                            </table>
                          </td>
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.kitchenpng} Kg</td>
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.waterconsumption} Ltrs</td>
                          <td>
                            <table>
                              <tr>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>MIN </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>{data.weathermin}</td>
                              </tr>
                              <tr>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>MAX </td>

                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}> {data.weathermax}</td>
                              </tr>
                              <tr>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>Humidity </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }} >{data.humidity}</td>
                              </tr>

                            </table>

                          </td>

                          <td>
                            <table >
                              <tr>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>KEB </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>{data.kebrate.$numberDecimal}</td>
                              </tr>
                              <tr><td style={{
                                fontSize: "12px",
                                fontFamily: "Georgia, Regular"
                              }}>Fuel </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>{data.fuelrate.$numberDecimal}</td>
                              </tr>
                              <tr><td style={{
                                fontSize: "12px",
                                fontFamily: "Georgia, Regular"
                              }}>Water </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>{data.waterrate.$numberDecimal}</td>
                              </tr>
                              <tr><td style={{
                                fontSize: "12px",
                                fontFamily: "Georgia, Regular"
                              }}>PNG </td>
                                <td style={{
                                  fontSize: "12px",
                                  fontFamily: "Georgia, Regular"
                                }}>{data.pngrate.$numberDecimal}</td>
                              </tr>
                            </table>

                          </td>
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>{data.solargeneration}</td>
                        </tr>
                      </>
                    )
                  })}

                </tbody>


              </table>
              <Stack>
                <Pagination
                  count={count}
                  size="large"
                  page={page}

                  color="secondary"
                  shape="rounded"
                  onChange={handleChange}
                />
              </Stack>
            </> : show ? <p>Data Not Found </p> : ""

          }




        </div>

        <Modal modal={modal} handleClose={hideModal} showId={showId} approve={approve} disapprove={disapprove}>

          <p style={{textAlign:"center"}}>Do you want to approve</p>

        </Modal>
      </div>

    </>
  )
}

export default GmViewDataTable