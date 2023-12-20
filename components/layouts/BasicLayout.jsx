
export default function BasicLayout({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {children}
        </div>
    );
}