/* Beyond-the-editor activities, current focus and terminal script. */

export const activities = [
  {
    icon: 'book',
    title: 'Learning in public',
    desc: 'Working through Flutter, Riverpod and clean architecture docs — then turning what clicks into notes and small experiments.',
    tag: 'Daily'
  },
  {
    icon: 'git',
    title: 'Open source & Git craft',
    desc: 'Clean commits, small pull requests and readable READMEs. My own three repositories double as living documentation.',
    tag: 'Every week'
  },
  {
    icon: 'code',
    title: 'Side projects',
    desc: 'Building small utilities between client work — a barcode scanner, a theme generator, a markdown previewer.',
    tag: 'Weekends'
  },
  {
    icon: 'users',
    title: 'Mentoring juniors',
    desc: 'Helping institute students and beginner devs get their first Flutter app on the store with honest code reviews.',
    tag: 'On request'
  },
  {
    icon: 'pen',
    title: 'Writing & documentation',
    desc: 'Explaining state management, Firebase rules and release pipelines in plain language so teams stop guessing.',
    tag: 'Monthly'
  },
  {
    icon: 'compass',
    title: 'Exploring new tech',
    desc: 'Kicking the tyres on new tools — Figma-to-Flutter flows, on-device AI, and smarter offline caching.',
    tag: 'Always'
  }
];

export const currently = [
  { label: 'Building', value: 'SmartStock v2 — retail analytics & warranty desk' },
  { label: 'Learning', value: 'Riverpod 3, Flutter 3.3x, on-device ML' },
  { label: 'Reading', value: 'Clean Architecture — Robert C. Martin' }
];

export const terminalScript = [
  { cmd: 'flutter build apk --release', out: '✓ Built app-release.apk (48.2 MB)' },
  { cmd: 'firebase deploy --only hosting', out: '✓ Hosting live in 11s' },
  { cmd: 'git push origin main', out: '✓ main → main (3 files, 248 insertions)' },
  { cmd: 'git log --oneline -1', out: 'a91f2c7 feat(pos): warranty + backup' }
];

export const processSteps = [
  {
    icon: 'search',
    title: 'Discover',
    desc: 'Sit with the real users and the real workflow. I map the problem before touching a single widget.'
  },
  {
    icon: 'pen',
    title: 'Design',
    desc: 'Screens, states and edge cases drawn in Figma. Every screen ships with light, dark and empty states.'
  },
  {
    icon: 'code',
    title: 'Build',
    desc: 'Clean Architecture, Provider/Riverpod, Firestore streams and a Hive cache so it still works offline.'
  },
  {
    icon: 'rocket',
    title: 'Ship',
    desc: 'Testing, signing, Play Store release, analytics and a backup pipeline. Then I keep watching the crash reports.'
  }
];
