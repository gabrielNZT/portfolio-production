import me from "./assets/me.png";
import { Card, Layout, Section } from './components'
import useTranslate from './hooks/useTranslate';
import ufc from './assets/ufc.png';

import './App.css'

function App() {
  const { translate } = useTranslate();

  return (
    <>
        <Layout>
          <Section className={"about_me"}>
            <Card src={me} alt={"Person_photo"} effect={'maskHover'} />
            <div>
              <h1> {translate('navigation.about_me')} </h1>
              <p dangerouslySetInnerHTML={{
                __html: translate('about_me.description')
              }} />
              <div className="about_me_ufc">
                <img alt='ufc-logo' src={ufc} />
              </div>
            </div>
          </Section>
        </Layout>
    </>
  )
}

export default App
