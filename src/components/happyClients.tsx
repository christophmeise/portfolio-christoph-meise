import React, { Component } from 'react'
import { Container } from '../styles/container'
import { HeadlineDark, SubHeadlineDark } from './globalStyle'

export default class HappyClients extends Component {
  render() {
    return (
      <section>
        <Container centered>
          <HeadlineDark style={{ marginBottom: '8px' }}>
            Happy Clients
        </HeadlineDark>
          <SubHeadlineDark>
            I had the pleasure to work with some of the most repected companies worldwide.
        </SubHeadlineDark>
        </Container>
      </section>
    )
  }
}
