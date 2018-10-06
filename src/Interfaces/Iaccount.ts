import IEmoji from "./iemoji";

export default interface IAccount {
  id: number;
  username: string;
  domain: string;
  displayName: string;
  locked: boolean;
  createdAt: number;
  followersCount: number;
  followingCount: number;
  statusesCount: number;
  note: string;
  url: string;
  avatar: string;
  avatarStatic: string;
  headerImage: string;
  headerStatic: string;
  emojis: IEmoji[];
  bot: boolean;
}
