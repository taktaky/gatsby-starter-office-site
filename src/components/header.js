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
    }
    .text-title {
      font-size: 3.5rem;
      color: white;
      margin: 5px 5px;
      padding: 5px 2px;
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
      <Container>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Link to="/" className="text-title"><b>{siteTitle}</b></Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div style={{textAlign: "right"}}>
              <Link to="/" className="text-sub">
                <b>〒279-0004&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                千葉県浦安市猫実3-28-28</b>
              </Link>
              <br />
              <Link to="/" className="text-sub text-right"><b>047-382-0303</b></Link>
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