export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
