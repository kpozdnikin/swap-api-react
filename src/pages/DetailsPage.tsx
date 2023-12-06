import type { FC } from 'react';
import { Button, Stack, Typography, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

import { useCharacter } from '@/hooks';
import type { Character } from '@/entities';
import { CharacterItem } from '@/features/CharacterItem';

export const DetailsPage: FC = () => {
    const { itemId } = useParams();
    const { data, isFetching } = useCharacter(itemId);
    const navigate = useNavigate();
    const character: Character | null = data?.data || null;

    return (
        <Stack
            alignItems='center'
            justifyContent='center'
            p='64px'
        >
            <Button
                variant='contained'
                onClick={() => navigate(-1)}
            >
                Назад
            </Button>

            <br />

            {isFetching ? (
                <CircularProgress />
            ) : !character ? (
                <Typography>Character not found.</Typography>
            ) : (
                <CharacterItem character={character} />
            )}
        </Stack>
    );
};
