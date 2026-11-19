import type { Guide } from './guide-content';

export const usGuides: Guide[] = [
  {
    topic: 'curly',
    slug: 'how-to-part-curly-hair',
    title: 'How to part curly hair for volume or definition',
    description: 'Part curly hair in the middle or to the side, keep curl clumps intact, and adjust the part once your roots dry.',
    updatedOn: '2026-11-19',
    sections: [
      {
        heading: 'Start with damp hair for a more defined part',
        paragraphs: [
          'After detangling, let your curls settle and look for the opening near your hairline. Use your fingertip to separate the roots a short stretch at a time. If a curl crosses the line, move the whole clump to the side where it falls most easily.',
          'For a sharper line, trace it with the smooth tail of a comb, then use your fingers to place the curls on either side. A short part near the front can frame your face while leaving the curls at the crown together.',
        ],
      },
      {
        heading: 'Try a side part for more lift at the roots',
        paragraphs: [
          'Start just off center and lift a few curls over to the fuller side. Try the same move on the other side and let the hair settle before deciding. You can also shift the part slightly away from its usual opening to see if the roots stand up more.',
          'Wait until the roots are dry before judging the shape. If the fuller side falls across your face, move the starting point a little closer to center or tuck a front curl behind your ear.',
        ],
      },
      {
        heading: 'Make a middle part without losing the curl pattern',
        paragraphs: [
          'Face a mirror with your head level and line up the start of the part with the space between your eyebrows. Open the line with your fingertips. If a clump near the crown wants to fall across it, leave the front centered and let the line soften farther back.',
          'Between washes, mist just the roots around the part if they resist moving. Let them dry again before checking whether the new placement holds.',
        ],
      },
    ],
    faqs: [
      { question: 'Should you part curly hair wet or dry?', answer: 'Use damp hair when you want to reset the line during styling. On dry curls, use your fingers to shift whole clumps if you only want to change the shape or add lift.' },
      { question: 'How do you part curly hair without a comb?', answer: 'Use a fingertip to open the roots in short sections. Move each clump as a unit and stop where the curls start to pull across the line.' },
    ],
    sources: [
      { label: 'American Academy of Dermatology tips for caring for curly hair', url: 'https://www.aad.org/public/everyday-care/hair-scalp-care/hair/curly-hair-care' },
    ],
  },
  {
    topic: 'box-braids',
    slug: 'how-to-part-hair-for-box-braids',
    title: 'How to part your own hair for box braids',
    description: 'Use two mirrors and a tail comb to part the back of your hair, make even rows, and section each row for box braids.',
    showAppDownload: false,
    updatedOn: '2026-11-19',
    sections: [
      {
        heading: 'Set up two mirrors and separate your hair',
        paragraphs: [
          'Gather a smooth tail comb, sectioning clips, and a second mirror. Set the second mirror where you can see the back of your head in the first mirror and still keep both hands free. Touch one side of your head to check which way your hand moves in the reflection.',
          'Detangle your hair, divide it into manageable sections, and clip the sections above your nape out of the way. Decide whether you want smaller or larger braids. Use the amount of hair in your first box as a reference for the next few sections.',
        ],
      },
      {
        heading: 'Part a row at the nape',
        paragraphs: [
          'Open a horizontal row above the nape with the tail of your comb. Work from the middle toward one side, then return to the middle and trace toward the other. Clip the hair above the row up and check both ends in the mirrors.',
          'If the row dips or rises on one side, hold the hair above it still and retrace that short stretch. Use the comb to move any stray strands back to their section before dividing the row into boxes.',
        ],
      },
      {
        heading: 'Divide the row into boxes and work upward',
        paragraphs: [
          'Mark the center of the row so you can plan how the boxes will fit on each side. Use short vertical parts to make the boxes. If the last section would be a thin sliver, adjust the previous few dividers so the sections at the edge have enough hair to braid comfortably.',
          'Secure each loose section with a clip or braid it before opening the next row. For an aligned grid, place the next row’s dividers above the ones below. For a staggered pattern, place a divider above the middle of a box in the row below. Check the layout as you reach the wider part of your head, where you may have room for another box.',
        ],
      },
    ],
    faqs: [
      { question: 'How do you see the back of your hair when parting it yourself?', answer: 'Angle a standing mirror behind you so its reflection is visible in a mirror in front of you. A photo from behind also helps you check an entire row before braiding it.' },
      { question: 'Do all the boxes have to be the same size?', answer: 'Aim for a similar amount of hair per braid. Adjust the width of a box where your hair is denser or finer, especially around the hairline.' },
    ],
    sources: [
      { label: 'PATTERN Beauty’s tutorial for doing box braids on yourself', url: 'https://patternbeauty.com/blogs/news/how-to-do-box-braids-on-yourself' },
    ],
  },
];
