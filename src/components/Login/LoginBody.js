import styled from 'styled-components';
import LoginFormContainer from '../../container/LoginContainer/LoginFormContainer';
import LoginFormOther from './LoginFormOther';

const LoginBodyDiv = styled.div`
    color: #333;
    padding: 0 5%;
    margin: 0 auto;
    position: relative;
    top: 7em;
    z-index: 0;

    @media screen and (min-width: 740px) {
        background-color: transparent;
        max-width: 450px;
        min-height: 100vh;
        z-index: 100;
        top: 0;

        &::after {
            content: "";
            display: block;
            height: 91px;
        }

        &::before {
            content: "";
            display: block;
            height: 120px;
        }
    }
`;

const LoginFormDiv = styled.div`
    background-color: rgba(0,0,0,.75);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    height: 70vh;

    & h1 {
        color: #fff;
        font-size: 32px;
        font-weight: 500px;
    }

    @media screen and (min-width: 740px) {
        min-height: 660px;
        min-width: 380px;
        margin: 0;
        margin-bottom: 90px;
        padding: 60px 68px 40px;
        background-color: rgba(0,0,0,.75);
        border-radius: 4px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const LoginBody = () => {
    return(
        <LoginBodyDiv>
            <LoginFormDiv>
                <h1>로그인</h1>
                <LoginFormContainer />
                <LoginFormOther />
            </LoginFormDiv>
        </LoginBodyDiv>
    );
};

export default LoginBody;