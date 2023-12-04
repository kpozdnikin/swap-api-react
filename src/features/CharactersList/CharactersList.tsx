import React, {FC, useEffect, useState} from 'react';
import {Grid, Card, CardContent, Typography, CircularProgress, Box, TextField } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import {Character} from "../../entities";
import {useCharacters} from "../../hooks";

interface CharactersListProps {
    characters: Character[];
}

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
    const [searchString, setSearchString] = useState<string>('');
    const { data, fetchNextPage, hasNextPage, isFetching } = useCharacters(searchString);

    const { ref, inView } = useInView();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    };

    useEffect(() => {
        if (inView && hasNextPage) {
            void fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
        <>
            <TextField
                label="Search Characters"
                variant="outlined"
                fullWidth
                value={searchString}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px' }}
            />
            <Grid container spacing={2}>
                {characters.map((character, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{character.name}</Typography>
                                <Typography>Height: {character.height}</Typography>
                                <Typography>Mass: {character.mass}</Typography>
                                <Typography>Hair Color: {character.hair_color}</Typography>
                                <Typography>Skin Color: {character.skin_color}</Typography>
                                <Typography>Eye Color: {character.eye_color}</Typography>
                                <Typography>Birth Year: {character.birth_year}</Typography>
                                <Typography>Gender: {character.gender}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Box width='100%' height='300px' ref={ref} />
                {isFetching ? <CircularProgress /> : null }
            </Grid>
        </>
    );
};