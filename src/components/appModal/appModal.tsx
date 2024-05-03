import React from "react";
import { stylesModal } from "./appModalStyle";
import { View, Text } from "react-native";
import AppTextInputModal from "../appTextInput/appTextInputModal";
import AppButtonModal from "../appButton/AppButtonModal";
import AppTitleModal from "../appTitle/appTitleModal";

export function AppModal({ handleCreate, handleCancel, password, nomeApp, setNomeApp }) {

    return (
        <View style={stylesModal.modalView}>
            <AppTitleModal text="Cadastre sua Senha"></AppTitleModal>

            <Text>Nome do aplicativo</Text>
            <AppTextInputModal value={nomeApp} editable={true} onChangeText={setNomeApp}/>

            <Text>Senha gerada</Text>
            <AppTextInputModal value={password} editable={false}/>

            <AppButtonModal action={handleCreate} text="criar" />
            <AppButtonModal action={handleCancel} text="cancelar" />
        </View>
    );
}