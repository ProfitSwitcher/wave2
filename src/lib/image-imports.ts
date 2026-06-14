// This file exists solely to force Vite to bundle the JPEG assets.
// Do not import from here directly — use IMAGE_NAMES instead.

import cowExt from "../assets/cow-exterior.jpeg";
import cowInt from "../assets/cow-interior.jpeg";
import cowCoffee from "../assets/cow-coffee.jpeg";
import cowGifts from "../assets/cow-gifts.jpeg";
import cowCandles from "../assets/cow-candles.jpeg";
import cowIce from "../assets/cow-icecream.jpeg";
import cowSign from "../assets/cow-sign.jpeg";
import cowMerch from "../assets/cow-merch.jpeg";
import hero from "../assets/cow-exterior.jpeg";

export const IMAGE_NAMES = [
  { src: cowExt, alt: "Cow Store N More exterior with the iconic cow statue" },
  { src: cowInt, alt: "Inside the Cow Store N More" },
  { src: cowCoffee, alt: "Fresh coffee at the Cow Store" },
  { src: cowGifts, alt: "Montana-made gifts and souvenirs" },
  { src: cowCandles, alt: "Hand-poured Montana candles" },
  { src: cowIce, alt: "Big Dipper Ice Cream and huckleberry shakes" },
  { src: cowSign, alt: "Cow Store N More sign" },
  { src: cowMerch, alt: "Cow Store merchandise and souvenirs" },
];

export const HERO_IMAGE = hero;
