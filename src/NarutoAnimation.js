import React from 'react';
import { useSpring, animated } from 'react-spring';

const NarutoAnimation = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 10000 },
  });

  return (
    <animated.div style={springProps}>
      {}
      <img src="kakashi-fortnite.gif" alt="Naruto Animation" />
    </animated.div>
  );
};

export default NarutoAnimation;
