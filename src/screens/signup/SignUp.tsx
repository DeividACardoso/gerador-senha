import { View, Text, Button } from "react-native";
import { styles } from "./SignUpStyle";

import AppTitle from "../../components/appTitle/AppTitle";
import AppTextForm from "../../components/appTextForm/appTextForm";
import AppLink from "../../components/appLink/AppLink";

import AppTextFormPassword from "../../components/appTextForm/appTextFormPassword";
import AppButtonLogin from "../../components/appButtonLogin/appButtonLogin";
import React, { useState } from "react";

export default function Signup({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isButtonDisabled = !nome || !email || !password || !confirmPassword;
    return (
        <View style={styles.container}>
        <View>
            <AppTitle text="sign up" />
        </View>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Nome</Text>
        </View>
        <View style={styles.buttons}>
            <AppTextForm
            value={nome} onChangeText={setNome} placeholder="Digite seu nome" 
            />
        </View>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Email</Text>
        </View>
        <View style={styles.buttons}>
            <AppTextForm
            value={email} onChangeText={setEmail} placeholder="nome@email.com"
            />
        </View>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Senha</Text>
        </View>
        <View style={styles.buttons}>
            <AppTextFormPassword
            value={password} onChangeText={setPassword} placeholder="Digite sua senha"
            />
        </View>
        <View style={styles.labelContainer}>
            <Text style={styles.label}>Confirme Senha</Text>
        </View>
        <View style={styles.buttons}>
            <AppTextFormPassword
            value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirme sua senha"
            />
        </View>
            <AppButtonLogin text="Registrar" navigation={navigation} route="Signin" disabled={isButtonDisabled} ></AppButtonLogin>
        <View style={styles.buttons}>
        </View>
        </View>
    );
}