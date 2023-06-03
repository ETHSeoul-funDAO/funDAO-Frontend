import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted' >

      <section className='' style={{color: "white"}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                FunDao
              </h6>
              <p>
              Become part of a vast community of projects leveraging fundDao to transparently fund, operate, and expand their ideas and communities on the various network.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  History
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                ETH Seoul, KR
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hiethseoul@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 82 10 1324 5768
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 82 10 1324 5768
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: funDAO
        <a className='text-reset fw-bold' href='youtube.com'>
          youtube.com
        </a>
      </div>
    </MDBFooter>
  );
}


export default Footer;
