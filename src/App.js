import './App.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import CalculatedValues from './CalculatedValues';

const creatures = require('./creatures.json');

function App() {
  const [creature, setCreature] = useState(null);
  const [saddle, setSaddle] = useState(25);
  const [armor, setArmor] = useState(100);

  return (
    <div className="App">
      <Autocomplete
        autoComplete={true}
        autoHighlight={true}
        disablePortal
        fullWidth={true}
        options={creatures}
        renderInput={(params) => <TextField {...params} label="Creature" />}
        onChange={(e, c) => setCreature(c)}
      />
      <TextField sx={{ maxWidth: "50%" }} margin="normal" type="number" defaultValue={saddle} InputProps={{ inputProps: { min: 0, max: 1000 } }} label="Saddle Armor Rating" onChange={e => setSaddle(e.target.value)} />
      <TextField sx={{ maxWidth: "50%" }} margin="normal" type="number" defaultValue={armor} InputProps={{ inputProps: { min: 0, max: 1000 } }} label="Survivor Armor Rating" onChange={e => setArmor(e.target.value)} />
      <CalculatedValues creature={creature} saddle={saddle} armor={armor} />
    </div>
  );
}

export default App;
