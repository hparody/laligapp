/** @jsx jsx */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../Logo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const styles = {
  container: css`
    border-radius: 50px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(199, 54, 89, 1);
    display: flex;
    flex-direction: column;
  `,
  header: css`
    border-radius: 50px 50px 0px 0px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(199, 54, 89, 1);
    background-color: var(--DARK-RED, #8b322c);
    display: flex;
    flex-direction: column;
    padding: 24px 34px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding: 0 20px;
    }
  `,
  centerContent: css`
    justify-content: center;
    padding: 10px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 16%;
    margin-left: 0px;
    @media (max-width: 991px) {
      width: 100%;
      margin-left: 0;
    }
  `,
  title: css`
    color: var(--WHITE, #eee);
    text-align: center;
    letter-spacing: -5px;
    @media (max-width: 991px) {
      max-width: 100%;
      margin-top: 20px;
      font-size: 40px;
    }
  `,
  formSection: css`
    display: flex;
    width: 100%;
    flex-direction: column;
    font-size: 36px;
    color: var(--WHITE, #eee);
    font-weight: 700;
    text-align: center;
    letter-spacing: -1.8px;
    padding: 50px 32px;
    box-sizing: border-box;
    background-color: rgba(199, 54, 89, 0.6);
    border-radius: 0px 0px 50px 50px;
  `,
  formFieldLabel: css`
    letter-spacing: -1.6px;
    font: 32px Inter, sans-serif;
    text-align: left;
    font-weight: 600;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `,
  formField: css`
    font-family: Inter, sans-serif;
    font-size: 28px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(174, 174, 174, 1);
    background-color: #fff;
    margin-top: 16px;
    align-items: start;
    color: var(--BLACK, #151515);
    font-weight: 500;
    white-space: nowrap;
    justify-content: center;
    padding: 22px 27px;
    @media (max-width: 991px) {
      max-width: 100%;
      white-space: initial;
      padding: 0 20px;
    }
  `,
  formFieldPassword: css`
    font-family: Inter, sans-serif;
    font-size: 28px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(174, 174, 174, 1);
    background-color: #fff;
    margin-top: 14px;
    align-items: start;
    color: var(--BLACK, #151515);
    font-weight: 500;
    white-space: nowrap;
    justify-content: center;
    padding: 33px 23px;
    @media (max-width: 991px) {
      max-width: 100%;
      white-space: initial;
      padding: 0 20px;
    }
  `,
  buttonPrimary: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    justify-content: center;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(139, 50, 44, 1);
    background-color: var(--RED, #a91d3a);
    align-self: center;
    margin-top: 40px;
    width: 332px;
    max-width: 100%;
    padding: 7px 28px;
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  `,
  buttonSecondary: css`
    font-family: Inter, sans-serif;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 2px solid rgba(169, 29, 58, 1);
    background-color: var(--LIGHT-RED, #c73659);
    align-self: center;
    margin-top: 27px;
    width: 332px;
    max-width: 100%;
    white-space: nowrap;
    padding: 7px 28px;
    @media (max-width: 991px) {
      white-space: initial;
      padding: 0 20px;
    }
  `,
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogInClick = () => {
    if(email === "admin" && password == "123456"){
      alert("Logging in...");
      navigate("/");
    } else{
      alert("Este usuario no existe, por favor, registrelo.")
    }
    
  };

  const handleRegisterClick = () => {
    alert("Registering...");
  };

  return (
    <Container>
      <section css={styles.container}>
        <header css={styles.header}>
          <Logo />
        </header>
        <form css={styles.formSection}>
          <label htmlFor="emailInput" css={styles.formFieldLabel}>
            Usuario
          </label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            id="emailInput"
            placeholder="johndoe@mail.com"
            aria-label="Ingresa tu correo"
            css={styles.formField}
          />
          <label
            htmlFor="passwordInput"
            css={[styles.formFieldLabel, { marginTop: "30px" }]}
          >
            Contraseña
          </label>
          <input
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="passwordInput"
            placeholder="*********"
            aria-label="Ingresa tu contraseña"
            css={styles.formFieldPassword}
          />
          <button
            type="submit"
            onClick={handleLogInClick}
            css={[styles.buttonPrimary, { marginTop: "40px" }]}
          >
            Iniciar Sesión
          </button>
          <button
            type="button"
            onClick={handleRegisterClick}
            css={styles.buttonSecondary}
          >
            Registrarme
          </button>
        </form>
      </section>
    </Container>
  );
};

export default LogIn;
