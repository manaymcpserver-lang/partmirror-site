export type Guide = {
  topic: 'middle' | 'side' | 'change' | 'compare' | 'iphone';
  slug: string;
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
  sources?: { label: string; url: string }[];
};

export const guides: Guide[] = [
  {
    topic: 'middle',
    slug: 'how-to-part-your-hair-in-the-middle',
    title: 'How to part your hair in the middle',
    description: 'Use a mirror and a comb to find your center line, make a middle part, and adjust it to the way your hair naturally falls.',
    sections: [
      {
        heading: 'Find the starting point at your hairline',
        paragraphs: [
          'Face a mirror with your head level. Use the midpoint between your eyebrows as a visual reference, then look straight up to your hairline. If you have a widow’s peak or an uneven hairline, check the position against your face from straight on before committing to the line.',
          'Move any fringe away from the hairline and check that you can see both sides clearly. In PartMirror, choose Middle and look at where the guide meets your hairline. You can move it slightly if your reference point and natural part sit a little apart.',
        ],
      },
      {
        heading: 'Separate the hair from front to back',
        paragraphs: [
          'With a tail comb, follow your center line gently from the hairline toward the crown. Lift the hair to each side as you go, then smooth it away from the part. For a softer line or curls that already fall in clumps, make the same separation with a fingertip and move whole clumps where you can.',
          'Check from the front and with a second mirror or a photo from slightly above. If one section crosses the part, move that section on its own. A short, clear line at the front may be all you need for the look you want.',
        ],
      },
      {
        heading: 'Adjust the middle part once your hair settles',
        paragraphs: [
          'Let both sides fall naturally and check where the part opens on its own. If the front looks centered but a whorl diverts the line near the crown, you can let the back follow the whorl. If the front keeps splitting in two, try shifting your starting point a little toward the stronger opening.',
        ],
      },
    ],
    faqs: [
      { question: 'Does a middle part have to go all the way to the crown?', answer: 'Choose the length based on the style. A shorter part works for many loose styles, while a longer line helps when you need two separate sections for braids or pigtails.' },
      { question: 'Can I make a middle part without a tail comb?', answer: 'Yes. Use the tip of your finger to trace the line and gently move hair to either side. A tail comb is handy when you want a more defined line.' },
      { question: 'Should I part my hair wet or dry?', answer: 'Start with the condition in which your hair is easiest to handle. Dry hair lets you see how the finished style falls. For curly or coily hair, separating damp, detangled sections can be easier than brushing out dry curls.' },
    ],
    sources: [
      { label: 'American Academy of Dermatology curly hair care tips', url: 'https://www.aad.org/public/everyday-care/hair-scalp-care/hair/curly-hair-care' },
    ],
  },
  {
    topic: 'side',
    slug: 'how-to-do-a-side-part',
    title: 'How to do a side part or deep side part',
    description: 'Find a starting point for a side part, try both sides, and decide how deep you want the part to be.',
    sections: [
      {
        heading: 'Check which side your hair falls toward',
        paragraphs: [
          'Gently sweep the front of your hair back and let it settle. Notice where the roots separate and which direction the larger section falls. Try a part near that opening first, then test the opposite side. The two positions can frame your face differently even when they are equally far from center.',
        ],
      },
      {
        heading: 'Set a shallow or deep starting point',
        paragraphs: [
          'Start slightly off center for a shallow side part. To try a deeper side part, move your starting point farther toward one temple in small steps. The middle or outer area of an eyebrow can help you repeat a position you like. Check whether the larger section sits comfortably across your forehead and whether the smaller side can tuck behind your ear if you want it to.',
          'Use the tail of a comb or your fingertip to separate from the hairline back toward the crown. For a diagonal part, start farther out at the hairline and angle the line inward as it goes back. This gives you the sweep at the front without carrying the same deep offset across the whole top of your head.',
        ],
      },
      {
        heading: 'Compare both sides before you set the style',
        paragraphs: [
          'In PartMirror, choose Left or Right, then adjust the offset and try Straight or Diagonal. The line gives you a place to start separating your actual hair. Once you try each position, take a photo from the same height and distance to compare the shape and volume.',
        ],
      },
    ],
    faqs: [
      { question: 'Is the left or right side better for a side part?', answer: 'Try the natural opening and the opposite side. A natural opening may settle more easily, while the opposite side can give you a different sweep or more apparent lift. Choose the look and feel you prefer.' },
      { question: 'What is the difference between a side part and a deep side part?', answer: 'A regular side part starts a little off center. A deep side part starts farther toward the temple, so more hair sweeps across from that side.' },
      { question: 'How can I make a side part look softer?', answer: 'Use your fingers to separate the hair, or try a smaller offset. For a defined line at the front and a softer finish at the back, use a comb for the first section and finish with your fingers.' },
    ],
  },
  {
    topic: 'change',
    slug: 'how-to-change-your-hair-part',
    title: 'How to change your hair part',
    description: 'Try a different hair part over two days, see how it settles, and adjust the line around a cowlick if your roots keep reopening.',
    sections: [
      {
        heading: 'Choose where you want the new part to sit',
        paragraphs: [
          'Sweep your hair back gently and let it settle to find your natural part. Decide whether you want to shift it slightly, move from the middle to the side, or switch sides. Separate the hair along your new line with your finger or the tail of a comb and see where the front sections fall when you release them.',
          'If the old part keeps reopening, lightly dampen the roots there and separate the hair again. Let it dry in place. A loose clip can hold a section as it sets. If you prefer to blow-dry, use a low heat setting and direct the airflow along the way you want the hair to fall.',
        ],
      },
      {
        heading: 'Try two placements over two days',
        paragraphs: [
          'On day one, follow the natural opening and take a photo after your hair settles. On day two, move the part slightly toward the position you want. Keep the amount of product and the rest of your styling routine as similar as you can, then take another photo from the same angle.',
          'Compare how each looks and how often you felt like adjusting it. If the second position lifts or splits, try a smaller change next time. Think of the two days as a way to compare placements. Your growth pattern stays the same.',
        ],
      },
      {
        heading: 'Work around a cowlick',
        paragraphs: [
          'A cowlick is a patch where the roots grow in a different direction from the nearby hair. Lift the section gently, let it settle, and see where the hair opens. If the cowlick sits at the front, try starting the new part near that opening. If it is at the crown, keep your preferred starting point at the hairline and let the back of the part bend toward the natural separation.',
          'PartMirror can help you repeat the same offset and compare saved photos. Use the guide as a reference, then see how your actual hair settles around the cowlick.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I wear a middle part with a cowlick?', answer: 'Yes. Try starting at the midpoint and letting the line curve near the cowlick, or shifting the line a little where the hair opens. Check how the finished part looks from the front and above.' },
      { question: 'Can I train my hair to part differently in two days?', answer: 'You can test a different placement over two days and style your hair into it. A cowlick reflects your root growth direction, which styling does not permanently change.' },
      { question: 'Should I put the part directly through the cowlick?', answer: 'Try both through the natural opening and just beside it. Where the hair falls easily can differ between a front cowlick and a crown whorl.' },
    ],
    sources: [
      { label: 'Hair.com’s stylist guide to changing your part', url: 'https://www.hair.com/how-to-train-part.html' },
      { label: 'Fellow Barber’s guide to parting around a cowlick', url: 'https://www.fellowbarber.com/blogs/read/use-your-cowlick-to-determine-your-part' },
      { label: 'American Academy of Dermatology hair care tips', url: 'https://www.aad.org/public/everyday-care/hair-scalp-care/hair/healthy-hair-tips' },
    ],
  },
  {
    topic: 'compare',
    slug: 'middle-part-vs-side-part',
    title: 'Middle part vs. side part: how to choose',
    description: 'Compare a middle, shallow side, and deep side part using your own face framing, root direction, and everyday styling preferences.',
    sections: [
      {
        heading: 'Compare how each part frames your face',
        paragraphs: [
          'A middle part places the dividing line near the center of your face, often leaving a section to fall on each side. A side part shifts more hair to one side. Try both at the same length and with the same amount of styling, then look at where the front pieces land around your brows, cheeks, and glasses if you wear them.',
          'If you like the balance of a middle part but want the front pieces to sit a little differently, try a small offset. If you like the sweep of a side part, compare a shallow offset and a deeper one. Take a straight-on photo of each, then check how they look when you turn slightly.',
        ],
      },
      {
        heading: 'Include your hair texture and routine in the decision',
        paragraphs: [
          'Look at how your roots and layers fall once you stop holding them in place. One position may work better when you air-dry, while another may be easy to set for a styled look. Check whether you can tuck the front pieces back, whether you like the amount of lift, and how often you need to fix it during the day.',
        ],
      },
      {
        heading: 'Make the comparison easy to repeat',
        paragraphs: [
          'Use PartMirror’s Middle, Left, and Right guides as references while making the actual parts. Save a photo of each result and view the saved looks together. Capture them in the same light and at the same distance so changes in the hair part are easy to spot.',
          'Choose a favorite for the way you wear your hair most often. Keep the other look as an option when you want different face framing or a different amount of volume.',
        ],
      },
    ],
    faqs: [
      { question: 'What hair part works best for my face shape?', answer: 'Face shape can give you a starting point for experimenting. Compare how the hair frames your own features and how it falls from the roots. The part you prefer may change with your cut, glasses, or styling routine.' },
      { question: 'Is a side part better if my middle part looks flat?', answer: 'It is worth trying. Moving the part can change how much lift you see at the roots. A slight shift may be enough, especially if your hair naturally separates near the middle.' },
      { question: 'Can I switch between a middle and side part with the same haircut?', answer: 'Usually you can try both. Pay attention to how shorter layers or fringe fall after you move the line, since pieces cut for one placement may sit differently in another.' },
    ],
  },
  {
    topic: 'iphone',
    slug: 'free-hair-parting-app-for-iphone',
    title: 'A free hair-parting guide app for iPhone',
    description: 'Use PartMirror’s live guide to position a middle, left, or right hair part and save looks to compare on a compatible iPhone.',
    sections: [
      {
        heading: 'See where a part would sit before using your comb',
        paragraphs: [
          'PartMirror places a live guide over your hair in the front camera. Choose Middle, Left, or Right, move the position in small increments, and try Straight, Diagonal, or Soft C for the shape of the line. The guide marks where to separate your hair with your fingers or a comb.',
        ],
      },
      {
        heading: 'Try and compare a few placements',
        paragraphs: [
          'Open the camera in even light with your hairline visible. Start with your usual part, then test a nearby placement. Use the guide to make each part and take a photo from a consistent angle. You can save photos and short videos in My Looks, then review your choices later.',
          'If the guide does not appear, center your face in the preview, clear hair away from your hairline, and check that camera access is enabled in iPhone Settings.',
        ],
      },
      {
        heading: 'Check compatibility and what is included',
        paragraphs: [
          'PartMirror requires iOS 17 or later and an iPhone with a TrueDepth front camera. The live camera guide, capture, and My Looks are free to use in the current iOS app. The app can show banners, and an optional annual Ad-Free subscription removes them. The App Store shows the local price before purchase.',
          'Camera processing takes place on your iPhone. You can use the guide without creating an account or uploading a selfie. Saved looks are available in the app, and you choose when to share or export them.',
        ],
      },
    ],
    faqs: [
      { question: 'Does PartMirror show where to place a side part?', answer: 'Yes. Select Left or Right to see a side part guide. Adjust the offset and line shape to preview different placements before you make the part.' },
      { question: 'Do I need to pay to use the live hair guide?', answer: 'The current iOS app includes the live guide, capture, and My Looks for free. Ad-Free is an optional annual subscription.' },
      { question: 'Does PartMirror recommend a part based on my face shape?', answer: 'PartMirror shows the placement you choose in the live camera. You can use those references to test and compare the partings you like on yourself.' },
    ],
  },
];
