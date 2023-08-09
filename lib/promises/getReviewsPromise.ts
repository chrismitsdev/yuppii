import {StaticImageData} from 'next/image'
import {getTranslator} from 'next-intl/server'
import * as avatars from '@/public/games/avatars'

const getReviewsPromise = async (locale: string) => {
  const tSection = await getTranslator(locale, 'Games.Section2')
  const tReviews = await getTranslator(locale, 'Games.Section2.Reviews')

  const reviewsSection = {
    title: tSection('title'),
    subtitle: tSection('subtitle')
  }

  const translatedReviews: Array<{author:string, comment: string, avatar: StaticImageData}> = [
    {
      author: 'Elena M', 
      comment: tReviews('review1'), 
      avatar: avatars.elena_m
    },
    {
      author: 'Olga Politi', 
      comment: tReviews('review2'), 
      avatar: avatars.olga_politi
    },
    {
      author: 'Petros Kilamenakis', 
      comment: tReviews('review3'), 
      avatar: avatars.petros_kilamenakis
    },
    {
      author: 'Zoe Bah', 
      comment: tReviews('review4'), 
      avatar: avatars.zoe_bah
    },
    {
      author: 'Iosif Darousis', 
      comment: tReviews('review5'), 
      avatar: avatars.iosif_darousis
    },
    {
      author: 'Stella Daviti', 
      comment: tReviews('review6'), 
      avatar: avatars.stella_daviti
    },
    {
      author: 'M Papagewrgiou', 
      comment: tReviews('review7'), 
      avatar: avatars.m_papagewrgiou
    },
    {
      author: 'Kyriakos Xatz', 
      comment: tReviews('review8'), 
      avatar: avatars.kyriakos_xatz
    },
    {
      author: 'Dimsideris', 
      comment: tReviews('review9'), 
      avatar: avatars.dimsideris
    }
  ]

  return {
    reviewsSection,
    translatedReviews
  }
}

export {getReviewsPromise}

//const reviews: Array<{author:string, comment: string, avatar: StaticImageData}> = [
//  {
//    author: 'Elena M', 
//    comment: 'Είναι υπέροχος χώρος, εκπληκτική εξυπηρέτηση ευγενεστατο προσωπικό, οι κοπέλες στον παιδότοπο απίστευτες με όλα τα παιδιά η μικρή μου τις αγαπά πολύ. Ένα πάρκο με γνώμονα να περνούν καλά τα παιδιά και οι γονείς!', 
//    avatar: avatars.elena_m
//  },
//  {
//    author: 'Olga Politi', 
//    comment: 'Πάρα πολύ καλό Λούνα Παρκ όπου μπορείς να βρείς τα πάντα! Μέχρι και θάλαμο εικονικής πραγματικότητας με καρέκλες που περιστρέφονται αναλόγως το θέμα που βλέπεις με τα γυαλιά 3D! Οι τιμές είναι φυσιολογικές.', 
//    avatar: avatars.olga_politi
//  },
//  {
//    author: 'Petros Kilamenakis', 
//    comment: 'Ωραία σχεδιασμένος και φιλικός προς τα παιδιά χώρος! Υπάρχουν δραστηριότητες που σπανίζουν ακόμα και στα μεγάλα αστικά κέντρα! Φιλικό και εξυπηρετικό προσωπικό με προτεραιότητα στην ασφάλεια κατά την διασκέδαση!', 
//    avatar: avatars.petros_kilamenakis
//  },
//  {
//    author: 'Zoe Bah', 
//    comment: 'Μεγάλος χώρος με αρκετά παιχνίδια για τα παιδιά,ανάλογα με την ηλικία τους. Έχει μεγάλα φουσκωτά για τα μικρότερα. Οι τιμές φυσιολογικές για Λούνα Πάρκ.', 
//    avatar: avatars.zoe_bah
//  },
//  {
//    author: 'Iosif Darousis', 
//    comment: 'Προσιτές τιμές, πολύ εξυπηρετικό προσωπικό, ευγενικό και ευχάριστο! Μεγάλη ποικιλία δραστηριοτήτων και παιχνιδιών, το συνιστώ ανεπιφύλακτα!', 
//    avatar: avatars.iosif_darousis
//  },
//  {
//    author: 'Stella Daviti', 
//    comment: 'Ωραίο πάρκο, για παιδιά κάτω των 10 ετών και όχι μόνο. Πολύ μεγάλος αριθμός προσωπικού για να είστε ήσυχοι με τα παιδιά σας.', 
//    avatar: avatars.stella_daviti
//  },
//  {
//    author: 'M Papagewrgiou', 
//    comment: 'Ένα πολύ καλό μέρος για να χαλαρώσεις όσο τα παιδιά σου θα εξαντλούνται! Μην σου πω ότι θα μπεις στον πειρασμό να γίνεις και συ παιδί..!!', 
//    avatar: avatars.m_papagewrgiou
//  },
//  {
//    author: 'Kyriakos Xatz', 
//    comment: 'Χαρά καί διασκέδαση, πολύ καλό μέρος γιά ξεφάντωμα! Ένας υπέροχος παιδότοπος στην καρδιά της πόλης δίπλα στην θάλασσα!', 
//    avatar: avatars.kyriakos_xatz
//  },
//  {
//    author: 'Dimsideris', 
//    comment: 'Εξαιρετική τοποθεσία με πολλά παιχνίδια για μικρούς και μεγάλους. Ευγενικό και φιλικό προσωπικό και χαμηλές τιμές στα παιχνίδα και τις δραστηριότητες!', 
//    avatar: avatars.dimsideris
//  }
//]