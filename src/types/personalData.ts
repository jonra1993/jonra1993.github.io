export type BotProps = {
  avatar: string,
  name: string,
  description?: string,
  plan: number,
  id?: number,
};

export interface MyBot {
  id: string;
  avatar: {
    id: string;
    url: string;
  };
  company: string;
  name: string;
  language: string;
  description: string;
  user: string;
  plan: string;
  isActive: string;
  domain: {
    title: string;
    description: string;
    image: string;
  }
}

export interface Bot {
  id?: number;
  avatar: string;
  name: string;
  description?: string;
  category: number;
  plan: number;
  lastUpdate?: number;
  createdAt?: number;
}

export interface BotCategory {
  id: number;
  title: string;
  category: number;
  icon?: string;
}

export interface BotOverviewCard {
  id: number;
  title: string;
  value: number;
  icon?: string;
  href?: string;
}

export interface BotEntities {
  id: string;
  name: string;
  type: string;
}

export interface MyBotsResponse {
  items: MyBot[];
  page: number;
  size: number;
  total: number;
}

export interface createNewBotResponse {
  data: MyBot;
}
