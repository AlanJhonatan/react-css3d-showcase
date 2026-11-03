export interface CD {
  artist: string;
  name: string;
  front: string;
  back: string;
  cd: string;
}

export const CDempty: CD = {
  artist: "None",
  name: "Unknown",
  front: "",
  back: "",
  cd: "",
};

export const CDs: Array<CD> = [
  {
    artist: "Sade",
    name: "Promise",
    front:
      "https://dn721805.ca.archive.org/0/items/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98-39788932321.jpg",
    back: "https://dn721805.ca.archive.org/0/items/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98-39788936227.jpg",
    cd: "https://dn721805.ca.archive.org/0/items/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98/mbid-a23d1509-266c-4f2a-b46f-01e255d95c98-39788934888.jpg",
  },
  {
    artist: "2Pac",
    name: "All Eyes On Me",
    front:
      "https://dn710204.ca.archive.org/0/items/mbid-f62e6093-19a1-451a-96bd-763fa51f3816/mbid-f62e6093-19a1-451a-96bd-763fa51f3816-38890156945.jpg",
    back: "https://dn710204.ca.archive.org/0/items/mbid-f62e6093-19a1-451a-96bd-763fa51f3816/mbid-f62e6093-19a1-451a-96bd-763fa51f3816-38890149361.jpg",
    cd: "https://ia800404.us.archive.org/18/items/mbid-f62e6093-19a1-451a-96bd-763fa51f3816/mbid-f62e6093-19a1-451a-96bd-763fa51f3816-38890157422.jpg",
  },
  {
    artist: "Ariana Grande",
    name: "thank u, next",
    front:
      "https://dn710909.ca.archive.org/0/items/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c-22711638031.jpg",
    back: "https://dn710909.ca.archive.org/0/items/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c-22711650242.jpg",
    cd: "https://dn710909.ca.archive.org/0/items/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c/mbid-f180cef1-c7b6-4933-92b9-d7292ad1f15c-22711650850.jpg",
  },
  {
    artist: "2Pac",
    name: "R U Still Down? (Remember Me)",
    front:
      "https://dn710301.ca.archive.org/0/items/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5-1559992321.jpg",
    back: "https://dn710301.ca.archive.org/0/items/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5-14946858341.jpg",
    cd: "https://dn710301.ca.archive.org/0/items/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5/mbid-aab1d312-8526-42ed-b5b7-085c09e472a5-14946863304.jpg",
  },
  {
    artist: "Sabrina Carpenter",
    name: "Man's Best Friend",
    front:
      "https://dn710105.ca.archive.org/0/items/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3-44580791875.jpg",
    back: "https://dn710105.ca.archive.org/0/items/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3-44580792779.jpg",
    cd: "https://dn710105.ca.archive.org/0/items/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3/mbid-930e52fc-71b6-4301-85a2-7560274c7fe3-44580793229.jpg",
  },
  {
    artist: "Sade",
    name: "Love Deluxe",
    front:
      "https://dn710605.ca.archive.org/0/items/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf-5391926442.png",
    back: "https://dn710605.ca.archive.org/0/items/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf-5391929490.png",
    cd: "https://dn710605.ca.archive.org/0/items/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf/mbid-49c1eeeb-919f-33d2-b72d-71b3fa5572cf-8191871770.jpg",
  },
  {
    artist: "Sabrina Carpenter",
    name: "Emails I Cant Send",
    front:
      "https://dn710003.ca.archive.org/0/items/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e-35977189244.jpg",
    back: "https://dn710003.ca.archive.org/0/items/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e-35977275826.jpg",
    cd: "https://dn710003.ca.archive.org/0/items/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e/mbid-65cf27ff-6b7d-4b92-ba37-6e5afa95940e-35977275196.jpg",
  },
  {
    artist: "Sabrina Carpenter",
    name: "Short n' sweet",
    front:
      "https://dn721608.ca.archive.org/0/items/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723-39952351885.jpg",
    back: "https://dn721608.ca.archive.org/0/items/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723-39952352273.jpg",
    cd: "https://dn721608.ca.archive.org/0/items/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723/mbid-dfc4115b-fb81-4ebc-887d-3d9bba16b723-39952352554.jpg",
  },
];
