import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { Character } from '@/entities';
import { useCharacterSave } from '@/hooks/useCharacterSave';

interface CharacterItemProps {
    character: Character;
}

export const CharacterItem: FC<CharacterItemProps> = ({ character }) => {
    const [tempCharacter, setTempCharacter] = useState<Character | undefined>();
    const { updateCharacter, updateCharacterList } = useCharacterSave();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempCharacter((prev) => ({ ...prev!, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
        if (!tempCharacter) {
            console.log('unable to save character');

            return;
        }

        updateCharacter(tempCharacter);
        updateCharacterList(tempCharacter);
        setTempCharacter(undefined);
    };

    return (
        <Card
            data-automation-id='character-item'
            sx={{ minWidth: '300px' }}
        >
            <CardContent>
                <Stack
                    alignItems='center'
                    justifyContent='center'
                >
                    {!tempCharacter ? (
                        <Button
                            variant='contained'
                            color='primary'
                            style={{ marginBottom: '20px' }}
                            onClick={() => setTempCharacter(character)}
                        >
                            Редактировать
                        </Button>
                    ) : (
                        <Button
                            variant='contained'
                            color='secondary'
                            style={{ marginBottom: '20px' }}
                            onClick={handleSave}
                        >
                            Сохранить
                        </Button>
                    )}
                </Stack>

                {tempCharacter ? (
                    <Stack p='32px'>
                        <TextField
                            label='Name'
                            name='name'
                            value={tempCharacter?.name}
                            onChange={handleChange}
                        />
                    </Stack>
                ) : (
                    <>
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
                    </>
                )}
            </CardContent>
        </Card>
    );
};
