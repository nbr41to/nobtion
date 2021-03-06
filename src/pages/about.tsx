import Link from 'next/link'
import Layout from '../components/Layout'
import ExtLink from '../components/ext-link'
import { StyledComponent } from '../styles/about.styled'

export default () => (
  <Layout titlePre="About">
    <StyledComponent>
      <div className="concept">
        <img src="/top.jpg" style={{ width: '100%' }} />
        <h2>Technology × Psychology</h2>
        <p>
          全人類の必修科目に「心理学」と「IT」を追加します。なぜなら、「どうやったら人間は幸せになるか」を知り、そのために「技術的に今、どこまで可能なのか」を知ることで、社会貢献のできる人に成長できるからです。
        </p>
      </div>
      <div className="description">
        <section>
          <h3>Description</h3>
          <p>
            というように考えている僕のすべてをここにアウトプットします。内容はプログラミングと心理学を軸とした、テクノロジーやアンチエイジングなどの日常的なこともBlogとして発信していきます。みなさんの幸福のかけらになることができれば嬉しいです。
          </p>
        </section>
        <section>
          <h3>脳の可塑性とは</h3>
          <p>
            人間の脳には可塑性という性質があり、新しい概念や環境を受け入れて強く育つようになっています。この可塑性は、3歳付近と14歳付近で最大化します。特に14歳付近はいろんなことに悩まされる時期かと思います。そんな可塑性は30歳を越えたあたりから、下降傾向にあると言います。つまり、新しい概念や環境を受け入れることが難しくなってきます。僕はそれが怖いです。それが教育の妨げになる現場を幾度となく経験したからです。自分だけはそうなりたくない。そんなエゴから、第2の人生が始まった。
          </p>
        </section>
        <section>
          <h3>中の人</h3>
          <p>Knob/のぶ</p>
          <p>
            6年間務めた学校の専任講師をやめて、自由な生き方を教育しています。臆病だった人生よ、さようなら。趣味はスノボーと俯瞰。front
            engineer/プログラミング講師/数学講師/HSP/教育/心理学/Technology/ルービックキューブ/公認心理士Gルート/Notion/
            仕事の依頼はDMから
          </p>
          <ExtLink href="https://twitter.com/Knob_nbr41to">
            <span className="twitter-link">@Knob_nbr41to</span>
          </ExtLink>
        </section>
        <section>
          <h3>Notionとは</h3>
          <img className="notion-img" src="/notion.png" />
          <p>
            さて、そんな新しいもの好きの僕が愛してやまない万能ノートアプリであるNotionの紹介です。メモ、SNS、データベース、メディア埋め込みなどのありとあらゆる機能が持ち込まれたアプリケーションとなってます。是非使ってみてください！僕のまとめたNotionの使い方は
            <ExtLink href="https://www.notion.so/nob41to/About-Notion-6e8c4ac4a64e44959d8d9f6629d4f9f5">
              こちら
            </ExtLink>
            。
          </p>
        </section>
        <section>
          <h3>NotionBlogとは</h3>
          <img className="notionblog-img" src="/vercel-and-notion.png" />
          <p>
            そんなNotionのデータベースを活用してBlogが作れるフレームワークをNextjsを開発しているVercel社の社員さんが開発してくれました！React系統のプログラミング学習にもってこいなので、
            <ExtLink href="https://twitter.com/___35d">@__35d</ExtLink>
            さんに教わりながら実際に運用しています！
          </p>
        </section>
      </div>
    </StyledComponent>
  </Layout>
)
