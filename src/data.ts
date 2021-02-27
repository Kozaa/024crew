import chillwagon from "./assets/images/chillwagon.png";
import gameplay from "./assets/images/gameplay.png";
import kodeksMarki from "./assets/images/kodeks-marki.png";
import krzyz from "./assets/images/krzyz.png";
import luna from "./assets/images/luna.png";
import tempo from "./assets/images/tempo.png";
import trapiraci from "./assets/images/trapiraci.png";
import wiecej from "./assets/images/wiecej.png";
import chillrocket from "./assets/images/chillrocket.png";
import hot16 from "./assets/images/hot16.png";
import hamburgierek from "./assets/images/hamburgierek.png";
import balet from "./assets/images/balet.png";
import piesek from "./assets/images/piesek.png";
import kodeksMarkiAudio from "./assets/music/kodeksMarkiAudio.mp3";
import lunaAudio from "./assets/music/lunaAudio.mp3";
import piesekAudio from "./assets/music/piesekAudio.mp3";

export interface Song {
  title: string;
  img: string;
  audio: string;
}

export type Album = {
  title: string;
  img: string;
  songs: Song[];
};

type SongData = Album[];

export const heroSong: Song = {
  title: "olszakumpel - piesek (prod. BeRoX)",
  img: piesek,
  audio: piesekAudio,
};

// TO DO: swap placeholder audio files (kodeks marki everywere) to actual songs

export const songData: SongData = [
  {
    title: "chillwagon",
    img: chillwagon,
    songs: [
      {
        title:
          "olszakumpel - chillrocket [prod. chris rich] (chillwagon challenge)",
        img: chillrocket,
        audio: kodeksMarkiAudio,
      },
      {
        title: "olszakumpel #Hot16Challenge2",
        img: hot16,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "kodeks marki",
    img: kodeksMarki,
    songs: [
      {
        title: "olszakumpel - kodeks marki (prod. danny rxse)",
        img: kodeksMarki,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "krzyż",
    img: krzyz,
    songs: [
      {
        title: "olszakumpel - krzyż (prod. skel)",
        img: krzyz,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "tempo",
    img: tempo,
    songs: [
      {
        title: "olszakumpel - tempo feat. sapi tha king (prod. clearmind)",
        img: tempo,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "luna",
    img: luna,
    songs: [
      {
        title: "olszakumpel - luna (prod. secretrank)",
        img: luna,
        audio: lunaAudio,
      },
    ],
  },
  {
    title: "trapiraci",
    img: trapiraci,
    songs: [
      {
        title:
          "olszakumpel - trapiraci feat. paris platynov (prod. danny rxse)",
        img: trapiraci,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "gameplay",
    img: gameplay,
    songs: [
      {
        title: "LVL 06. OVERCOOKED[🎶: @DANNY RXSE]",
        img: gameplay,
        audio: kodeksMarkiAudio,
      },
      {
        title: "LVL 02. METIN2 [🎶: @DANNY RXSE]",
        img: gameplay,
        audio: kodeksMarkiAudio,
      },
    ],
  },
  {
    title: "więcej",
    img: wiecej,
    songs: [
      {
        title: "OLSZAKUMPEL - HAMBURGIEREK",
        img: hamburgierek,
        audio: kodeksMarkiAudio,
      },
      {
        title: "OLSZAKUMPEL - NIECH ŻYJE BALLET [🎶: @DANNY RXSE]",
        img: balet,
        audio: kodeksMarkiAudio,
      },
    ],
  },
];
