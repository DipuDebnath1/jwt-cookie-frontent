import BasicLayout from "../components/layouts/BasicLayout";
import { useAuth } from "../context/auth";

export default function Landing() {
    const { user } = useAuth()
    return (
        <BasicLayout>
            <div className="flex flex-col gap-2">
                <h2> Name: {user?.name}  </h2>
                <h2> Email: {user?.email}  </h2>
            </div>
        </BasicLayout>
    )
}