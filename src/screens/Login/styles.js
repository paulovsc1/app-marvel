import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const Bg = styled.ImageBackground`
  flex: 1;
`;

export const Overlay = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Card = styled.View`
  margin-top: auto;
  min-height: 66%;
  padding: 24px 24px 28px 24px;
  background: rgba(21, 19, 22, 0.75);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;



export const Title = styled.Text`
  font-family: Poppins;
  color: #EFEFEF;
  font-size: 34px;
  font-weight: 600;
  text-align: center;
`;

export const Subtitle = styled.Text`
  color: #A4A4A4;
  font-size: 14px;
  text-align: center;
  margin-top: 6px;
  margin-bottom: 18px;
`;

export const Label = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 14px;
  padding: 14px 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  color: #fff;
  margin: 0 10px;
`;

export const Row = styled.View`
  align-items: flex-end;
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  color: #A4A4A4;
  font-size: 12px;
`;

export const DividerRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

export const DividerLine = styled.View`
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

export const DividerText = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin: 0 12px;
`;

export const SocialRow = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 14px;
  gap: 12px;
`;

export const SocialButton = styled.Pressable`
  width: 65px;
  height: 52px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.Image.attrs({
    resizeMode: "contain",
})`
  width: 18px;
  height: 18px;
`;
