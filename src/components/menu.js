import React from "react"
// import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'

const Menu = () => (
  <>
    <style type="text/css">
    {`
    .btn-menu {
      font-size: 1.3rem;
      background-color: #F000A0;
      color: white;
      margin: 3px 5px;
      padding: 5px 5px;
      //width: 8rem;
      outline-color: #F000A0;
    }
    `}
    </style>

    <div>
      <Container>
        <Row>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button href="/" className="btn-menu" block variant="outline-danger"><b>ホーム</b></Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button to="/02" className="btn-menu" block variant="outline-danger"><b>診療案内</b></Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button to="/03" className="btn-menu" block variant="outline-danger"><b>院内紹介</b></Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button to="/04" className="btn-menu" block variant="outline-danger"><b>スタッフ紹介</b></Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button to="/05" className="btn-menu" block variant="outline-danger"><b>アクセス</b></Button>
          </Col>
          <Col xs={12} sm={4} md={4} lg={2}>
            <Button to="/06" className="btn-menu" block variant="outline-danger"><b>お問い合わせ</b></Button>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)

export default Menu