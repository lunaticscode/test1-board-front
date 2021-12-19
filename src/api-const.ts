export const API_PATH = {
    GET_ALL_BOARDS: "boards/" as string,
    GET_ONE_BOARD: (id) => `boards/${id}/` as string,
    CREATE_BOARD: "boards/create/" as string,
}

const MODEL_PATH = {
    BOARD: "boards" as string
}

export const BOARD_API_FORM = {
    GET_ALL_BOARDS: {
        PATH: `${MODEL_PATH.BOARD}` as string,
        METHOD: "get",
    },
    GET_ONE_BOARD: {
        PATH: (id) => `${MODEL_PATH.BOARD}/${id}` as string,
        METHOD: "get",
    },
    CREATE_BOARD: {
        PATH: `${MODEL_PATH.BOARD}/create` as string,
        METHOD: "post",
    },
    DELETE_BOARD: {
        PATH: (id) => `${MODEL_PATH.BOARD}/${id}` as string,
        METHOD: "delete",
    }
}