import Header from 'components/Header';
import About from 'components/About';
import CheckIn from 'components/CheckIn';
import Scope from 'components/Scope';
import Process from 'components/Process';
import Approach from 'components/Approach';
import Breathe from 'components/Breathe';
import Principles from 'components/Principles';
import Conditions from 'components/Conditions';
import Faq from 'components/Faq';
import Final from 'components/Final';
import Contacts from 'components/Contacts';
import MobileCta from 'components/MobileCta';

const Main = () => (
  <>
    <Header />
    <main id="top">
      <About />
      <CheckIn />
      <Scope />
      <Process />
      <Approach />
      <Breathe />
      <Principles />
      <Conditions />
      <Faq />
      <Final />
    </main>
    <Contacts />
    <MobileCta />
  </>
);

export default Main;
