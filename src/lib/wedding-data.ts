export type WeddingEvent = { id: string; name: string; date: string; dateLabel: string; time: string; venue: string; address: string; note?: string; rsvp: boolean; };
export const wedding = {
  couple: "Malav & Surbhi", groom: "Malav", bride: "Surbhi", invocation: "॥ Shree Ganeshay Namah ॥",
  features: { rsvpEnabled: false },
  hosts: "Mrs. Malika Bimal Dalal and Mr. Bimal Surendrakumar Dalal with Mrs. Amita Sanjaykumar Modi and Mr. Sanjaykumar Bhagvatlal Modi",
  rsvp: { name: "Malav Dalal & Surbhi Modi", phone: "214-517-7707", email: "surbhimalav29@gmail.com" },
  events: [
    { id: "ganesh-sthapan", name: "Ganesh Sthapan", date: "2026-09-19", dateLabel: "Saturday, 19 September 2026", time: "7:00 AM", venue: "Great Lakes Ballroom", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", rsvp: true },
    { id: "haldi", name: "Haldi", date: "2026-09-19", dateLabel: "Saturday, 19 September 2026", time: "8:00 AM", venue: "Great Lakes Ballroom", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", rsvp: true },
    { id: "grah-shanti", name: "Grah Shanti", date: "2026-09-19", dateLabel: "Saturday, 19 September 2026", time: "9:00 AM", venue: "Great Lakes Ballroom", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", note: "Followed by lunch at 11:30 AM", rsvp: true },
    { id: "garba", name: "Sangeet Sandhya & Ras Garba", date: "2026-09-19", dateLabel: "Saturday, 19 September 2026", time: "6:00 PM", venue: "The Grand Ballroom", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", note: "Followed by dinner", rsvp: true },
    { id: "baarat", name: "Baarat", date: "2026-09-20", dateLabel: "Sunday, 20 September 2026", time: "9:30 AM", venue: "Theater Parking Lot", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", rsvp: true },
    { id: "wedding", name: "Wedding Ceremony", date: "2026-09-20", dateLabel: "Sunday, 20 September 2026", time: "10:30 AM", venue: "The Grand Ballroom", address: "10 Marriott Drive, Lincolnshire, Illinois 60069", note: "Followed by lunch at 12:15 PM", rsvp: true }
  ] satisfies WeddingEvent[]
} as const;