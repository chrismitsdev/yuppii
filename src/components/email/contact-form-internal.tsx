import {
  Html,
  Head,
  Font,
  Tailwind,
  Body,
  Container,
  Img,
  Hr,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link
} from '@react-email/components'
import {ContactFormActionState} from '@/src/lib/actions'

const ContactFormInternal: React.FC<
  Readonly<ContactFormActionState['data']>
> = ({fullname, email, phone, message}) => {
  return (
    <Html>
      <Head>
        <Font
          webFont={{
            url: 'https://fonts.gstatic.com/s/arima/v5/neIFzCqmt4Aup9CG_oC-Nw.woff2',
            format: 'woff2'
          }}
          fontFamily='Arima'
          fontWeight={400}
          fontStyle='normal'
          fallbackFontFamily='Verdana'
        />
      </Head>
      <Tailwind>
        <Body className='m-0 bg-[#cee9ef] text-[#020303]'>
          <Container className='max-w-[576px]'>
            <Section className='px-4 pt-8 pb-6'>
              <Row className='mb-8'>
                <Link href='https://yuppii.gr/gr'>
                  <Img
                    className='w-full'
                    src='https://4y4jwmfhzutn57mw.myfritz.net:47971/nas/filelink.lua?id=04bcdecd70a484c5'
                    alt='Yuppii luna park logo'
                  />
                </Link>
              </Row>
              <Row>
                <Heading
                  className='my-0'
                  as='h4'
                >
                  Νέα υποβολή φόρμας
                </Heading>
              </Row>
            </Section>

            <Hr className='my-0 !border-t-[#020303]' />

            <Section className='px-4 pt-6 pb-8'>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Ονοματεπώνυμο:
                  </Heading>
                  <Text className='!my-0'>{fullname}</Text>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Email:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Τηλέφωνο:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`tel:${phone}`}
                  >
                    {phone}
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h5'
                    className='my-0 leading-6'
                  >
                    Μήνυμα:
                  </Heading>
                  <Text className='!my-0'>
                    {message || 'Ο χρήστης δεν άφησε κάποιο μήνυμα'}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactFormInternal.displayName = 'ContactFormInternal'

export {ContactFormInternal}
