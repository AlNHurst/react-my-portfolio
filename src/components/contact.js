import React from 'react';
import { Form, FormGroup, Button, Container } from 'react-bootstrap';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["comment"] = "";
      this.setState({ input: input });

      alert('Demo Form is submited');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your comment.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">Get In Touch!</h1>
        <Form className="contact-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Form.Label>Full Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Alex Smith"
              value={this.state.input.name}
              onChange={this.handleChange} />
          </FormGroup>
          <div className="text-danger">{this.state.errors.name}</div>

          <FormGroup>
            <Form.Label>Email Address:</Form.Label>
            <Form.Control
              type="text"
              placeholder="email@email.com"
              value={this.state.input.email}
              onChange={this.handleChange} />
          </FormGroup>
          <div className="text-danger">{this.state.errors.email}</div>

          <FormGroup>
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter comment"
              name="comment"
              value={this.state.input.comment}
              onChange={this.handleChange} />
          </FormGroup>
          <div className="text-danger">{this.state.errors.comment}</div>

          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              type="submit">Send
            </Button>
          </div>
        </Form>
      </Container>
    );
  }
}

export default Contact;