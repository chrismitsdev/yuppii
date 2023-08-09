import {useLocale} from 'next-intl'
import {Container} from '@/components/Container'
import {Section} from '@/components/Section'
import {Form} from '@/components/page/contact/Form'
import {Navigation} from '@/components/page/contact/Navigation'

const Contact = () => {
  const locale = useLocale()

  return (
    <Container>
      <Section
        title='Επικοινωνήστε μαζί μας'
        subtitle='Συμπληρώστε την παρακάτω φόρμα για να επικοινωνήσετε μαζί μας για πληροφορίες ή ερωτήσεις σχετικά με το Yuppii Luna Park'
      >
        <Form locale={locale} />
      </Section>
      <Section 
        title='Που θα μας βρείτε'
        subtitle='Το Yuppii Luna Park βρίσκεται ακριβώς κάτω απο τον Φάρο στην παραλιακή Αλεξανδρούπολης.'
      >
        <Navigation />
      </Section>
    </Container>
  )
}

Contact.displayName = 'Contact'

export {Contact}