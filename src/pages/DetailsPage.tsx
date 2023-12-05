import type { FC } from 'react';
import { Grid, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

import { useCharacter } from '@/hooks';
import type { Character } from '@/entities';

export const DetailsPage: FC = () => {
    const { itemId } = useParams();
    const { data, isFetching } = useCharacter(itemId);
    const navigate = useNavigate();
    const character: Character | null = data?.data || null;

    if (isFetching) {
        return <Typography>Loading character...</Typography>;
    }

    if (!character) {
        return <Typography>Character not found.</Typography>;
    }

    return (
        <Stack
            alignItems='flex-start'
            justifyContent='flex-start'
            p='64px'
        >
            <Button
                variant='contained'
                onClick={() => navigate(-1)}
            >
                Назад
            </Button>

            <br />

            <Card>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h5'
                    >
                        {character.name}
                    </Typography>

                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Typography>Height: {character.height}</Typography>

                            <Typography>Mass: {character.mass}</Typography>

                            <Typography>Hair Color: {character.hair_color}</Typography>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Typography>Skin Color: {character.skin_color}</Typography>

                            <Typography>Eye Color: {character.eye_color}</Typography>

                            <Typography>Birth Year: {character.birth_year}</Typography>

                            <Typography>Gender: {character.gender}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Stack>
    );
};
