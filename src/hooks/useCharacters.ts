import type { UseInfiniteQueryResult } from 'react-query';
import { useInfiniteQuery } from 'react-query';
import type { AxiosResponse } from 'axios';

import type { ErrorResponse, GetCharactersResponse } from '../api/characters';
import { getCharacters } from '../api/characters';

export const getCharactersQueryKey = (searchString?: string) => [
    'characters',
    'list',
    searchString,
];

export const useCharacters = (
    searchString?: string,
): UseInfiniteQueryResult<AxiosResponse<GetCharactersResponse, ErrorResponse>> =>
    useInfiniteQuery(getCharactersQueryKey(searchString), () => getCharacters({ searchString }), {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.next) {
                return pages.length + 1;
            }
        },
    });
