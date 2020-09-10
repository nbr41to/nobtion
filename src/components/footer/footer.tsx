import ExtLink from '../ext-link'
import GitHub from '../svgs/github'
import Twitter from '../svgs/twitter'
import { StyledComponents } from './footer.styled'

export default () => (
  <>
    <StyledComponents>
      <small>© 2020 </small>
      <ExtLink href="https://nbr41.com/">Knob. </ExtLink>
      <small>Created by </small>
      <ExtLink href="https://github.com/ijjk/notion-blog">Notion Blog</ExtLink>
      <ExtLink href="https://twitter.com/Knob_nbr41to">
        <Twitter height={24} width={24} />
      </ExtLink>
      <ExtLink href="https://github.com/nbr41to">
        <GitHub height={24} width={24} />
      </ExtLink>
    </StyledComponents>
  </>
)
