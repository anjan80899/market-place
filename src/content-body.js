import Sidebar from "../src/components/sidebar/sidebar";
import MainContent from "../src/maincontent";

export default function Contentbody() {
  return (
    <div className="content-body">
      <Sidebar />
      <MainContent />
    </div>
  );
}
