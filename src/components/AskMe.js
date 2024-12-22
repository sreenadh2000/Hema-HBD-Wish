import { useState } from "react";
import { Container,Card,Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { JsonAnswers,JsonQuestions } from "../assets/data/ContentData";

const AskMe = () => {
  const [question,setQuestion] = useState("");
  const [ans,setAns] = useState("No Option Selected!");
  const changeHandler = (e) => {
    setQuestion(e.target.value);
  }

  const checkContentwithIndex = () => {
    const index = JsonQuestions.indexOf(question);
    let quetoFromAnswers ="";
    console.log("index ",index);
    if(index >= 0){
      quetoFromAnswers = JsonAnswers[index];
    }
    else{
      quetoFromAnswers = "No Option selected!";
    }
    setAns(quetoFromAnswers);
  }
    return(
        <Container className="ask-me mt-4" fluid>
            <h1 className="header mt-3 underline-arrow">Ask Me Any Question ?</h1>
            <Container className="mt-5">
                <h3 className=".fs-2">Q. Pick any Question from Here ?</h3>
            <Form.Select aria-label="Default select example" size="lg" className="select-input" value={question}
            onChange={changeHandler}>
        <option>Open this select menu</option>
        {
          JsonQuestions.map((itm,index) => <option value={itm} key={index}>{itm}</option>)
        }

    </Form.Select>
    <div className="mt-4 text-center">
    <Button className="response-btn border-0" onClick={() => {
      checkContentwithIndex();
    }}>Click for Response</Button>
    </div>
            </Container>
            <div className="mt-4">
        <Card className="card mt-5">
      <Card.Body className="align-self-center d-flex align-items-center fs-3">
        <Card.Text>
          {ans}
        </Card.Text>
      </Card.Body>
    </Card>
    <div className="footer text-end">
      </div>
    </div>
        </Container>
    )
}

export default AskMe;