import { v4 } from "uuid";

const id1 = v4();
const id2 = v4();
const id3 = v4();
const id4 = v4();

export default {
  masterPostList: {
    [id1]: {
      author: "JK Rowling",
      title: "example string title",
      text: "example string text",
      imageUrl:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      subreddit: "worldnews",
      subRedditImage:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      upVotes: 17,
      timeCreated: new Date(),
      id: id1,
    },
    [id2]: {
      author: "Rowling J.K.",
      title: "ThIs Is A tItLe",
      text: "eXaMpLe StRiNg",
      imageUrl:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      subreddit: "memes",
      subRedditImage:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      upVotes: 167,
      timeCreated: new Date(),
      id: id2,
    },
    [id3]: {
      author: "JK Rowling",
      title: "ThIs Is A dIfFeReNt TiTlE",
      text: "eXaMpLe StRiNg",
      imageUrl:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      subreddit: "memes",
      subRedditImage:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      upVotes: 167,
      timeCreated: new Date(),
      id: id3,
    },
    [id4]: {
      author: "Anonymous",
      title: "AITA? tldr; I ate my roommate's takeout without asking",
      text: "but...",
      imageUrl:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      subreddit: "AITA",
      subRedditImage:
        "https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg",
      upVotes: 87,
      timeCreated: new Date(),
      id: id4,
    },
  },
};
