export interface Member {
  name: string;
  position: string;
  linkedIn: string;
  image: string;
}

export function createMember(
  name: string,
  position: string,
  linkedIn: string,
  image?: string
): Member {
  return {
    name,
    position,
    linkedIn: `https://linkedin.com/in/${linkedIn}`,
    image: image ?? `/board/${name.toLowerCase().replace(" ", "-")}.jpg`,
  };
}
