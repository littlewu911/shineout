/**
 * cn - 内嵌form
 * en - use form
 */
import React from 'react'
import { Modal, Button, Form, Input, Message } from 'shineout'

const rules = {
  email: [
    { required: true, message: 'Please enter your email.' },
    { type: 'email', message: 'Please enter a valid email.' },
  ],
  password: [
    { required: true, message: 'Please enter password.' },
    { min: 7, message: 'Password must be at least {min} characters.' },
    { regExp: /[a-z]+/i, message: 'Password at least has one letter.' },
    (value, formdata, callback) => {
      if (/\d+/.test(value)) callback(true)
      else callback(new Error('Password at least has one numeral.'))
    },
  ],
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.show = this.show.bind(this)
  }

  show() {
    this.setState({
      visible: true,
    })
  }

  handleSubmit = (data) => {
    this.setState({
      visible: false,
    })
    Message.success(JSON.stringify(data))
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
    console.log('click cancel')
  }

  renderFooter() {
    return (
      <div>
        <Button onClick={this.handleCancel}>Cancel</Button>
        <Modal.Submit>Submit</Modal.Submit>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.show}>click me</Button>
        <Modal
          visible={this.state.visible}
          width={456}
          title="Form"
          footer={this.renderFooter()}
        >
          <Form
            labelWidth={100}
            rules={rules}
            labelAlign="right"
            style={{ maxWidth: 400 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item required label="Email">
              <Input name="email" />
            </Form.Item>

            <Form.Item required label="Password">
              <Input name="password" type="password" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}