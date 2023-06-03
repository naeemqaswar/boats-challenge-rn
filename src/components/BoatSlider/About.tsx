import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import DisplayContext from '../../../src/context';

export default function About(props: any) {
  const {title, creator} = props.details;
  const {displayStatus, setDisplayStatus} = useContext(DisplayContext);

  if (displayStatus === true) return null;

  const showSpec = () => {
    setDisplayStatus(true);
  };

  return (
    <TouchableWithoutFeedback onPress={showSpec}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          By <Text style={styles.creator}>{creator}</Text>
        </Text>
        <TouchableWithoutFeedback onPress={showSpec}>
          <View style={styles.spec}>
            <Text style={styles.specsText}>SPEC</Text>
            <Image
              resizeMode="contain"
              style={styles.specsIcon}
              source={require('../../../assets/icons/arrow-right.png')}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#0d0b0c',
    fontSize: 30,
    letterSpacing: 0.5,
  },
  subTitle: {
    color: '#0d0b0c',
    fontSize: 14,
    marginBottom: 12,
  },
  creator: {
    fontWeight: 500,
  },
  spec: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specsText: {
    color: '#584b98',
    fontSize: 14,
    letterSpacing: 1.5,
    fontWeight: '700',
  },
  specsIcon: {
    marginLeft: 4,
    height: 11,
    width: 11,
  },
});
