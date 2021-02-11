import { useState, useContext } from "react";
import { useForm } from '../../components/useForm';
import RegisterFinder from '../../services/apis/Register';
import { AuthContext } from "../../hooks/contexts/AuthContext"

import Header from "../../components/layout/Header";
import { Container, Card, CardMsgs, Title, SmallText, Form, FormGroup, Input, MuteLink, BoldLink, Button, CardBody } from "./Access.Styles"

const Register = () => {
    
    const { currentUser, setCurrentUser, setAuth } = useContext(AuthContext);

    const [isError, setIsError] = useState("")

    const [values, handleChange] = useForm({ email: "", password: "", user_name: "", passwordConfirm: "" })
    const { user_name, email, password, passwordConfirm } = values;
    
    const handleSubmitForm = async (e) => {
        e.preventDefault()

        try {
            const data = await RegisterFinder.signup(values)
            
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
        <Header page="login"/>
        <Container>
            <Card>
                <CardMsgs>
                    <Title> Registrarse </Title>
                    <SmallText>Ingrese sus datos</SmallText>
                    <SmallText>para crear una cuenta</SmallText>
                    {isError && <p className='error' >{isError}</p>}
                </CardMsgs>
                <CardBody>
                    <Form onSubmit={handleSubmitForm}>

                        <FormGroup>
                            <Input name="user_name" id="user_name" placeholder="Name" value={user_name} onChange={ handleChange }/>
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="email"  value={email} onChange={ handleChange }/>
                        </FormGroup>

                        <FormGroup >
                            <Input type="password" name="password" id="password" placeholder="password" value={password} onChange={ handleChange }/>
                        </FormGroup>

                        <FormGroup >
                            <Input name="passwordConfirm" id="passwordConfirm" placeholder="Passwor Confirmtion" value={passwordConfirm} onChange={handleChange} />
                        </FormGroup>

                <Button> Registrarse </Button>

            </Form>
            </CardBody>

            <MuteLink> 
                <BoldLink to='/login'> ¿Ya tienes una cuenta? <span>Ingresar</span> </BoldLink>
            </MuteLink>
            </Card>

        </Container>
        </>
    )
}

export default Register;