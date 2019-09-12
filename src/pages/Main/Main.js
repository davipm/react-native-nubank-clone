import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import {
  Container,
  Card,
  CardFooter,
  Content,
  Annotation,
  CardContent,
  CardHeader,
  Description,
  Title,
  SafeAreaView
} from "./styles";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Menu from "../../components/Menu";

export default function Main() {
  let offSet = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offSet += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offSet);
        translateY.setOffset(0);
        offSet = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offSet = opened ? 380 : 0;
        translateY.setOffset(offSet);
        translateY.setValue(0);
      })
    }
  }

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY} />
          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                })
              }]
            }}
            >
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 5,000.00</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 20,00 recebida de Davi Pereira hoje às 06:00h
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY}/>
      </Container>
    </SafeAreaView>
  )
}
