import React, {useEffect, useState} from 'react';
import RouteValuesType from "./routeValuesType";
import {useRouter} from "next/router";

const routeValues: Array<RouteValuesType> = [
    {label: "게시판생성", value: "/board"},
    {label: "마이페이지", value: "/mypage"},
    {label: "로그아웃", value: "/logout"}
]
const PrivateRouter:React.FC = () => {
    const router = useRouter();
    return(
        <>
            {
                routeValues.map( (route, index) => {
                    return(
                        <a key={index} onClick={() => router.push(route.value)}>
                            {route.label}
                        </a>
                    )
                })
            }
        </>
    )
}
export default PrivateRouter;