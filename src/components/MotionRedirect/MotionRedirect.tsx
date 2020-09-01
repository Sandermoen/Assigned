import React from 'react';
import { RedirectProps, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';

// This component is used for handling the bug where framer-motion does not
// animate react router's <Redirect /> component.
// https://github.com/framer/motion/issues/466
// Found after hours of debugging 😬

const MotionRedirect: React.FC<RedirectProps> = ({ ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
);

export default MotionRedirect;
