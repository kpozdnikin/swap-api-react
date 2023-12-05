import type { FC } from 'react';
import React from 'react';
import { Stack, Typography } from '@mui/material';

import { CharactersList } from '@/features';

export const MainPage: FC = () => (
    <Stack padding='32px'>
        <Typography>Swap test app</Typography>

        <br />

        <CharactersList />
    </Stack>
);
