import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import DisplayContext from '../../../src/context';
import About from './About';

export default function Slide(props: any) {
  const {index, details} = props;
  const {displayStatus} = useContext(DisplayContext);

  let xOffset = useSharedValue(0);
  let yOffset = useSharedValue(0);
  let rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
        {
          translateX: xOffset.value,
        },
        {
          translateY: yOffset.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (displayStatus === true) {
      xOffset.value = withSpring(210, {stiffness: 50, mass: 0.1});
      yOffset.value = withSpring(100, {stiffness: 50, mass: 0.1});
      rotation.value = withSpring(-90, {stiffness: 30, mass: 0.1});
    } else {
      xOffset.value = withSpring(0, {stiffness: 50, mass: 0.1});
      yOffset.value = withSpring(0, {stiffness: 80, mass: 0.1});
      rotation.value = withSpring(0, {stiffness: 100, mass: 0.2});
    }
  }, [displayStatus]);

  const boatImage = () => {
    return (
      <Animated.View style={[styles.imageContainer, animatedStyles]}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={details.image}
        />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container} key={'page' + index}>
      {boatImage()}
      <About details={details} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: 140,
  },
  imageContainer: {
    height: '68%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    height: '100%',
  },
});
