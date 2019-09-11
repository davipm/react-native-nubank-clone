import { Animated } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  
`;

export const CardContent = styled.View`
  
`;

export const Title = styled.Text`
  
`;

export const Description = styled.Text`
  
`;

export const CardFooter = styled.View`
  
`;

export const Annotation = styled.Text`
  
`;

