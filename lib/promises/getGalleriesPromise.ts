import {StaticImageData} from 'next/image'
import {getTranslator} from 'next-intl/server'
import * as carnivalGames from '@/public/games/galleries/carnival-games'
import * as inflatables from '@/public/games/galleries/inflatables'
import * as basket from '@/public/games/galleries/basket'
import * as bumperCars from '@/public/games/galleries/bumper-cars'
import * as cinema from '@/public/games/galleries/cinema'
import * as dryslope from '@/public/games/galleries/dryslope'
import * as formulaCars from '@/public/games/galleries/formula-cars'
import * as hawaiianSurfing from '@/public/games/galleries/hawaiian-surfing'
import * as junior from '@/public/games/galleries/junior'
import * as kiddyRides from '@/public/games/galleries/kiddy-rides'
import * as playground from '@/public/games/galleries/playground'
import * as tableSoccer from '@/public/games/galleries/table-soccer'
import * as train from '@/public/games/galleries/train'
import * as trampoline from '@/public/games/galleries/trampoline'
import * as electricCars from '@/public/games/galleries/electric-cars'
import * as airHockey from '@/public/games/galleries/air-hockey'
import * as cranes from '@/public/games/galleries/cranes'
import * as powerGames from '@/public/games/galleries/power-games'
import * as luckyGames from '@/public/games/galleries/lucky-games'

const getGalleriesPromise = async (locale: string) => {
  const tSection = await getTranslator(locale, 'Games.Section1')
  const tGalleries = await getTranslator(locale, 'Games.Section1.Galleries')

  const gamesSection = {
    title: tSection('title'),
    subtitle: tSection('subtitle')
  }

  const translatedGames: Array<Game & {images: StaticImageData[]}> = [
    {
      value: tGalleries('Inflatables.label').toLowerCase(),
      label: tGalleries('Inflatables.label'),
      images: Array.from(Object.values(inflatables))
    },
    {
      value: tGalleries('Playground.label').toLowerCase(),
      label: tGalleries('Playground.label'),
      images: Array.from(Object.values(playground))
    },
    {
      value: tGalleries('Trampoline.label').toLowerCase(),
      label: tGalleries('Trampoline.label'),
      images: Array.from(Object.values(trampoline))
    },
    {
      value: tGalleries('Cinema.label').toLowerCase(),
      label: tGalleries('Cinema.label'),
      images: Array.from(Object.values(cinema))
    },
    {
      value: tGalleries('Dryslope.label').toLowerCase(),
      label: tGalleries('Dryslope.label'),
      images: Array.from(Object.values(dryslope))
    },
    {
      value: tGalleries('BumperCars.label').toLowerCase(),
      label: tGalleries('BumperCars.label'),
      images: Array.from(Object.values(bumperCars))
    },
    {
      value: tGalleries('Junior.label').toLowerCase(),
      label: tGalleries('Junior.label'),
      images: Array.from(Object.values(junior))
    },
    {
      value: tGalleries('FormulaCars.label').toLowerCase(),
      label: tGalleries('FormulaCars.label'),
      images: Array.from(Object.values(formulaCars))
    },
    {
      value: tGalleries('Train.label').toLowerCase(),
      label: tGalleries('Train.label'),
      images: Array.from(Object.values(train))
    },
    {
      value: tGalleries('CarnivalGames.label').toLowerCase(),
      label: tGalleries('CarnivalGames.label'),
      images: Array.from(Object.values(carnivalGames))
    },
    {
      value: tGalleries('TableSoccer.label').toLowerCase(),
      label: tGalleries('TableSoccer.label'),
      images: Array.from(Object.values(tableSoccer))
    },
    {
      value: tGalleries('Basket.label').toLowerCase(),
      label: tGalleries('Basket.label'),
      images: Array.from(Object.values(basket))
    },
    {
      value: tGalleries('KiddyRides.label').toLowerCase(),
      label: tGalleries('KiddyRides.label'),
      images: Array.from(Object.values(kiddyRides))
    },
    {
      value: tGalleries('HawaiianSurfing.label').toLowerCase(),
      label: tGalleries('HawaiianSurfing.label'),
      images: Array.from(Object.values(hawaiianSurfing))
    },
    {
      value: tGalleries('ElectricCars.label').toLowerCase(),
      label: tGalleries('ElectricCars.label'),
      images: Array.from(Object.values(electricCars))
    },
    {
      value: tGalleries('AirHockey.label').toLowerCase(),
      label: tGalleries('AirHockey.label'),
      images: Array.from(Object.values(airHockey))
    },
    {
      value: tGalleries('PowerGames.label').toLowerCase(),
      label: tGalleries('PowerGames.label'),
      images: Array.from(Object.values(powerGames))
    },
    {
      value: tGalleries('Cranes.label').toLowerCase(),
      label: tGalleries('Cranes.label'),
      images: Array.from(Object.values(cranes))
    },
    {
      value: tGalleries('GiftGames.label').toLowerCase(),
      label: tGalleries('GiftGames.label'),
      images: Array.from(Object.values(luckyGames))
    },
  ]

  return {
    gamesSection,
    translatedGames
  }
}

export {getGalleriesPromise}

//const games: Array<Game & {images: StaticImageData[]}> = [
//  {
//    value: 'φουσκωτα',
//    label: 'Φουσκωτα',
//    description: 'Ελάτε να παίξουμε, να σκαρφαλώσουμε στα φουσκωτά μας παιχνίδια και να κάνουμε τσουλήθρα! Ένας ατελείωτος φουσκωτός κόσμος. Μια τέλεια εμπειρία.',
//    images: Array.from(Object.values(inflatables))
//  },
//  {
//    value: 'παιχνιδοκατασκευη',
//    label: 'Παιχνιδοκατασκευη',
//    description: 'Μια τεράστια παιχνιδοκατασκευή! Τσουλήθρες, τούνελ, λαβύρινθοι, γέφυρες, εμπόδια, λίμνες από μπαλάκια, όλα σε ένα ασφαλές περιβάλλον για τα παιδιά σας.',
//    images: Array.from(Object.values(playground))
//  },
//  {
//    value: 'τραμπολινο',
//    label: 'Τραμπολινο',
//    description: 'Χοροπηδάς ψηλά μέχρι τον ουρανό, κάνεις φιγούρες και όλοι – γονείς και φίλοι – θα μείνουν με ανοιχτό το στόμα από τα εναέρια κόλπα που κάνεις!',
//    images: Array.from(Object.values(trampoline))
//  },
//  {
//    value: 'cinema 7d',
//    label: 'Cinema 7D',
//    description: 'Ενα Cinema που θα ξετρελάνει μικρούς και μεγάλους! Σας καλωσορίζουμε στην επόμενη γενιά προβολής ταινιών! Πάρε την παρέα σου και διασκεδάστε βλέποντας αυθεντικές ταινίες με υψηλή ανάλυση και υπέροχα γραφικά.',
//    images: Array.from(Object.values(cinema))
//  },
//  {
//    value: 'τσουληθρα',
//    label: 'Τσουληθρα',
//    description: 'Πάρε την ειδική σαμπρέλα, ανέβα ψηλά και νιώσε την αδρεναλίνη να χτυπάει κόκκινο καθώς κατεβαίνεεεεεεις την τσουλήθρα!',
//    images: Array.from(Object.values(dryslope))
//  },
//  {
//    value: 'συγκρουομενα',
//    label: 'Συγκρουομενα',
//    description: 'Τα τρακαρίσματα με ασφάλεια είναι το κέφι μικρών και μεγάλων! Διάλεξε το συγκρουόμενο αυτοκίνητο που σου αρέσει και έλα να τρακάρεις τους φίλους σου!',
//    images: Array.from(Object.values(bumperCars))
//  },
//  {
//    value: 'παιδοτοπος junior',
//    label: 'Παιδοτοπος Junior',
//    description: 'Κούνιες, μπάλες, τσουλήθρες, αυτοκινητάκια και μια μεγάλη λίμνη με μπαλάκια σε έναν ασφαλή παιδότοπο δίπλα στο Café για να διασκεδάζει το παιδί σας, ενώ εσείς απολαμβάνετε τον καφέ ή το φαγητό σας',
//    images: Array.from(Object.values(junior))
//  },
//  {
//    value: 'φορμουλες',
//    label: 'Φορμουλες',
//    description: 'Ήρθε η ώρα να δείς ποιός είναι ο ποιό γρήγορος! Επέλεξε την φόρμουλά σου και προσπέρασε τους όλους!',
//    images: Array.from(Object.values(formulaCars))
//  },
//  {
//    value: 'τρενακι',
//    label: 'Τρενακι',
//    description: 'Το τρενάκι πάει βόλτα τους μικρούς μας φίλους! Διάφορα βαγόνια σε ελεγχόμενο σιδηρόδρομο που κάνουν τη βόλτα των παιδιών σας αξέχαστη.',
//    images: Array.from(Object.values(train))
//  },
//  {
//    value: 'carnival games',
//    label: 'Carnival Games',
//    description: 'Είσαι έτοιμος/η να ψαρέψεις και να στοχεύσεις το καλύτερο δωράκι; Η τύχη είναι με το μέρος σου!',
//    images: Array.from(Object.values(carnivalGames))
//  },
//  {
//    value: 'ποδοσφαιρακια',
//    label: 'Ποδοσφαιρακια',
//    description: 'Τα ξύλινα ποδοσφαιράκια που διασκέδασαν γενιές και γενιές δεν θα μπορούσαν να λείπουν από το πάρκο μας!',
//    images: Array.from(Object.values(tableSoccer))
//  },
//  {
//    value: 'μπασκετ',
//    label: 'Μπασκετ',
//    description: 'Διάλεξε μπάλα και ξεκίνα να σουτάρεις! Ποιός ξέρει, μπορεί κάποιος προπονητής να δει το ταλέντο σου και να σε πάρει στην ομάδα του!',
//    images: Array.from(Object.values(basket))
//  },
//  {
//    value: 'κουνιστα παιχνιδια',
//    label: 'Κουνιστα Παιχνιδια',
//    description: 'Κουνιστά αμαξάκια, carousel, άλογα, κούπες και γορίλες σε διάφορα χρώματα και σχέδια που θα ξετρελάνουν τους μικρούς μας φίλους',
//    images: Array.from(Object.values(kiddyRides))
//  },
//  {
//    value: 'hawaiian surfing',
//    label: 'Hawaiian Surfing',
//    description: 'Το Hawaiian Surfing είναι το νεο super διασκεδαστικό παιχνίδι που σου δίνει την αίσθηση του σερφ! Ένας ασφαλής τρόπος να ζήσεις την αίσθηση του σερφ, χωρίς θάλασσα!',
//    images: Array.from(Object.values(hawaiianSurfing))
//  },
//  {
//    value: 'ηλεκτροκινητα οχηματα',
//    label: 'Ηλεκτροκινητα Οχηματα',
//    description: 'Δώστε στα παιδιά σας την ευκαιρία να οδηγήσουν ηλεκτροκίνητα αμαξάκια και μηχανές, ενώ εσείς τα ελέγχετε με ασφάλεια από μακριά!',
//    images: Array.from(Object.values(electricCars))
//  },
//  {
//    value: 'air hockey',
//    label: 'Air Hockey',
//    description: 'Mονομαχίες γεμάτες αδρεναλίνη και ανεβαστική διασκέδαση! Aτέλειωτες στιγμές αγωνίας και γέλιου είτε παίζετε με φίλους, είτε με την οικογένεια.',
//    images: Array.from(Object.values(airHockey))
//  },
//  {
//    value: 'παιχνιδια δυναμης',
//    label: 'Παιχνιδια Δυναμης',
//    description: 'Ενεργοποιήστε τον εσωτερικό σας μαχητή, μέσα από τον συναρπαστικό κόσμο των παιχνιδιών δύναμης. Ανακαλύψτε την απόλυτη ευεξία με δράση και διασκέδαση!',
//    images: Array.from(Object.values(powerGames))
//  },
//  {
//    value: 'γερανοι δωρων',
//    label: 'Γερανοι Δωρων',
//    description: 'Διασκέδαση και αγωνία με γερανούς δώρων! Δοκιμάστε την τύχη σας για να αρπάξετε το αγαπημένο σας δώρο!',
//    images: Array.from(Object.values(cranes))
//  },
//  {
//    value: 'δωρομηχανες',
//    label: 'Δωρομηχανες',
//    description: 'Αφεθείτε στην περιπέτεια της τύχης και κερδίστε μοναδικά δώρα σε αυτό το μαγικό παιχνίδι!',
//    images: Array.from(Object.values(luckyGames))
//  },
//]