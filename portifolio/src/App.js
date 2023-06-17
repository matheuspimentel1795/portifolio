import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Grid } from '@mui/material';
import Skills from './Skills';
import ProfessionalExperience from './ProfessionalExperience';
import AccountMenu from './AccountMenu';


function App() {
  return (
    <Grid>
      <AccountMenu/>
   <Home/>
   <Skills/>
   <ProfessionalExperience/>
   </Grid>
  );
}

export default App;
