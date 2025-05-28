import { useEffect, useContext } from "react";
import { ScrollContext } from "./index"

export default props => {
  const context = useContext(ScrollContext);
  useEffect(() => context.addBlock(props), []);
  return props.children;
};
