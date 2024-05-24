import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {MenuCategories} from '@/components/page/menu/MenuCategories'
import {getMenuPromise} from '@/lib/promises/getMenuPromise'

async function Menu({locale}: Locale) {
  const {translatedSection, translatedCategories} = await getMenuPromise(locale)
  
  return (
    <Container>
      <Section
        title={translatedSection.title}
        subtitle={translatedSection.subtitle}
      >
        <MenuCategories categories={translatedCategories} />
      </Section>
    </Container>
  )
}

Menu.displayName = 'Menu'

export {Menu}