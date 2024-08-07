import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AISearch() {
  // 获取 route 对象参数
  const params = useParams();

  useEffect(() => {
    console.info(params);
  }, [params]);

  return <div>Chat GLM</div>;
}

export default AISearch;
