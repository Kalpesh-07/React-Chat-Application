import {Button, Col, Container, Row} from "react-bootstrap";
const ChatSettingsTop = () =>{

   const handleSubmit = () => {
       console.log("logout")
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    };
    return (
          <form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 8 }}><Button type={"submit"} variant="danger" >Sign Out</Button></Col>
            </Row>
        </Container>
          </form>
    )
}

export default ChatSettingsTop

