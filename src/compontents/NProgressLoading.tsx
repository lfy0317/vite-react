import { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function NProgressLoading() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      NProgress.start();
      setVisible(true);
    }, 60);

    return () => {
      NProgress.done();
      timer && window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }
  return <span />;
}
