import React from 'react'
import './entryPage.css'
import LoginComp from '../../components/login/LoginComp'
import ResetPassword from '../../components/login/PasswordResetComp'
import { useState } from 'react'

const EntryPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')

    const handleOnChange = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleOnResetPassword = (e) => {
        e.preventDefault()
        if (!email) {
            return alert('Please enter the email')
        }
        console.log(email);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
            return alert('fill up all field')
        }
        console.log(email, password);
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

    return (
        <div className="entry-page bg-info">
            <div className="card p-5 rounded bg-light" style={{ width: '25rem' }}>

                {formLoad === 'login' &&
                    <LoginComp
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                        pass={password}
                    />
                }
                {formLoad === 'reset' &&
                    <ResetPassword
                        handleOnChange={handleOnChange}
                        handleOnResetPassword={handleOnResetPassword}
                        formSwitcher={formSwitcher}
                        email={email}
                    />
                }
            </div>
        </div>
    )
}

export default EntryPage