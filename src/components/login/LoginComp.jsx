import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const LoginComp = ({
    handleOnChange,
    email,
    pass,
    handleOnSubmit,
    formSwitcher
}) => {
    return (
        <div>
            <Container>
                <h1 className="display-5 mb-4">CRM Login</h1>
                <Row>
                    <Col>
                        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder='Email Address'
                                    required
                                />
                            </Form.Group>
                            <Form.Group className='mt-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    value={pass}
                                    onChange={handleOnChange}
                                    placeholder='Password'
                                    required
                                />
                            </Form.Group>
                            <Button className='mt-4 px-5' type='submit'>Login</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <a href="#!" onClick={() => formSwitcher('reset')}>Forget Password?</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

LoginComp.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}

export default LoginComp