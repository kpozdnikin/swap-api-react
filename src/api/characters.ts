import type { AxiosResponse } from 'axios';

import type { Character } from '@/entities';

import { api } from './axios';

export interface GetCharactersProps {
    searchString?: string;
    pageParam?: number;
}

export interface GetCharactersResponse {
    count: number;
    results: Character[];
    next: string;
    previous: string;
}

export interface ErrorResponse {
    detail: string;
}

export const getCharacters = ({
    searchString,
    pageParam = 1,
}: GetCharactersProps): Promise<AxiosResponse<GetCharactersResponse>> =>
    api.get<GetCharactersResponse>(`/people/`, {
        params: {
            format: 'json',
            search: searchString,
            page: pageParam,
            ...(searchString ? { search: searchString } : {}),
        },
    });

export interface GetCharacterProps {
    characterId: string;
}

export const getCharacter = ({
    characterId,
}: GetCharacterProps): Promise<AxiosResponse<Character>> =>
    api.get<Character>(`/people/${characterId}`);
