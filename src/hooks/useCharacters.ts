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

export interface UseCharactersResult {
    pages: Array<{ data: GetCharactersResponse }>;
}

export const useCharacters = (
    searchString?: string,
): UseInfiniteQueryResult<AxiosResponse<GetCharactersResponse>> =>
    useInfiniteQuery({
        queryKey: getCharactersQueryKey(searchString),
        queryFn: (props) => getCharacters({ searchString, ...props }),
        getNextPageParam: (lastPage: AxiosResponse<GetCharactersResponse>) => lastPage.data.next,
    });
