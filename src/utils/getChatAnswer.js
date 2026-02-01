import Fuse from "fuse.js";
import { chatData } from "@/utils/data/chatData";

const fuse = new Fuse(chatData, {
  includeScore: true,
  threshold: 0.4,
  keys: ["q"],
});

export const getChatAnswer = (input) => {
  const result = fuse.search(input);

  if (result.length) {
    return result[0].item.a;
  }

  return "Maaf saya belum memiliki jawaban untuk pertanyaan tersebut.";
};
