import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Page4() {
  // 获取 route 对象参数
  const params = useParams();

  useEffect(() => {
    console.info(params);
  }, [params]);

  return <div>page4</div>;
}

export default Page4;
