import React from 'react'
// import NavBar from './NavBar'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}


      <div className='' id='discover'>
        <div className='container'>
          <div className='bg-white rounded p-5'>

            <div className='text-center'>
              <small className='open '>OUR OPEN JOBS</small>
              <h1 className=' next'>Discover your next career <br />  move</h1>
            </div>

                <div className=' border p-4 mt-5 bg-body rounded' id='discoverShadow'>
            <div className="row  ">
              <div className="col-lg-6">
                      <p className='font-weight-bold'> STUDENT JOBS <span style={{ color: 'grey' }}>Intern</span></p>
                      <h4 className='font-weight-bold'>Assistant Field Marketing Agent </h4>
                      <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Lagos, NG </small>
                    </div>

              <div className="col-lg-6">
                    <div className='text-right mr-auto mb-3'>
                      <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small>
                    </div>
                </div>
              </div>
            </div>

                <div className=' border p-4 bg-body rounded mt-5' id='discoverShadow'>
            <div className="row  ">
              <div className="col-lg-6">
              <p className='font-weight-bold'> DATA ANALYST <span style={{ color: 'grey' }}>Full-Term</span></p>
                      <h4 className='font-weight-bold'>Jnr.Permanent Data Analyst </h4>
                      <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Delta, NG </small>
                    
                    </div>

              <div className="col-lg-6">
                    <div className='text-right mr-auto mb-3'>
                      <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small>
                    </div>
                  
                </div>
              </div>
            </div>

            <div className=' border p-4 mt-5 bg-body rounded' id='discoverShadow'>
        <div className="row ">
          <div className="col-lg-6">
          <p className='font-weight-bold'> Graphics Design  <span style={{ color: 'grey' }}>Part-Time</span></p>
                  <h4 className='font-weight-bold'>Jnr. Staff Product Manager</h4>
                  <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Abuja, NG </small>
                
                </div>

          <div className="col-lg-6">
                <div className='text-right mr-auto mb-3'>
                  <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small>
                </div>
              
            </div>
          </div>
        </div>
            {/* <div className="row mt-5">
              <div className="col-lg-12">
                <div className=' border p-2 bg-body rounded' id='discoverShadow'>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className='font-weight-bold'> DATA ANALYST <span style={{ color: 'grey' }}>Full-Term</span></p>
                      <h4 className='font-weight-bold'>Jnr.Permanent Data Analyst </h4>
                      <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Delta, NG </small>
                    </div>
                    <div>
                      <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="row mt-5">
              <div className="col-lg-12">
                <div className=' border p-2 bg-body rounded' id='discoverShadow'>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className='font-weight-bold'> Graphics Design  <span style={{ color: 'grey' }}>Part-Time</span></p>
                      <h4 className='font-weight-bold'>Jnr. Staff Product Manager </h4>
                      <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Abuja, NG </small>
                    </div>
                    <div>
                      <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>

      </div>


      {/* project in mind */}
      

<div className='bg-white p-5 mt-5' style={{   height:"80vh" }}>
<div className='mt-5' style={{ position: 'relative' }}>
  <div 
    className="mx-auto  d-flex justify-content-center align-items-center" id="pink">
      <i class="fa-solid fa-arrow-right text-white h1"></i>
  </div>
  
  <div 
    className="mx-auto d-flex justify-content-center align-items-center" id="colored"
    >
  </div>
  </div><br/><br/><br/><br/><br/><br/><br/>
  <p className='text-center h1 font-weight-bold'>Have any projects in mind? <br/>Get in touch with us!</p>
</div>


      <Footer />
    </>
  )
}

export default Home