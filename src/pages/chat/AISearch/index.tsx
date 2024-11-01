import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "@/store/app-context";
import { observer } from "mobx-react";

const AISearch = observer(() => {
    // 获取 route 对象参数
    const params = useParams();
    const { store } = useContext(AppContext);

    useEffect(() => {
        console.info(params);
        store?.setTitle("AISearch");
    }, [params]);

    return <div>{store?.title}</div>;
});

export default AISearch;
