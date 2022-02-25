import React from "react"
import { LinkProps } from "react-router-dom"
import {
    Container,
    Base,
    Logo,
    Input,
    Button,
    Divider,
    FacebookLogin,
    ForgetPassword,
    LoginSignupRedirect,
} from "./form.styles"

interface FormComposition extends React.FC {
    Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>
    Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    Divider: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    FacebookLogin: React.FC<LinkProps>
    ForgetPassword: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    LoginSignupRedirect: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const Form: FormComposition = ({ children, ...rest }) => {
    return <Container {...rest}>{children}</Container>
}

Form.Base = function FormBase({ children, ...rest }) {
    return <Base {...rest}>{children}</Base>
}
Form.Logo = function FormLogo({ children, ...rest }) {
    return <Logo {...rest}>{children}</Logo>
}

Form.Input = function FormInput({ ...rest }) {
    return <Input {...rest} />
}

Form.Button = function FormButton({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>
}

Form.Divider = function FormDivider({ children, ...rest }) {
    return <Divider {...rest}>{children}</Divider>
}

Form.FacebookLogin = function FormFacebookLogin({ children, ...rest }) {
    return <FacebookLogin {...rest}>{children}</FacebookLogin>
}

Form.ForgetPassword = function FormForgetPassword({ children, ...rest }) {
    return <ForgetPassword {...rest}>{children}</ForgetPassword>
}

Form.LoginSignupRedirect = function FormLoginSignupRedirect({
    children,
    ...rest
}) {
    return <LoginSignupRedirect {...rest}>{children}</LoginSignupRedirect>
}
