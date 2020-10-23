export const moviesData = [
  {
    id: 1,
    title: 'Die Hard',
    actor: 'Bruce Willis',
    image: '/images/covers/DieHard.jpg',
    price: 9.99,
    info:
      'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
    addMovieCookie: false,
  },
  {
    id: 2,
    title: 'Terminator',
    actor: 'Arnold Schwarzenegger',
    image: '/images/covers/Terminator.jpg',
    price: 9.99,
    info:
      "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
    addMovieCookie: false,
  },
  {
    id: 3,
    title: 'Rambo',
    actor: 'Sylvester Stallone',
    image: '/images/covers/Rambo.jpg',
    price: 9.99,
    info:
      'A veteran Green Beret is forced by a cruel Sheriff and his deputies to flee into the mountains and wage an escalating one-man war against his pursuers.',
    addMovieCookie: false,
  },
  {
    id: 4,
    title: 'Big Trouble in little China',
    actor: 'Kurt Russel',
    image: '/images/covers/Trouble.jpg',
    price: 9.99,
    info:
      "A rough-and-tumble trucker helps rescue his friend's fiancée from an ancient sorcerer in a supernatural battle beneath Chinatown.",
    addMovieCookie: false,
  },
  {
    id: 5,
    title: 'Mad Max 2',
    actor: 'Mel Gibson',
    image: '/images/covers/Mad.jpg',
    price: 9.99,
    info:
      'In the post-apocalyptic Australian wasteland, a cynical drifter agrees to help a small, gasoline-rich community escape a horde of bandits.',
  },
  {
    id: 6,
    title: 'RoboCop',
    actor: 'Peter Weller',
    image: '/images/covers/Robo.jpg',
    price: 9.99,
    info:
      'In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.',
  },
  {
    id: 7,
    title: 'Predator',
    actor: 'Arnold Schwarzenegger',
    release: 1987,
    image: '/images/covers/Predator.jpg',
    price: 9.99,
    info:
      'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.',
  },
  {
    id: 8,
    title: 'Top Gun',
    actor: 'Tom Cruise',
    image: '/images/covers/TopGun.jpg',
    price: 9.99,
    info:
      "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
  },
  {
    id: 9,
    title: 'Escape from New York',
    actor: 'Kurt Russel',
    image: '/images/covers/Escape.jpg',
    price: 9.99,
    info:
      'In 1997, when the U.S. president crashes into Manhattan, now a giant maximum security prison, a convicted bank robber is sent in to rescue him.',
  },
  {
    id: 10,
    title: 'Lethal Weapon',
    actor: 'Mel Gibson',
    image: '/images/covers/Lethal.jpg',
    price: 9.99,
    info:
      'Two newly paired cops who are complete opposites must put aside their differences in order to catch a gang of drug smugglers.',
  },
  {
    id: 11,
    title: 'Cobra',
    actor: 'Sylvester Stallone',
    image: '/images/covers/Cobra.jpg',
    price: 9.99,
    info:
      'A tough-on-crime street cop must protect the only surviving witness to a strange murderous cult with far-reaching plans.',
  },
  {
    id: 12,
    title: 'Road House',
    actor: 'Patrick Swazye',
    image: '/images/covers/Road.jpg',
    price: 9.99,
    info: 'A tough bouncer is hired to tame a dirty bar.',
  },
];

export async function getMoviesData() {
  return moviesData;
}
