import {useInfiniteQuery, UseInfiniteQueryResult } from "react-query";
import {ErrorResponse, getCharacters, GetCharactersResponse} from "../api/characters";
import {AxiosResponse} from "axios";

export const getCharactersQueryKey = (searchString?: string) => ['characters', 'list', searchString];

export const useCharacters = (searchString?: string): UseInfiniteQueryResult<AxiosResponse<GetCharactersResponse, ErrorResponse>> => {
    return useInfiniteQuery(getCharactersQueryKey(searchString), () => getCharacters({ searchString }), {
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.data.next) {
                return pages.length + 1;
            }
        },
    });
};