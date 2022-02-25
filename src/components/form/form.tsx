import React from "react"
import {
    Container,
    Wrapper,
    Base,
    Logo,
    Input,
    Button,
    Divider,
    FacebookLogin,
    ForgetPassword,
    LoginSignupRedirect,
    Bottom,
} from "./form.styles"

interface FormComposition extends React.FC {
    Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>
    Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    Divider: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    FacebookLogin: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    ForgetPassword: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    LoginSignupRedirect: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Bottom: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const Form: FormComposition = ({ children, ...rest }) => {
    return <Container {...rest}>{children}</Container>
}

Form.Wrapper = function FormWrapper({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>
}

Form.Base = function FormBase({ children, ...rest }) {
    return <Base {...rest}>{children}</Base>
}

Form.Logo = function FormLogo({ ...rest }) {
    return <Logo src="/images/misc/logo.png" {...rest} />
}

Form.Input = function FormInput({ ...rest }) {
    return <Input {...rest} />
}

Form.Button = function FormButton({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>
}

Form.Divider = function FormDivider({ ...rest }) {
    return <Divider {...rest}>OR</Divider>
}

Form.FacebookLogin = function FormFacebookLogin({ ...rest }) {
    return (
        <FacebookLogin {...rest}>
            <img src="/images/icons/facebook.png" />
            Log in with Facebook
        </FacebookLogin>
    )
}

Form.ForgetPassword = function FormForgetPassword({ ...rest }) {
    return <ForgetPassword {...rest}>Forgotten your password?</ForgetPassword>
}

Form.LoginSignupRedirect = function FormLoginSignupRedirect({ children, ...rest }) {
    return <LoginSignupRedirect {...rest}>{children}</LoginSignupRedirect>
}

Form.Bottom = function FormBottom({ ...rest }) {
    return (
        <Bottom {...rest}>
            <span>Get the app.</span>
            <div>
                <img src="images/icons/apple.png" />
                <img src="images/icons/google-play.png" />
            </div>
        </Bottom>
    )
}
