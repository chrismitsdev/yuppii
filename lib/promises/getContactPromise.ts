import {getTranslations} from 'next-intl/server'

const getContactPromise = async (locale: string) => {
  const tFormSection = await getTranslations({locale, namespace: 'Contact.Section1'})
  const tForm = await getTranslations({locale, namespace: 'Contact.Section1.Form.Fields'})
  const tNavigationSection = await getTranslations({locale, namespace: 'Contact.Section2'})
  const tNavigation = await getTranslations({locale, namespace: 'Contact.Section2.Navigation'})

  const formSection = {
    title: tFormSection('title'),
    subtitle: tFormSection('subtitle'),
  }

  const navigationSection = {
    title: tNavigationSection('title'),
    subtitle: tNavigationSection('subtitle'),
  }

  const translatedFormFields = {
    name: {
      label: tForm('name.label'),
      required: tForm('name.required'),
      pattern: tForm('name.pattern')
    },
    email: {
      label: tForm('email.label'),
      required: tForm('email.required'),
      pattern: tForm('email.pattern'),
      providers: tForm('email.providers')
    },
    phone: {
      label: tForm('phone.label'),
      required: tForm('phone.required'),
      pattern: tForm('phone.pattern')
    },
    feedback: {
      label: tForm('feedback.label'),
      required: tForm('feedback.required')
    },
    button: {
      label: tForm('button.label'),
      loading: tForm('button.loading')
    }
  }

  const translatedNavigation = {
    location: tNavigation('location'),
    email: tNavigation('email'),
    phone: tNavigation('phone')
  }

  return {
    formSection,
    translatedFormFields,
    navigationSection,
    translatedNavigation
  }
}

export {getContactPromise}