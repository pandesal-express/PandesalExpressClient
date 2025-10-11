import React, { type FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { $regCurrStep } from "@/lib/states";
import RegisterForm from "@/components/auth/RegisterForm";
import FaceRegisterStep from "@/components/auth/FaceRegisterStep";
import type { Department } from "@/types";

interface FormSwitcherProps {
    departments: Department[];
    serverError: string | null;
}

const FormSwitcher: FC<FormSwitcherProps> = ({departments, serverError}) => {
    const currentStep = useStore($regCurrStep);

    // Animation variants for smooth transitions
    const variants = {
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            opacity: 0,
        }),
    };

    return (
        <div className='relative w-full overflow-hidden'>
            <AnimatePresence mode='wait' custom={currentStep}>
                {currentStep === 0 && (
                    <motion.div
                        key='register-form'
                        custom={0}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{
                            x: {type: "spring", stiffness: 300, damping: 30},
                            opacity: {duration: 0.2},
                        }}
                    >
                        <RegisterForm departments={departments} serverError={serverError} />
                    </motion.div>
                )}
                {currentStep === 1 && (
                    <motion.div
                        key='face-register-step'
                        custom={1}
                        variants={variants}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{
                            x: {type: "spring", stiffness: 300, damping: 30},
                            opacity: {duration: 0.2},
                        }}
                    >
                        <FaceRegisterStep />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormSwitcher;

