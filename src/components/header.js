import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <>
    <style type="text/css">
    {`
    .bg-header-color {
      background-color: #F000A0;
      color: white;
      margin: 5px 0px 5px 0px;
      padding: 5px 5px 5px;
    }
    .container {
      margin: 5px;
      padding: 5px;
    }
    .text-title {
      font-size: 3.5rem;
      color: white;
      margin: 0px;
      padding: 0px;
    }
    .text-sub {
      font-size: 1rem;
      color: white;
      margin: 5px 5px;
      padding: 5px 2px;
    }
    `}
    </style>

    <header className="bg-header-color">
      <Container className="container">
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Link to="/" className="text-title"><b>{siteTitle}</b></Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div style={{textAlign: "right"}}>
              <Link to="/" className="text-sub">
                <b>〒XXX-XXXX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                XX県XX市XX X-XX-XX</b>
              </Link>
              <br />
              <Link to="/" className="text-sub text-right"><b>XXX-XXX-XXXX</b></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  </>
)

//Header.propTypes = {
//  siteTitle: PropTypes.string,
//}
//
//Header.defaultProps = {
//  siteTitle: ``,
//}

export default Header