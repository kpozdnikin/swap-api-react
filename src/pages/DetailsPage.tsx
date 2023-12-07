import type { FC } from 'react';
import { Stack, Typography, CircularProgress, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
            alignItems='flex-start'
            justifyContent='flex-start'
            p='32px'
            sx={{ width: '100%', position: 'relative' }}
        >
            <IconButton
                sx={{ position: 'absolute', left: 1, top: 1 }}
                onClick={() => navigate(-1)}
            >
                <ArrowBackIcon />
            </IconButton>

            <br />

            {isFetching ? (
                <Stack
                    alignItems='center'
                    justifyContent='center'
                    width='100%'
                >
                    <CircularProgress />
                </Stack>
            ) : !character ? (
                <Typography>Character not found.</Typography>
            ) : (
                <CharacterItem character={character} />
            )}
        </Stack>
    );
};
