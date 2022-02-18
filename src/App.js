import "./styles.css";
import Topbar from "../src/components/topbar/topbar";
import Searchbar from "../src/components/searchbar/searchbar.js";
import Contentbody from "./content-body";

export default function App() {
  return (
    <>
      <Searchbar />
      <Topbar />
      <Contentbody />
    </>
  );
}
