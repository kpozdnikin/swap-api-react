import { useQueryClient } from '@tanstack/react-query';

import type { Character } from '@/entities';
import type { UseCharactersResult } from '@/hooks/useCharacters';
import { getCharactersQueryKey } from '@/hooks/useCharacters';
import { getCharacterQueryKey } from '@/hooks/useCharacter';

interface UseCharacterSaveResult {
    updateCharacter: (character: Character) => void;
    updateCharacterList: (character: Character) => void;
}

// TODO - add cache keeper to fix the case when the updated item locally is newer than on the server
// that case appears if we try to find something, then open, update, go back and try to find it again.
// Selected item will go from the server in older version
export const useCharacterSave = (): UseCharacterSaveResult => {
    const queryClient = useQueryClient();

    const updateCharacter = (characterToSave: Character) => {
        const characterId = characterToSave.url.split('/').filter(Boolean).pop();

        if (!characterId) {
            console.error('cannot find target character in the cache');

            return;
        }
        const characterQueryKey = getCharacterQueryKey(characterId);

        const characterFromCache: Character | undefined =
            queryClient.getQueryData<Character>(characterQueryKey);

        if (!characterFromCache) {
            console.error('cannot find target character in the cache');
        }

        queryClient.setQueryData(getCharacterQueryKey(characterId), {
            ...characterFromCache,
            data: characterToSave,
        });
    };

    const updateCharacterList = (characterToSave: Character) => {
        const charactersQueryKey = getCharactersQueryKey('');
        const charactersFromCache = queryClient.getQueryData<UseCharactersResult | undefined>(
            charactersQueryKey,
        );

        if (!charactersFromCache || !charactersFromCache?.pages) {
            console.error('cannot find character in the characters list cache');

            return;
        }

        queryClient.setQueryData(charactersQueryKey, {
            ...charactersFromCache,
            pages: charactersFromCache.pages.map((page) => ({
                ...page,
                data: {
                    ...page.data,
                    results: page.data.results.map((character) =>
                        character.url === characterToSave.url ? characterToSave : character,
                    ),
                },
            })),
        });
    };

    return {
        updateCharacter,
        updateCharacterList,
    };
};
