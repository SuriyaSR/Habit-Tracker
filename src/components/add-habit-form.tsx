import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addHabit } from "../store/habit-slice";

const AddHabit: React.FC = () => {
    const [name, setName] = useState<string>(''); 
    const [frequency, setFrequency] = useState<"daily" | "weekly">('daily');

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() && frequency) {
            console.log("dispatching addHabit with:", { name, frequency });
            dispatch(addHabit({ name, frequency }));
            setName('');
            setFrequency('daily');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Habit Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter habit name" fullWidth/>
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                    <Button variant="contained" color="primary" type="submit" sx={{ marginTop: 2 }}>
                        Add Habit
                    </Button>
                </FormControl>
            </Box>
        </form>
    )
}

export default AddHabit