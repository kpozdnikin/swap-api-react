import type { FC } from 'react';
import React, { useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';

import { useCharacters } from '../hooks';
import { CharactersList } from '../features';

export const MainPage: FC = () => {
    const [searchString, setSearchString] = useState('');
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useCharacters(searchString, page);

    if (isLoading) {
        return <Typography>Loading characters...</Typography>;
    }

    if (isError) {
        return <Typography>Error loading characters.</Typography>;
    }

    console.log('data', data);

    const characters = data?.data?.results;

    return (
        <Stack>
            {isLoading ? (
                <CircularProgress />
            ) : isError ? (
                <Typography>Error loading characters.</Typography>
            ) : characters?.length ? (
                <CharactersList characters={characters} />
            ) : (
                <Typography>No characters found.</Typography>
            )}
        </Stack>
    );
};
