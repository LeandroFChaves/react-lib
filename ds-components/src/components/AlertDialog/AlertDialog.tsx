import React from "react";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {
  AlertDialogFlex,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertButton,
} from './AlertDialog.styles';

export interface AlertDialogProps {
  title: string;
  description: string;

  labelButton: string;
  labelOk: string;
  labelCancel: string;

  colorButton?: 'green' | 'violet' | 'red' | 'mauve';
  colorButtonOk?: 'green' | 'violet' | 'red' | 'mauve';
  colorButtonCancel?: 'green' | 'violet' | 'red' | 'mauve';

  positionButtons?: 'center' | 'left' | 'right';

  onConfirm: () => any;
  onCancel: () => any;
}

const ComponentAlertDialog = (props: AlertDialogProps) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <AlertButton variant={ props.colorButton }>
            { props.labelButton }
        </AlertButton>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />

        <AlertDialogContent aria-modal='true'>
            <AlertDialogTitle>{ props.title }</AlertDialogTitle>

            <AlertDialogDescription>{ props.description }</AlertDialogDescription>

            <AlertDialogFlex css={{ justifyContent: props.positionButtons }}>
                <AlertDialog.Cancel asChild>
                    <AlertButton
                        css={{ marginRight: 25 }}
                        variant={ props.colorButtonCancel }
                        onClick={ props.onCancel }>
                            { props.labelCancel }
                    </AlertButton>
                </AlertDialog.Cancel>

                <AlertDialog.Action asChild>
                    <AlertButton
                        onClick={ props.onConfirm }
                        variant={ props.colorButtonOk }>
                            { props.labelOk }
                    </AlertButton>
                </AlertDialog.Action>
            </AlertDialogFlex>
        </AlertDialogContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default ComponentAlertDialog;