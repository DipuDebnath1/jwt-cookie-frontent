import { AuthProvider } from "./auth";
import { SettingProvider } from "./setting";

export default function ContextProvider({ children }) {

    return (
        <SettingProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SettingProvider>
    )

}