import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import RouteValuesType from "./routeValuesType";
const routeValues: Array<RouteValuesType> = [
    {label: "로그인", value: "/login"},
]
const PublicRouter = () => {
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
export default PublicRouter;