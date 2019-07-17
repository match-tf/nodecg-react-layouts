import React from 'react'
import styled from 'styled-components'
import colors from '../config/colors'
import variables from '../config/variables'
import pattern from '../assets/pattern'
import Clock from 'react-live-clock'
import SponsorLogos from './SponsorLogos'

const Bottomground = styled.section`
  background-color: ${colors.background.primary};
  background-image: ${pattern};
  height: ${variables.bottomBarHeight}rem;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
`
const Section = styled.div`
  flex-grow: ${props => props.grow ? props.grow  : "unset" };
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  height: 100%;
  padding: 0 2rem;
  min-width: 200px;
  max-width: 400px;
  
  & > h1 {
    font-size: ${Number(variables.bottomBarHeight)/3}rem;
  }
  & > h2 {
    font-size: ${Number(variables.bottomBarHeight)/5}rem;
  }
  & > div.container {
    max-width: 300px;
  }
  & > div > img {
    max-width: 100%;
    height: ${variables.bottomBarHeight}rem;
  }
`


const Bottom = props => {

  const Logo = () => {
    if (props.logo) {
      if (props.logo.length > 0) {
        return (
          <Section>
            <div className="container">
              <img src={props.logo[0].url}/>
            </div>
          </Section>
        )
      } else { return null }
    } else {
      return null
    }
  }

  const Sponsors = () => {
    if (props.sponsorLogos) {
      if (props.sponsorLogos.length > 0) {
        return (
          <Section>
            <SponsorLogos logoArray={props.sponsorLogos}/>
          </Section>
        )
      } else { return null }
    } else {
      return null
    }
  }

  return (
    <Bottomground>
      <Section>
        <h1>Up next</h1>
        <h2>{props.upnext}</h2>
      </Section>
      <Section>
        <h1>Local Time</h1>
        <h2>
         <Clock format={'HH:mm:ss'} ticking={true} />
        </h2>
      </Section>
      <Sponsors />
      <Logo />
    </Bottomground>
  )
}

export default Bottom