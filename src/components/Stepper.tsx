import React from 'react';
import { Chip } from '@heroui/react';
import { useStore } from "@nanostores/react";
import { $regCurrStep } from "@/lib/states.ts";

export interface Step {
    label: string;
    description?: string;
}

interface StepperProps {
    steps: Step[];
    variant?: 'default' | 'compact';
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
}

const Stepper: React.FC<StepperProps> = ({
    steps,
    variant = 'default',
    color = 'primary',
}) => {
    const isCompact = variant === 'compact';
    const currentStep = useStore($regCurrStep);

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between'>
                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <React.Fragment key={index}>
                            <div className='flex flex-col items-center gap-2'>
                                <Chip
                                    color={isCompleted ? 'success' : isActive ? color : 'default'}
                                    variant={isActive ? 'solid' : isCompleted ? 'flat' : 'bordered'}
                                    size={isCompact ? 'sm' : 'md'}
                                    className='font-semibold'
                                >
                                    {isCompleted ? '✓' : index + 1}
                                </Chip>
                                {!isCompact && (
                                    <div className='text-center'>
                                        <p className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-default-500'}`}>
                                            {step.label}
                                        </p>
                                        {step.description && (
                                            <p className='text-xs text-default-400 mt-1'>
                                                {step.description}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                            {!isLast && (
                                <div
                                    className={`flex-1 h-0.5 mx-2 ${
                                        isCompleted ? 'bg-success' : 'bg-default-200'
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
