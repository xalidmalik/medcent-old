import React from "react";
import { useSpring, animated } from "react-spring";

export const CardWrapper = props => {
  const CardTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200
  });
  return (
    <animated.div
      style={CardTransition}
      className={`${
        props.classes
          ? props.classes
          : "w-card bg-white w-full rounded-lg flex shadow-base mb-4"
      }`}
    >
      {props.children}
    </animated.div>
  );
};

// export const CardWrapperInvisible = props => {
//   const CardTransition = useSpring({
//     from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
//     to: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     config: { mass: 1, tension: 300, friction: 40 },
//     delay: 200
//   });
//   return (
//     <animated.div
//       style={CardTransition}
//       className="w-card-table rounded-lg flex shadow-base mb-4 overflow-hidden"
//     >
//       {props.children}
//     </animated.div>
//   );
// };

// export const CardWrapperTable = props => {
//   const CardTransition = useSpring({
//     from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
//     to: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     config: { mass: 1, tension: 300, friction: 40 },
//     delay: 200
//   });
//   return (
//     <animated.div
//       style={CardTransition}
//       className="w-card-table bg-white rounded-lg flex shadow-base mb-4 overflow-hidden"
//     >
//       {props.children}
//     </animated.div>
//   );
// };

// export const ServiceCardWrapper = props => {
//   const CardTransition = useSpring({
//     from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
//     to: { opacity: 1, transform: "translate3d(0%,0,0)" },
//     config: { mass: 1, tension: 300, friction: 40 },
//     delay: 200
//   });
//   return (
//     <animated.div
//       style={CardTransition}
//       className={`w-card bg-${props.bgColor ? props.bgColor : "white"} w-full ${
//         props.rounded ? props.rounded : "rounded-lg"
//       } flex shadow-base mb-2`}
//     >
//       <div className="px-4 h-12 w-full flex items-center">{props.children}</div>
//     </animated.div>
//   );
// };

export const ServiceHeaderWrapper = props => {
  const CardTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200
  });
  return (
    <animated.div
      style={CardTransition}
      className={`w-card bg-white w-full rounded-tl-lg flex sticky top-0 z-40 shadow-table`}
    >
      <div className="px-4 h-16 w-full flex items-center">{props.children}</div>
    </animated.div>
  );
};
