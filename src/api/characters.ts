import {api} from "./axios";
import {Character} from "../entities";
import {AxiosResponse} from "axios";

export interface GetCharactersProps {
    searchString?: string;
    pageParam?: number;
}

export interface GetCharactersResponse {
    count: number;
    results: Character[];
    next: any;
    previous: any;
}

export interface ErrorResponse {
    detail: string;
}

export const getCharacters = ({ searchString, pageParam = 1 }: GetCharactersProps): Promise<AxiosResponse<GetCharactersResponse, ErrorResponse>> => api.get(`/people`, {
    params: {
        format: 'json',
        search: searchString,
        page: pageParam,
    },
});

export interface GetCharacterProps {
    characterId: string;
}


export const getCharacter = ({ characterId }: GetCharacterProps): Promise<AxiosResponse<Character, ErrorResponse>> => api.get(`/people/${characterId}`);