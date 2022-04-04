import { Story, Meta } from '@storybook/react';
import AlertDialog, { AlertDialogProps } from "../components/AlertDialog/AlertDialog";

export default {
    title: 'Componentes/AlertDialog',
    component: AlertDialog,
    argTypes: {
        positionButtons: {
            control: { 
                type: 'select',
                options: ['center', 'left', 'right']
            },
        },

        colorButton: {
            control: {
                type: 'select',
                options: ['violet', 'red', 'mauve', 'blackA', 'green']
            },
        },

        onConfirm: { action: 'confirm' },
        onCancel: { action: 'cancel' },
    }
} as Meta;
 
const Template: Story<AlertDialogProps> = (args) => <AlertDialog {...args} />;

export const Confirm = Template.bind({});
Confirm.args = {
    title: 'Título do Alert',
    description: 'Texto do Alert',
    labelButton: 'Nome do Botão',
    labelOk: 'Nome do Botão de Confirmação',
    labelCancel: 'Nome do Botão de Cancelar',
    colorButton: 'mauve',
    colorButtonOk: 'green',
    colorButtonCancel: 'red',
    positionButtons: 'right'
};