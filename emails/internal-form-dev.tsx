import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text
} from 'react-email'

export default function ContactFormInternal() {
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
          <Container className='max-w-xl'>
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
                  as='h3'
                >
                  Νέα υποβολή φόρμας
                </Heading>
              </Row>
            </Section>

            <Hr
              style={{borderTop: '1px solid #020303'}}
              className='my-0'
            />

            <Section className='px-4 pt-6 pb-8'>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h4'
                    className='my-0 leading-6'
                  >
                    Ονοματεπώνυμο:
                  </Heading>
                  <Text className='my-0'>Christos Mitsiaris</Text>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h4'
                    className='my-0 leading-6'
                  >
                    Email:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`mailto:chrismits88@gmail.com`}
                  >
                    chrismits88@gmail.com
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h4'
                    className='my-0 leading-6'
                  >
                    Τηλέφωνο:
                  </Heading>
                  <Link
                    className='text-sm leading-6'
                    href={`tel:+306973993703`}
                  >
                    +306973993703
                  </Link>
                </Column>
              </Row>
              <Row className='mb-6'>
                <Column>
                  <Heading
                    as='h4'
                    className='my-0 leading-6'
                  >
                    Μήνυμα:
                  </Heading>
                  <Text className='my-0'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
