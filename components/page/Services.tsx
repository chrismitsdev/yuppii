import {useLocale as getLocale} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Cafe} from '@/components/page/services/Cafe'
import {Secondaries} from '@/components/page/services/Secondaries'
import {getServicesPromise} from '@/lib/promises/getServicesPromise'

const Services = async () => {
  const locale = getLocale()
  const {cafeSection, secondariesSection, translatedMenu} = await getServicesPromise(locale)

  return (
    <Container>
      <Section
        title={cafeSection.title}
        subtitle={cafeSection.subtitle}
      >
        <Cafe locale={locale} menu={translatedMenu} />
      </Section>
      <Section title={secondariesSection.title}>
        <Secondaries />
      </Section>
    </Container>
  )
}

Services.displayName = 'Services'

export {Services}