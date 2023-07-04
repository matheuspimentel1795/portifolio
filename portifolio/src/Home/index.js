import { Grid } from '@mui/material';
import {
    useMemo,
  } from 'react'
import profile from '../assets/profile.jpg'
import perfil from '../assets/perfil.jpg'
import { ProfileImage, ProfileImageMobile } from './styles';

function Home () {
    const { innerWidth: screenWidth } = window
    const isMobile = useMemo(() => screenWidth < 768, [screenWidth])
    return (
        <Grid sx={{backgroundColor: 'limegreen', width: '100%'}} display={!isMobile ?'flex' : 'grid'} alignItems={'center'} textAlign={isMobile? 'center': ''} justifyContent={!isMobile? 'flex-start': 'center'} padding={"2%"} container collums={12}>
            <Grid sm={4} xs={12}  item >
            {!isMobile?
            <ProfileImage src={perfil}/>
            :
            <ProfileImageMobile src={perfil}/>
            }
            
            </Grid>
            <Grid  sm={6} xs={12} item>          
            <h1>Quem sou eu</h1>
            <h3>Sempre fui um entusiasta pela área de
tecnologia. Fiz minha migração de carreira da
engenharia para a área de tecnologia em 2021 .
Atualmente trabalho como desenvolvedor Full
Stack a dois anos e tenho conhecimentos como front-end e
back-end, utilizando HTML, CSS, Java Script,
React.Js ,incluindo Hooks, redux,sagas e Styled-
Components ,Node.Js, Nest.Js, Adonis.Js, C#, Asp
Net, .NET, consumo de API rest, Git, GitHub e
GitLab. Estou sempre buscando as melhores
oportunidades.</h3>
            </Grid>
        </Grid>

    )
}

export default Home