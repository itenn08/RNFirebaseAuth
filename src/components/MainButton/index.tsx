import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface IProps {
  onClick?: () => void;
  children: JSX.Element | string;
  disabled?: boolean;
  type?: 'main' | 'secondary';
}

const MainButton: React.FC<IProps> = ({onClick, children, type, disabled}) => {
  const handleClick = () => {
    if (disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  const styles = StyleSheet.create({
    button: {
      color: 'white',
      backgroundColor: '#44A4A5',
      border: 'none',
      fontSize: 14,
      fontWeight: '600',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: '0.5rem 1rem',
      height: 40,
      cursor: 'pointer',
      ...(type === 'main' && {
        color: 'blue',
      }),
      ...(type === 'secondary' && {
        color: '#44a4a5',
        backgroundColor: 'rgba(248, 249, 250, 1)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(248, 249, 250, 1)',
      }),
      ...(disabled && {
        backgroundColor: 'rgba(226, 225, 228, 1)',
      }),
    },
  });

  return (
    <View>
      <TouchableOpacity style={[styles.button]} onPress={handleClick}>
        <View>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

export default MainButton;
