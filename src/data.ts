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
import crewImg from "./assets/images/crew-member-placeholder.png";

export interface Song {
  title: string;
  img: string;
  audio: string;
  youtube: string;
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
  youtube:
    "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
      },
      {
        title: "olszakumpel #Hot16Challenge2",
        img: hot16,
        audio: kodeksMarkiAudio,
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
      },
      {
        title: "LVL 02. METIN2 [🎶: @DANNY RXSE]",
        img: gameplay,
        audio: kodeksMarkiAudio,
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
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
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
      },
      {
        title: "OLSZAKUMPEL - NIECH ŻYJE BALLET [🎶: @DANNY RXSE]",
        img: balet,
        audio: kodeksMarkiAudio,
        youtube:
          "https://www.youtube.com/watch?v=j2TOXu9c6Ag&ab_channel=olszakumpel-chillwagon",
      },
    ],
  },
];

export interface CrewMemberType {
  name: string;
  img: string;
  linkInstagram: string;
}

export const crew: CrewMemberType[] = [
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
  {
    name: "xyzkumpel",
    img: crewImg,
    linkInstagram: "https://www.instagram.com/olszakumpel/?hl=pl",
  },
];
