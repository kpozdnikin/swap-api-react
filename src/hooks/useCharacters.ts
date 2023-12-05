import type { UseInfiniteQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';

import type { GetCharactersResponse } from '@/api/characters';
import { getCharacters } from '@/api/characters';

export const getCharactersQueryKey = (searchString?: string) => [
    'characters',
    'list',
    searchString,
];

export const useCharacters = (
    searchString?: string,
): UseInfiniteQueryResult<AxiosResponse<GetCharactersResponse>> =>
    useInfiniteQuery(getCharactersQueryKey(searchString), () => getCharacters({ searchString }), {
        getNextPageParam: (
            lastPage: AxiosResponse<GetCharactersResponse>,
            pages: Array<AxiosResponse<GetCharactersResponse>>,
        ) => {
            if (lastPage.data.next) {
                return pages.length + 1;
            }

            return pages.length;
        },
    });
