export default defineEventHandler(async (event) => {
  await sleep(1000)
  const quotes = [
    'Sometimes a hypocrite is nothing more than a man in the process of changing.',
    "This is life. The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone. Trust me, I've practiced",
    'People are always after stuff, but they don’t really like the stuff—they like having the stuff.',
    'Somebody has to start. Somebody has to step forward and do what is right, because it is right.',
    'Strength does not make one capable of rule; it makes one capable of service.',
    'To lack feeling is to be dead, but to act on every feeling is to be a child.',
    'I will protect those I hate. Even if the one I hate most is myself.',
    'Logically,” Shallan said, “the bright side is the only side you can look on, because the other side is dark.',
    'If I pretend … If I pretend I didn’t do those things, it means that I can’t have grown to become someone else.',
    'But maybe you shouldn’t be looking for life to be easier because you choose to do something that is right!',
    'Life was so much harder, but potentially so much more fulfilling, when you found the courage to choose.'
  ]
  return {
    quote: quotes[Math.floor(Math.random() * quotes.length)]
  }
})

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
