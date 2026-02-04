import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  Bg,
  Overlay,
  Card,
  Title,
  Subtitle,
  Label,
  Row,
  InputBox,
  StyledInput,
  LinkText,
  DividerRow,
  DividerLine,
  DividerText,
  SocialRow,
  SocialButton,
  SocialIcon,
} from "./styles";

import { LinearGradient } from "expo-linear-gradient";
import { gradients } from "../../theme/colors";

import CoverBlackPanther from "../../../assets/imagens/CoverBlackPanther.png";
import IconUser from "../../../assets/imagens/Human2.png";
import IconKey from "../../../assets/imagens/Key.png";
import IconEye from "../../../assets/imagens/Eye.png";

import IconGoogle from "../../../assets/imagens/G.png";
import IconApple from "../../../assets/imagens/Apple.png";
import IconFacebook from "../../../assets/imagens/Facebook.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("tecnologia@pontua.com.br");
  const [password, setPassword] = useState("123");

  function handleLogin() {
    if (!email.includes("@") || password.length < 3) {
      Alert.alert("Erro", "E-mail ou senha inválidos");
      return;
    }
    navigation.replace("Home");
  }

  return (
    <Container>
      <Bg source={CoverBlackPanther} resizeMode="cover">
        <Overlay />

        <Card>
          <Title>Faça login</Title>
          <Subtitle>seja bem-vindo novamente.</Subtitle>

          <Label>Usuário</Label>
          <InputBox>
            <SocialIcon source={IconUser} />
            <StyledInput
              placeholder="E-mail"
              placeholderTextColor="rgba(255,255,255,0.55)"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </InputBox>

          <Label>Senha</Label>
          <InputBox>
            <SocialIcon source={IconKey} />
            <StyledInput
              placeholder="Senha"
              placeholderTextColor="rgba(255,255,255,0.55)"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <SocialIcon source={IconEye} />
          </InputBox>

          <Row>
            <LinkText onPress={() => navigation.navigate("ForgotPassword")}>
              Forgot Password?
            </LinkText>
          </Row>

          <LinearGradient
            colors={gradients.red}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 54,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 14,
            }}
          >
            <LinkText
              onPress={handleLogin}
              style={{ color: "white", fontWeight: "500", fontSize: 16,}}
            >
              entrar
            </LinkText>
          </LinearGradient>

          <DividerRow>
            <DividerLine />
            <DividerText>Faça login com</DividerText>
            <DividerLine />
          </DividerRow>

          <SocialRow>
            <SocialButton>
              <SocialIcon source={IconGoogle} />
            </SocialButton>
            <SocialButton>
              <SocialIcon source={IconApple} />
            </SocialButton>
            <SocialButton>
              <SocialIcon source={IconFacebook} />
            </SocialButton>
          </SocialRow>
        </Card>
      </Bg>
    </Container>
  );
}
