export type UserStats = {
  prayerCount: number;
  prayerTime: number;
};

export type People = {
  key?: string;
  name: string;
  photoUrl?: string;
  prayers: Prayer[];
};

export type Prayer = {
  key: string;
  prayerPoint: string;
  date: string;
};
