import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import { StaticImage } from "gatsby-plugin-image";

export const CustomImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Section = styled.section`
    padding-top: 72px;
    padding-bottom: 72px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: KAMIKAZE;
  text-align: center;
  letter-spacing: 10px;
  color: #f9f5d4;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 64px;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 75px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 75px;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    font-size: 75px;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (min-width: ${breakpoints.l}) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const OrangeTitle = styled.h3`
  font-size: 24px;
  color: #ff9b2f;
  text-transform: uppercase;
  font-family: "KAMIKAZE";
`;

export const YellowTitle = styled.h3`
  font-size: 24px;
  color: #d4f017;
  text-transform: uppercase;
  font-family: "KAMIKAZE";
`;

export const BlueTitle = styled.h3`
  font-size: 24px;
  color: #8c65ff;
  text-transform: uppercase;
  font-family: "KAMIKAZE";
`;

export const LigthBlueTitle = styled.h3`
  font-size: 24px;
  color: #2dddbf;
  text-transform: uppercase;
  font-family: "KAMIKAZE";
`;

export const Map = styled.div`
  border: 4px solid #c445a0;
`;

export const SubText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  font-family: "Gotham";
`;

export const SubTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const JumpInButton = styled.button`
  clip-path: polygon(50% 0%, 100% 0, 100% 0, 83% 100%, 0 100%, 0% 60%, 0 0);
  background-color: #c445a0;
  padding-top: 16px;
  border: none;
  padding-bottom: 16px;
  width: 100%;
  position: relative;
  z-index: 1;
  cursor: pointer;
`;

export const BorderImage = styled.img`
`;

export const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: 0.2s;
  }
`;
