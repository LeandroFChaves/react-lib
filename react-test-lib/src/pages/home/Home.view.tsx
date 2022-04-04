import { useState } from 'react';
import { ComponentAlertDialog, ComponentToast } from 'ds-components';

export default function Home () {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Voltar</a>
                    </li>
                </ul>
            </nav>

            <h1>Home</h1>

            <ComponentToast 
                title='Teste'
                description='Teste'
                labelButton='Teste'
                labelOk='Ok'
                open={open}
                onOpenChange={setOpen}
                duration={10000}
            />

            <ComponentAlertDialog
                colorButton="mauve"
                colorButtonCancel="red"
                colorButtonOk="green"
                labelButton="Apagar"
                title="Atenção"
                description="Deseja realmente excluir?"
                labelCancel="Não"
                labelOk="Sim"
                onCancel={() => {cancelDialog()}}
                onConfirm={() => {
                    confirmDialog();
                    setOpen(true);
                }}
                positionButtons="right"
            />
        </div>
    );
}

function confirmDialog() {
    console.log('Ok')
}

function cancelDialog() {
    console.log('Cancel');   
}