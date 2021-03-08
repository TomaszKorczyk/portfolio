import { motion } from 'framer-motion'
import React from 'react'
import { Route } from 'react-router-dom'

export default function AnimatedRoute({children, ...rest}) {
    return (
        <Route {...rest}>
            <motion.div
                initial={{
                    x:200,
                    opacity:0
                }}
                animate={{
                    x:0,
                    opacity:1
                }}
            >
                {children}
            </motion.div>
        </Route>
    );
}
