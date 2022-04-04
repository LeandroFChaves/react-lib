import { Story, Meta } from '@storybook/react';
import Toast, { ToastProps } from "../components/Toast/Toast";

export default {
    title: 'Componentes/Toast',
    component: Toast
} as Meta;
 
const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = {
    title: 'Título',
    description: 'Descrição',
    labelButton: 'Nome do Botão',
    labelOk: 'Botão Ok',
};