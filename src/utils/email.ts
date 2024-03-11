export type EmailDataProps = (typeof Emails)[0];

type EmailProps = {
  id: string;
  name: string;
  avatar: string;
  marker?: string;
  subject: string;
  message: string;
  start: boolean;
  date: string;
}

export const Emails: EmailProps[] = [
  {
    id: "1",
    name: "John Smith",
    avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    marker: "importante",
    subject: "What is Lorem Ipsum",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    start: false,
    date: "10 de mar."
  },
  {
    id: "2",
    name: "Andy",
    avatar: "https://mighty.tools/mockmind-api/content/human/57.jpg",
    subject: "Where does it come from",
    message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    start: true,
    date: "11 de mar."
  }, 
  {
    id: "3",
    name: "Mike",
    avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
    subject: "Why do we use it",
    message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    start: false,
    date: "11 de mar."
  },
];