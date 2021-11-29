import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Axios from 'axios';
import './Moldreq.css';
import Url from "../services/Url";

function MoldReq() {

  const url = Url.urlInsertMold;
  const [data, setData] = useState({
    form_number: "",
    document_number: "",
    request_date: "",
    design_type: "",
    design_kind: "",
    project_type: "",
    part_name: "",
    part_number: "",
    data_location: "",
    estimate_finish_date: "",
    author_name: "",
    verified_by: "",
    approved_by1: "",
    approved_by2: ""
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      form_number: data.form_number,
      document_number: data.document_number,
      request_date: data.request_date,
      design_type: data.design_type,
      design_kind: data.design_kind,
      project_type: data.project_type,
      part_name: data.part_name,
      part_number: data.part_number,
      data_location: data.data_location,
      estimate_finish_date: data.estimate_finish_date,
      author_name: data.author_name,
      verified_by: data.verified_by,
      approved_by1: data.approved_by1,
      approved_by2: data.approved_by2
    })
      .then(console.log(data));
  };

  return (
    <div className="container">
      <main>
        <section>
          <form onSubmit={(e) => submit(e)}>
            <Row>
              <Card className="card1">
                <Card.Header><h4><strong>Request Mold Form</strong></h4></Card.Header>
                <Card.Body>
                  <Card.Text>

                    {/* <ul>
                  {this.state.divisions.map(divisions => <li>{divisions.division}</li>)}
                </ul> */}
                    <Form.Group>
                      <Form.Label><strong>Form Number</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="form_number" value={data.form_number} type="text" placeholder="form number" />
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Document Number</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="document_number" value={data.document_number} type="text" placeholder="Document number" />
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Request Date</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="request_date" value={data.request_date} type="number" placeholder="mm-dd-yyyy" />
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Design Type</strong></Form.Label>
                      <Row>
                        <Col>
                          <Form.Control onChange={(e) => handle(e)} id="design_type" value={data.design_type} as="select" required>
                            <option value="" disabled selected hidden>- select design type -</option>
                            <option value="RND" id="rnd" name="proType">RND</option>
                            <option value="Production" id="production" name="proType">Production</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Check type="radio" onChange={(e) => handle(e)} id="design_kind" value={data.design_kind} name="design_type" value="New" required></Form.Check>
                          <Form.Label for="New">New</Form.Label>
                          <br></br>
                          <Form.Check type="radio" onChange={(e) => handle(e)} id="design_kind" value={data.design_kind} name="design_type" value="Revision" required></Form.Check>
                          <Form.Label for="Revision">Revision</Form.Label>
                        </Col>
                        <Col>
                          <Form.Label>Note</Form.Label>
                          <Form.Control type="file"></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Project</strong></Form.Label>
                      <br></br>
                      <Form.Control onChange={(e) => handle(e)} id="project_type" value={data.project_type} as="select" required>
                        <option value="" disabled selected hidden>- select project type -</option>
                        <option value="CELL">
                          CELL
                        </option>
                        <option value="CET MOLD">
                          CET MOLD
                        </option>
                        <option value="dPCR">
                          dPCR
                        </option>
                        <option value="FAST">
                          FAST
                        </option>
                        <option value="FLO">
                          FLO
                        </option>
                        <option value="MANTIS">
                          MANTIS
                        </option>
                        <option value="NT8">
                          NT8
                        </option>
                        <option value="POD">
                          POD
                        </option>
                        <option value="RX_CHANGER">
                          RX_CHANGER
                        </option>
                        <option value="STAMPEDE">
                          STAMPEDE
                        </option>
                      </Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Part Name</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="part_name" value={data.part_name} type="text" placeholder="part name" required></Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Part Number</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="part_number" value={data.part_number} type="text" placeholder="part number" required></Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Row>
                        <Form.Label><strong>Attached Data</strong></Form.Label>
                        <Col>
                          <Form.Label>2D</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>3D</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Prototype</Form.Label>
                          <Form.Control type="text" placeholder="optional"></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Data Location</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="data_location" value={data.data_location} type="text" placeholder="data location (optional)"></Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Finish Date Plan</strong></Form.Label>
                      <Form.Control onChange={(e) => handle(e)} id="estimate_finish_date" value={data.estimate_finish_date} type="text" placeholder="finish date" required></Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                      <Form.Label><strong>Note</strong></Form.Label>
                      <br></br>
                      <Form.Control type="file" accept="image/png, image/gif, image/jpeg" required></Form.Control>
                    </Form.Group>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Card className="card2">
                <Card.Header><h4><strong>Approval Document</strong></h4></Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Form.Group>
                      <Row>
                        <Row><strong>Author's</strong></Row>
                        <Col>
                          <Form.Label>Name</Form.Label>
                          <Form.Control onChange={(e) => handle(e)} id="author_name" value={data.author_name} type="text" placeholder="author name"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Department</Form.Label>
                          <Form.Control as="select">
                            <option selected disabled hidden>- PIC Department -</option>
                            <option>IME</option>
                            <option>IT</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Sign</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg" required></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Row>
                        <Row><strong>Verified By</strong></Row>
                        <Col>
                          <Form.Label>Name</Form.Label>
                          <Form.Control onChange={(e) => handle(e)} id="verified_by" value={data.verified_by} type="text" placeholder="verified by"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Department</Form.Label>
                          <Form.Control as="select">
                            <option selected disabled hidden>- PIC Department -</option>
                            <option>IME</option>
                            <option>IT</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Sign</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg"></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Row>
                        <Row><strong>(1st) Approved By</strong></Row>
                        <Col>
                          <Form.Label>Name</Form.Label>
                          <Form.Control onChange={(e) => handle(e)} id="approved_by1" value={data.approved_by1} type="text" placeholder="approved by 1"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Department</Form.Label>
                          <Form.Control as="select">
                            <option selected disabled hidden>- PIC Department -</option>
                            <option>IME</option>
                            <option>IT</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Sign</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg"></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Form.Group>
                      <Row>
                        <Row><strong>(2nd) Approved By</strong></Row>
                        <Col>
                          <Form.Label>Name</Form.Label>
                          <Form.Control onChange={(e) => handle(e)} id="approved_by2" value={data.approved_by2} type="text" placeholder="approved by 2"></Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Department</Form.Label>
                          <Form.Control as="select">
                            <option selected disabled hidden>- PIC Department -</option>
                            <option>IME</option>
                            <option>IT</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Label>Sign</Form.Label>
                          <Form.Control type="file" accept="image/png, image/gif, image/jpeg"></Form.Control>
                        </Col>
                      </Row>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                      <Row>
                        <Col>
                          <Button className="buttonMoldReq" variant="success" type="submit" value="submit">Submit</Button>
                        </Col>
                        <Col>
                          <Button className="buttonMoldReq" variant="primary" type="reset" value="clear">clear</Button>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </form>
        </section>
      </main>
    </div>
  );
}

export default MoldReq;