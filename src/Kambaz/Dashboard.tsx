import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Full Stack software developer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/image1.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTF1250 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Design  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/image2.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3000 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Algorithms  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image3.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTF1234 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image4.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS2345 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/image5.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3456 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image6.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTG2262 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Prototyping with Code  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image7.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3540 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Game Programming  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
          </Col>


        </Row>
      </div>
    </div>
);}
