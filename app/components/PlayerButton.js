import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import color from '../misc/color';

const PlayerButton = props => {
  const { iconType, size = 40, iconColor = color.FONT, onPress } = props;

  // Sử dụng state để theo dõi trạng thái của nút và thời gian đổi màu
  const [isPressed, setIsPressed] = useState(false);

  const getIconName = type => {
    switch (type) {
      case 'PLAY':
        return 'pausecircle';
      case 'PAUSE':
        return 'playcircleo';
      case 'NEXT':
        return 'forward';
      case 'PREV':
        return 'banckward';
    }
  };

  const handlePress = () => {
    // Đảo ngược trạng thái khi nút được nhấn
    setIsPressed(!isPressed);

    // Gọi hàm onPress nếu được cung cấp
    if (onPress) {
      onPress();
    }

    // Thiết lập thời gian đổi màu và trở lại màu ban đầu sau 300ms
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  return (
    <AntDesign
      {...props}
      onPress={handlePress}
      name={getIconName(iconType)}
      size={size}
      color={isPressed ? 'blue' : iconColor} // Sử dụng màu xanh khi nút được nhấn
    />
  );
};

export default PlayerButton;
