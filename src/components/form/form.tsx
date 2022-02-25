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
    ForgotPassword,
    LoginSignupRedirect,
    Bottom,
    Error,
    Text,
    SmallText,
} from "./form.styles"

interface FormComposition extends React.FC {
    Wrapper: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>
    Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    Divider: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    FacebookLogin: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    ForgotPassword: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    LoginSignupRedirect: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Bottom: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Error: React.FC<React.HTMLAttributes<HTMLSpanElement>>
    Text: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    SmallText: React.FC<React.HTMLAttributes<HTMLSpanElement>>
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

Form.ForgotPassword = function FormForgotPassword({ ...rest }) {
    return <ForgotPassword {...rest}>Forgotten your password?</ForgotPassword>
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

Form.Error = function FormError({ children, ...rest }) {
    return <Error {...rest}>{children}</Error>
}

Form.Text = function FormText({ children, ...rest }) {
    return <Text {...rest}>{children}</Text>
}

Form.SmallText = function FormSmallText({ children, ...rest }) {
    return <SmallText {...rest}>{children}</SmallText>
}
