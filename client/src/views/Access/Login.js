import { useState, useContext } from "react";
import { useForm } from "../../components/useForm";
import RegisterFinder from "../../services/apis/Register";
import {AuthContext} from "../../hooks/contexts/AuthContext"

import Header from "../../components/layout/Header";
import { Container, Card, CardMsgs, Title, SmallText, Form, FormGroup, Input, MuteLink, BoldLink, Button, CardBody } from "./Access.Styles"

const Login = () => {

    const { currentUser, setCurrentUser, setAuth } = useContext(AuthContext);
    const [isError, setIsError] = useState("")

    const [values, handleChange] = useForm({ email: "", password: "" })
    const { email, password } = values;
    
    const handleSubmitForm = async (e) => {
        e.preventDefault()

        try {
            const data = await RegisterFinder.login(values)
            
            if (data.success) {
                localStorage.setItem("token", data.token);
                setCurrentUser(p => data.data);
                setAuth(true);
            } else {
                setAuth(false);
                setIsError((prev) => data.msg)
            }            
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <Header page="login" />
            <Container>
                <Card>
                    <CardMsgs>
                        <Title> Bienvenido </Title>
                        <SmallText>Gracias por volver</SmallText>
                        {isError && <p className='error' >{isError}</p>}
                    </CardMsgs>
                    <CardBody>
                    <Form onSubmit={handleSubmitForm}>

                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="email"  value={email} onChange={ handleChange }/>
                        </FormGroup>

                        <FormGroup>
                            <Input type="password" name="password" id="password" placeholder="password" value={password} onChange={ handleChange }/>
                        </FormGroup>

                        <Button> Ingresar </Button>

                    </Form>
                    </CardBody>
                    <MuteLink>
                        <BoldLink to="/register">¿No tienes una cuenta aun? <span>Registrarse</span></BoldLink>
                    </MuteLink>
                </Card>
            </Container>
        </>
    )
}

export default Login;