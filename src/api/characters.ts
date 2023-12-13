import type { AxiosResponse } from 'axios';
import axios from 'axios';

import type { Character } from '@/entities';

import { api, BASE_URL } from './axios';

export interface GetCharactersProps {
    searchString?: string;
    pageParam?: string;
    signal?: AbortSignal;
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
    pageParam,
    signal,
}: GetCharactersProps): Promise<AxiosResponse<GetCharactersResponse>> =>
    api.get<GetCharactersResponse>(pageParam || `${BASE_URL}/people`, {
        params: {
            format: 'json',
            ...(searchString ? { search: searchString } : {}),
        },
        signal,
    });

export interface GetCharacterProps {
    characterId: string;
}

export const getCharacter = ({
    characterId,
}: GetCharacterProps): Promise<AxiosResponse<Character>> =>
    api.get<Character>(`${BASE_URL}/people/${characterId}`);
