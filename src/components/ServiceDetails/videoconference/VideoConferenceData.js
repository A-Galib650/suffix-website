import chat from '../../../media/videoconferenceimage/chat.png';
import audio from '../../../media/videoconferenceimage/audio.png';
import bPoint from '../../../media/videoconferenceimage/b-point.png';
import emoji from '../../../media/videoconferenceimage/emoji.png';
import poll from '../../../media/videoconferenceimage/poll.png';
import screen from '../../../media/videoconferenceimage/screenshare.png';
import webcam from '../../../media/videoconferenceimage/webcam.png';
import whiteboard from '../../../media/videoconferenceimage/whiteboards.png';

const data = [
  {
    id: 1,
    title: "Chat",
    desc: "Send public and private messages.",
    img: chat

  },
  {
    id: 2,
    title: "Audio",
    desc: "Communicate using high quality audio.",
    img: audio
  }, {
    id: 3,
    title: "Webcams",
    desc: "Hold visual meetings.",
    img: webcam
  },
  {
    id: 4,
    title: "Emojis",
    desc: "Express yourself.",
    img: emoji
  },
  {
    id: 5,
    title: "Breakout Rooms",
    desc: "Group users into breakout rooms for team collaboration.",
    img: bPoint
  },
  {
    id: 6,
    title: "Screen Sharing",
    desc: "Share your screen.",
    img: screen
  },
  {
    id: 7,
    title: "Polling",
    desc: "Poll your users anytime.",
    img: poll
  },
  {
    id: 8,
    title: "Multi-user whiteboard",
    desc: "Draw together.",
    img: whiteboard
  }
]

export default data
