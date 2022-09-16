import React from 'react'
import Productsdata from '../Data/Productsdata'
import TableRow from '../BiotenicalNames/TableRow'
import Slogans from '../Home/Slogans'
function BotentialName() {
  
  return (
<>
<div className="breadcrumb-section breadcrumb-bg" >
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="breadcrumb-text">
          <p>We sale fresh items</p>
          <h1>BOTANICAL NAME</h1>
        </div>
      </div>
    </div>
  </div>
</div>
    <section className="shop-banner-empty">



  <div className="container" style={{ paddingLeft: 15, paddingTop: 20 }}>

  <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="nav-item nav-link active" id="pills-home-tab" data-toggle="pill" href="#herbs" role="tab" aria-controls="pills-home" aria-selected="true">HERBS</a>
    <a class="nav-item nav-link" id="pills-profile-tab" data-toggle="pill" href="#spices" role="tab" aria-controls="pills-profile" aria-selected="false">SPICES</a>
    <a class="nav-item nav-link" id="pills-contact-tab" data-toggle="pill" href="#dryfruits" role="tab" aria-controls="pills-contact" aria-selected="false">DRY FRUITS</a>
    <a class="nav-item nav-link" id="pills-home-tab" data-toggle="pill" href="#oils" role="tab" aria-controls="pills-home" aria-selected="true">OILS & EXTRACTS</a>
  
  
    <a class="nav-item nav-link" id="pills-profile-tab" data-toggle="pill" href="#gums" role="tab" aria-controls="pills-profile" aria-selected="false">GUMS</a>
  
 
    <a class="nav-item nav-link" id="pills-contact-tab" data-toggle="pill" href="#rice" role="tab" aria-controls="pills-contact" aria-selected="false">RICE, GRAINS AND PULSES</a>


    <a class="nav-item nav-link" id="pills-home-tab" data-toggle="pill" href="#salts" role="tab" aria-controls="pills-home" aria-selected="true">SALT & VINEGARS</a>


    <a class="nav-item nav-link" id="pills-profile-tab" data-toggle="pill" href="#murabbas" role="tab" aria-controls="pills-profile" aria-selected="false">MURRABAS </a>
 
    <a class="nav-item nav-link" id="pills-contact-tab" data-toggle="pill" href="#minerals" role="tab" aria-controls="pills-contact" aria-selected="false">MINERALS</a>
  </div>
</nav>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="herbs" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="table-responsive ">
    <h3 className="orange-text" style={{ fontSize: 30}}>HERBS</h3>
    {/* ============= Table =============== */}
    <table
      className="table table-bordered"
      style={{ fontFamily: '"Rajdhani", sans-serif' }}
    >
      <thead>
        <tr>
          <th scope="col" style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}>
            Code
          </th>
          <th scope="col" style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}>
            English
          </th>
          <th scope="col" style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}>
            Botanials Name
          </th>
          <th scope="col" style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}>
            Local Name
          </th>
          <th scope="col" style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}>
            Chinese Name
          </th>
        </tr>
      </thead>
      <tbody>
      {
           Productsdata.filter((items)=> items.Cat_name==="herbs").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
      </tbody>
    </table>
    </div>
  </div>
  <div class="tab-pane fade" id="spices" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="table-responsive ">
      <h3 className="orange-text" style={{ fontSize: 30}}>SPICES</h3>
      {/* ============= Table =============== */}
      <table
        className="table table-bordered"
        style={{ fontFamily: '"Rajdhani", sans-serif' }}
      >
        <thead>
          <tr>
            <th
              scope="col"
              style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
            >
              Code
            </th>
            <th
              scope="col"
              style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
            >
              English
            </th>
            <th
              scope="col"
              style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
            >
              Botanials Name
            </th>
            <th
              scope="col"
              style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
            >
              Local Name
            </th>
            <th
              scope="col"
              style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
            >
              Chinese Name
            </th>
          </tr>
        </thead>
        <tbody>
         {
           Productsdata.filter((items)=> items.Cat_name==="spices").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
        </tbody>
      </table>
      </div>
  </div>
  <div class="tab-pane fade" id="dryfruits" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="table-responsive ">
        <h3 className="orange-text" style={{ fontSize: 30}}>DRY FRUITS</h3>
        {/* ============= Table =============== */}
        <table
          className="table table-bordered"
          style={{ fontFamily: '"Rajdhani", sans-serif' }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
              >
                Code
              </th>
              <th
                scope="col"
                style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
              >
                English
              </th>
              <th
                scope="col"
                style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
              >
                Botanials Name
              </th>
              <th
                scope="col"
                style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
              >
                Local Name
              </th>
              <th
                scope="col"
                style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
              >
                Chinese Name
              </th>
            </tr>
          </thead>
          <tbody>
          {
           Productsdata.filter((items)=> items.Cat_name==="dryfruits").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
          </tbody>
        </table>
        </div>
  </div>
  <div class="tab-pane fade" id="oils" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="table-responsive ">
          <h3 className="orange-text" style={{ fontSize: 30}}>
            ESSENTIAL OILS &amp; EXTRACTS
          </h3>
          {/* ============= Table =============== */}
          <table
            className="table table-bordered"
            style={{ fontFamily: '"Rajdhani", sans-serif' }}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                >
                  Code
                </th>
                <th
                  scope="col"
                  style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                >
                  English
                </th>
                <th
                  scope="col"
                  style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                >
                  Botanials Name
                </th>
                <th
                  scope="col"
                  style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                >
                  Local Name
                </th>
                <th
                  scope="col"
                  style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                >
                  Chinese Name
                </th>
              </tr>
            </thead>
            <tbody>
            {
           Productsdata.filter((items)=> items.Cat_name==="oils").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
            </tbody>
          </table>
          </div>
  </div>
  <div class="tab-pane fade" id="gums" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div className="table-responsive ">
            <h3 className="orange-text" style={{ fontSize: 30}}>GUMS</h3>
            {/* ============= Table =============== */}
            <table
              className="table table-bordered"
              style={{ fontFamily: '"Rajdhani", sans-serif' }}
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                  >
                    Code
                  </th>
                  <th
                    scope="col"
                    style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                  >
                    English
                  </th>
                  <th
                    scope="col"
                    style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                  >
                    Botanials Name
                  </th>
                  <th
                    scope="col"
                    style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                  >
                    Local Name
                  </th>
                  <th
                    scope="col"
                    style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                  >
                    Chinese Name
                  </th>
                </tr>
              </thead>
              <tbody>
              {
           Productsdata.filter((items)=> items.Cat_name==="gums").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
              </tbody>
            </table>
            </div>
  </div>
  <div class="tab-pane fade" id="rice" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div className="table-responsive ">
              <h3 className="orange-text" style={{ fontSize: 30}}>
                RICE, GRAINS AND PULSES
              </h3>
              {/* ============= Table =============== */}
              <table
                className="table table-bordered"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                    >
                      English
                    </th>
                    <th
                      scope="col"
                      style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                    >
                      Botanials Name
                    </th>
                    <th
                      scope="col"
                      style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                    >
                      Local Name
                    </th>
                    <th
                      scope="col"
                      style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                    >
                      Chinese Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
           Productsdata.filter((items)=> items.Cat_name==="gums").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
                </tbody>
              </table>
              </div>
  </div>
  <div class="tab-pane fade" id="salts" role="tabpanel" aria-labelledby="pills-home-tab">
  <div className="table-responsive ">
                <h3 className="orange-text" style={{ fontSize: 30}}>
                  SALT &amp; VINEGARS
                </h3>
                {/* ============= Table =============== */}
                <table
                  className="table table-bordered"
                  style={{ fontFamily: '"Rajdhani", sans-serif' }}
                >
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                      >
                        Code
                      </th>
                      <th
                        scope="col"
                        style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                      >
                        English
                      </th>
                      <th
                        scope="col"
                        style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                      >
                        Botanials Name
                      </th>
                      <th
                        scope="col"
                        style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                      >
                        Local Name
                      </th>
                      <th
                        scope="col"
                        style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                      >
                        Chinese Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {
           Productsdata.filter((items)=> items.Cat_name==="salt").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
                  </tbody>
                </table>
                </div>
  </div>
  <div class="tab-pane fade" id="murabbas" role="tabpanel" aria-labelledby="pills-profile-tab"><div className="table-responsive ">
                  <h3 className="orange-text" style={{ fontSize: 30}}>
                    MURRABAS (FRUIT PRESERVES IN SUGAR SYRUP)
                  </h3>
                  {/* ============= Table =============== */}
                  <table
                    className="table table-bordered"
                    style={{ fontFamily: '"Rajdhani", sans-serif' }}
                  >
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                        >
                          Code
                        </th>
                        <th
                          scope="col"
                          style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                        >
                          English
                        </th>
                        <th
                          scope="col"
                          style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                        >
                          Botanials Name
                        </th>
                        <th
                          scope="col"
                          style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                        >
                          Local Name
                        </th>
                        <th
                          scope="col"
                          style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                        >
                          Chinese Name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
           Productsdata.filter((items)=> items.Cat_name==="murabbas").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
                    </tbody>
                  </table>
                  </div></div>
  <div class="tab-pane fade" id="minerals" role="tabpanel" aria-labelledby="pills-contact-tab"><div className="table-responsive ">
                    <h3 className="orange-text" style={{ fontSize: 30}}>MINERALS</h3>
                    {/* ============= Table =============== */}
                    <table
                      className="table table-bordered"
                      style={{ fontFamily: '"Rajdhani", sans-serif' }}
                    >
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                          >
                            Code
                          </th>
                          <th
                            scope="col"
                            style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                          >
                            English
                          </th>
                          <th
                            scope="col"
                            style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                          >
                            Botanials Name
                          </th>
                          <th
                            scope="col"
                            style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                          >
                            Local Name
                          </th>
                          <th
                            scope="col"
                            style={{ fontSize: 24, backgroundColor: "#e6e5e5" }}
                          >
                            Chinese Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {
           Productsdata.filter((items)=> items.Cat_name==="minerals").map((fildata)=>(
           
            <TableRow 
              key={fildata.id}
             
              code={fildata.code}
              english_name={fildata.english_name}
              bot_name={fildata.botenical_name}
              chns_name={fildata.chniese_name}
              local_name={fildata.local_name}

            />
           ))
         }
                      </tbody>
                    </table>
                    </div></div>
</div>


  
   
      
       
         
            
              
                
                  
                  </div>
         
  </section>
  <Slogans/>
  </>
  )
}

export default BotentialName