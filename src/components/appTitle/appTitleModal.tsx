import { Text } from "react-native";
import { styles } from "./appTitleModalStyle";
import React from "react";

interface AppTitleProps {
    text: string;
}

export default function AppTitleModal({ text }: AppTitleProps) {
    return <Text style={styles.title}>{text}</Text>;
}