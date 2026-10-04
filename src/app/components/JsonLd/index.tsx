import {LINKS, PAGE_URL, PERSON_NAME, PRICE, SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN, withBase} from 'config/site';
import {faqItems} from 'components/Faq/utils';
import {scopeItems} from 'components/Scope/utils';

const personId = `${PAGE_URL}#person`;
const serviceId = `${PAGE_URL}#service`;
const photo = `${SITE_ORIGIN}${withBase('/images/about.webp')}`;
const sameAs = [LINKS.instagram, LINKS.telegram];

const graph = [
  {
    '@type': 'WebSite',
    '@id': `${PAGE_URL}#website`,
    url: PAGE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: 'uk-UA',
    publisher: {'@id': personId},
  },
  {
    '@type': 'Person',
    '@id': personId,
    name: PERSON_NAME,
    jobTitle: 'Психолог, магістр клінічної психології',
    description: SITE_DESCRIPTION,
    url: PAGE_URL,
    image: photo,
    telephone: LINKS.phone,
    sameAs,
    knowsAbout: ['Когнітивно-поведінкова терапія (КПТ)', ...scopeItems.map(({text}) => text)],
    knowsLanguage: 'uk',
  },
  {
    '@type': 'ProfessionalService',
    '@id': serviceId,
    name: SITE_NAME,
    url: PAGE_URL,
    image: photo,
    telephone: LINKS.phone,
    description: SITE_DESCRIPTION,
    priceRange: `${PRICE.amount} ${PRICE.currency}`,
    areaServed: {'@type': 'Country', name: 'Україна'},
    availableLanguage: 'uk',
    founder: {'@id': personId},
    sameAs,
    makesOffer: {
      '@type': 'Offer',
      name: `Онлайн консультація психолога, ${PRICE.minutes} хв`,
      price: PRICE.amount,
      priceCurrency: PRICE.currency,
      availability: 'https://schema.org/InStock',
      url: LINKS.booking,
      itemOffered: {
        '@type': 'Service',
        serviceType: 'Психологічна консультація онлайн',
        provider: {'@id': personId},
      },
    },
  },
  {
    '@type': 'FAQPage',
    '@id': `${PAGE_URL}#faq`,
    mainEntity: faqItems.map(({question, answer}) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {'@type': 'Answer', text: answer},
    })),
  },
];

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({'@context': 'https://schema.org', '@graph': graph}).replace(/</g, '\\u003c'),
    }}
  />
);

export default JsonLd;
