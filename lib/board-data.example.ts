import { createMember, Member } from "@/types";

export const board = new Map<string, Member[]>([
  [
    "2024-2025",
    [
      createMember("First Last", "President", "linkedin-username"),
      createMember("First Last", "Vice President", "linkedin-username"),
      createMember("First Last", "Treasurer", "linkedin-username"),
    ],
  ],
  [
    "2025-2026",
    [
      createMember("First Last", "President", "linkedin-username"),
      createMember("First Last", "Vice President", "linkedin-username"),
      createMember("First Last", "Treasurer", "linkedin-username"),
      createMember("First Last", "Events", "linkedin-username"),
      createMember("First Last", "Outreach", "linkedin-username"),
    ],
  ],
]);