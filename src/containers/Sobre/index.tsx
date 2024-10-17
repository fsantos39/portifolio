import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
      dolores mollitia soluta fuga eaque necessitatibus porro cupiditate quo
      deserunt ducimus enim natus quaerat nobis asperiores consequuntur, non
      labore ullam neque.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=fsantos39&show_icons=true&theme=radical&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fsantos39&layout=compact&langs_count=16&theme=radical" />
    </GithubSecao>
  </section>
)

export default Sobre
