import {useQuery, UseQueryResult} from "react-query";
import {ErrorResponse, getCharacter } from "../api/characters";
import {AxiosResponse} from "axios";
import {Character} from "../entities";

export const getCharacterQueryKey = (characterId: string) => ['characters', characterId]

export const useCharacter = (characterId: string): UseQueryResult<AxiosResponse<Character, ErrorResponse>, unknown> => {
    return useQuery(getCharacterQueryKey(characterId), () => getCharacter({ characterId }), {
        enabled: true,
    });
};