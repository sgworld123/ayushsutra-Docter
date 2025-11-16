// Layout.js
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="ml-72 px-6 py-8"> {/* ml-72 matches Sidebar width + margin */}
        {children}
      </main>
    </div>
  );
}
