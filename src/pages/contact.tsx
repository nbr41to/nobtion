import Layout from '../components/Layout'
import ExtLink from '../components/ext-link'
import { StyledComponent } from '../styles/contact.styled'

// import sharedStyles from '../styles/shared.module.css'
// import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import Note from '../components/svgs/note'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/Knob_nbr41to',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/nbr41to',
  },
  {
    Comp: Note,
    alt: 'note icon',
    link: 'https://note.com/nbr41',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'nbr.41to@gmail.com',
  },
]

export default () => (
  <Layout titlePre="Contact">
    <StyledComponent>
      <ExtLink className="logo" href="https://nbr41.com/">
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        <h2>My Site</h2>
      </ExtLink>

      <div className="contact-btn">
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp />
            </ExtLink>
          )
        })}
      </div>
    </StyledComponent>
  </Layout>
)
