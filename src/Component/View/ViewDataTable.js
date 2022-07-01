import React, { useEffect, useState } from 'react';
import usePagination from '../Pagination/Pagination';
import "./ViewDataTable.css"
import axios from "axios";
import { Pagination, Stack } from '@mui/material';
import DevelopmentUrl from "../../data/api";
import imglogo from '../../image/logo.png'


const Modal = ({ modal, hide, children }) => {
  const showHideClassName = modal ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main-gm-data' style={{height: "auto"}}>
      <i className="fa fa-times iconcross "      onClick={hide} ></i>
        <p>{children}</p>
     
      </section>
    </div>
  );
};

function ViewDataTable() {

  const token = localStorage.getItem("token");

  const [datefrom, setDatefrom] = useState();
  const [dateto, setDateto] = useState();
  const [location, setLocation] = useState();
  const [consumeData, setConsumeData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState(false);
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

  const locationHandleChange = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    axios.get(DevelopmentUrl + '/consume/approve', {
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
        el.date <= dateto
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

  const [modal, setModal] = useState(false);
  const [showRemark, setShowRemark] = useState();
  const showModal = (remark) => {
    setModal(true);
    setShowRemark(remark)
  }

  const hideModal = () => {
    setModal(false);

  }


  return (
    <>
      <div className='mainContainer'>
        <div className='logoimg2'>
          <img src={imglogo} />
        </div>
        <div className='table-responsive'>

          <div className='maindiv' style={{ display: "flex" }}>


            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>Choose Property</label>
              <br />
              <select name="Property" className='form-control' onChange={locationHandleChange}>
                <option >Select Property</option>
                <option value="Coorg">Coorg</option>
                <option value="Hampi">Hampi</option>
                <option value="Kabini">Kabini</option>

              </select>

            </div>
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>From Date</label><br />
              <input type="date" className='form-control ' max={new Date().toISOString().split("T")[0]} onChange={datefromHandleChange} />
            </div>
            <div className='lbl'>
              <label style={{ color: "#F1844D", fontSize: "14px" }}>To Date</label>
              <br />
              <input type="date" className='form-control ' max={new Date().toISOString().split("T")[0]} onChange={datetoHandleChange} />
              {datefrom > dateto ? <p style={{ fontSize: "12px", color: "#F1844D", fontWeight: "bold" }}>To Date must be greater than From Date</p> : ''}
            </div>
            <button disabled={(datefrom > dateto)} className='btnsearch' onClick={submitHandler}>Search</button>

          </div>
          <br />

          {
            filter.length > 0 && datefrom <= dateto ? <>
              {/* <button className='btnsearch' style={{marginl}}>Export Data</button> */}
              <table >
                <tr>
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
                  <th>Kitchen (LPG)</th>
                  <th>Water consumption</th>
                  <th>Weather Parameters</th>
                  <th>Rate Matrix</th>
                  <th>Solar Generation</th>
                  <th>Remarks</th>
                </tr>

                <tbody>
                  {_DATA.currentData().map((data) => {
                    return (
                      <>
                        <tr>
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
                                          }}>{details.dieselconsumption} Ltrs</td>
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
                              }}>LPG </td>
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
                          {data.remark === '' ? 
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>
                              <p>No Remarks</p>
                          </td>
                           :
                          <td style={{
                            fontSize: "12px",
                            fontFamily: "Georgia, Regular"
                          }}>
                              <button className='btnpending' onClick={()=> showModal(data.remark)}>View</button>

                          </td>
                        }  
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
        <Modal modal={modal} hide={hideModal}>

          
          <p className='textviewdatatable ' >{showRemark}</p>
        </Modal>

      </div>

    </>
  )
}

export default ViewDataTable