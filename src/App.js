import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined
} from '@ant-design/icons';

import './styles.css';

function App() {
  const props = useSpring({
    padding: 20,
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 1,
    from: { opacity: 0 }
  });

  const workSection = useSpring({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <div>
      <animated.div style={props}>
        <h1>Steven Woodward</h1>
        <h3>Front-end Web Developer</h3>
        <div>
          <GithubOutlined style={{ fontSize: '2rem', margin: '20px' }} />
          <TwitterOutlined style={{ fontSize: '2rem', margin: '20px' }} />
          <LinkedinOutlined style={{ fontSize: '2rem', margin: '20px' }} />
          <MailOutlined style={{ fontSize: '2rem', margin: '20px' }} />
        </div>
      </animated.div>
      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>My Projects</h1>
      <animated.div style={workSection}>
        <Card />
        <Card />
      </animated.div>
      <animated.div style={workSection}>
        <Card />
        <Card />
      </animated.div>
    </div>
  );
}

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 200,
  (x - window.innerWidth / 2) / 200,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      class='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}

export default App;
