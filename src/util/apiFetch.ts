export interface apiFetchResultType {
    result: Promise<Object>;
    error: null | string;
}

interface fetchOptionType {
    method: string;
    body?: Object;
}

export const api_fetch = async (path, option: fetchOptionType) => {
    let result = null;
    let error = null;

    const reqOption = {
        method: option.method.toLowerCase(),
        body: (option.method.toLowerCase() === "post") ? JSON.stringify(option.body) : null,
        headers: {"Content-Type": "application/json"}
    }

    if(option.method.toLowerCase() === "get") delete reqOption.body;

    try {
        result = await fetch(`${process.env.API_URL}/${path}`, reqOption)
                 .then(res => res.json())
    }
    catch(e){ error = e; }
    finally {  }

    return {result, error} as apiFetchResultType;
}