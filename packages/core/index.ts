import { makeInstaller } from "@ws-element/utils";
import components from "./components";
import "@ws-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@ws-element/components";
export default installer;
