import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return( 
        <div className="flex h-screen text-white text-3xl font-bold">
            <motion.h1 
                initial={{
                    opacity: 0, 
                    x:-300
                }}
                animate={{
                    scale: 1.5, 
                    opacity: 1, 
                    x:0, 
                    transition:{duration:1}, 
                    rotate: 720
                }}
                className="m-auto"
            >
                Welcome Home
            </motion.h1>
        </div>
    );
}