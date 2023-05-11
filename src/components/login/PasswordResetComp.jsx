import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const PasswordResetComp = ({
    handleOnChange,
    handleOnResetPassword,
    formSwitcher,
    email
}) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center mt-3 display-6">Reset Password</h2>
                        <Form autoComplete='off' onSubmit={handleOnResetPassword}>
                            <Form.Group>
                                <Form.Label className='mt-3'>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder='Email Address'
                                    required
                                />
                            </Form.Group>

                            <Button className='mt-4 px-5' type='submit'>Reset Password</Button>
                        </Form>
                        <hr className='mt-3' />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="#!" onClick={() => formSwitcher('login')} >Login Now</a>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

PasswordResetComp.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetPassword: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

export default PasswordResetComp
