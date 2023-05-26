import React from 'react';
import {View, StyleSheet} from 'react-native';
import CarouselPager from 'react-native-carousel-pager';

import Slide from './Slide';
import Details from '../Details';
import ExitAction from '../Details/ExitAction';
import BoatsList from '../../../assets/data/BoatsList';

export default function BoatSlider(props: any) {
  return (
    <View style={styles.container}>
      <CarouselPager
        initialPage={0}
        pageStyle={styles.slider}
        blurredZoom={0.9}
        blurredOpacity={0}>
        {BoatsList.map((data, i) => (
          <Slide
            key={i}
            index={i}
            details={data}
            actionsOnDisplay={props.homeActionsOnDisplay}
          />
        ))}
      </CarouselPager>
      <Details />
      <ExitAction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
