import React, { useState } from "react";
import { ToastRoot, ToastAction, ToastDescription, ToastProvider, ToastTitle, ToastViewport, ToastButton } from "./Toast.styles";

export interface ToastProps {
    title?: string;
    description: string;

    labelButton?: string;
    labelOk?: string;

    open: boolean;
    onOpenChange: any;
    duration: number;
}


const ComponentToast = (props: ToastProps) => {
    const [open, setOpen] = React.useState(false);
    const timerRef = React.useRef(0);
  
    React.useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <ToastProvider swipeDirection="right">
            <ToastButton
                onClick={() => {
                    setOpen(false);
                    window.clearTimeout(timerRef.current);
                    timerRef.current = window.setTimeout(() => {
                        setOpen(true);
                    }, 100);
                }}
            >
                {props.labelButton}
            </ToastButton>

            <ToastRoot
                open={open}
                onOpenChange={setOpen}
                duration={props.duration}
            >
                <ToastDescription>{props.description}</ToastDescription>

                <ToastAction asChild altText="Ok">
                    <ToastButton variant="green" size="small">
                        {props.labelOk}
                    </ToastButton>
                </ToastAction>
            </ToastRoot>

            <ToastViewport/>
        </ToastProvider>
    );
}

export default ComponentToast;