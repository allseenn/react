import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Задача 1" },
        { id: 2, text: "Задача 2" },
        { id: 3, text: "Задача 3" }
    ]);
    const [inputValue, setInputValue] = useState("");
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey',  width: '300px'}}>
                    <h2>Список задач</h2>
                    <p>Для добавления задачи, введите текст в поле "Здача" и нажмите кнопку "Добавить задачу".</p>
                    <p>Для удаления задачи, нажмите на иконку ведра рядом с задачей.</p>
            </Box>

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Задача"
                    variant="outlined"
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue} // Add value prop
                />
            </Box>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                    setComments(prev => [...prev, { id: comments.length + 1, text: inputValue }])
                    setInputValue('')
                }}>Добавить задачу</Button>
            </Stack>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                    {comments.map(comment => (
                        <ListItem key={comment.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DeleteIcon onClick={() => setComments(prev => prev.filter(c => c.id !== comment.id))} />
                                </ListItemIcon>
                                <ListItemText primary={comment.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    )
}