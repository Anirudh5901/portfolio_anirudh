export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I develop with a security-first mindset, ensuring smart contracts are robust, auditable, and built with client input at every phase",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Web3 enthusiast with a passion for smart contract development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently doing a UniswapV3 course ",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Decentralised Stable Coin",
    des: "Developed a decentralized USD-pegged stable coin protocol using Solidity smart contracts.",
    img: "/project1.jpg",
    iconLists: [
      "/solidity.png",
      "/Foundry.png",
      "/Openzeppelin.jpg",
      "/Chainlink.png",
    ],
    link: "https://github.com/Anirudh5901/Decentralized_Stable_Coin",
  },
  {
    id: 2,
    title: "NFTfy a NFT Marketplace",
    des: "Developed a full-stack NFT marketplace with Solidity smart contracts and a modern front-end using Next.js, React.js, and Tailwind CSS",
    img: "/project2.jpg.png",
    iconLists: [
      "/next.svg",
      "/solidity.png",
      "/tail.svg",
      "/Javascript.png",
      "/Hardhat.png",
      "/Ethers.png",
    ],
    link: "https://nft-marketplace-nine-sigma.vercel.app/",
  },
  {
    id: 3,
    title: "Cross-Chain Rebase Token",
    des: "Built a cross-chain rebae token with a vault and bridging functionality using Chainlink ccip and CCT standard",
    img: "/project3.png",
    iconLists: [
      "/solidity.png",
      "/Foundry.png",
      "/Chainlink.png",
      "/Openzeppelin.jpg",
    ],
    link: "https://github.com/Anirudh5901/CCRT",
  },
  {
    id: 4,
    title: "Foundry Lottery",
    des: "Developed a decentralized lottery application using Solidity smart contracts with secure randomization",
    img: "/project4.png",
    iconLists: ["/solidity.png", "/Foundry.png", "/Chainlink.png"],
    link: "https://github.com/Anirudh5901/foundry-lottery",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern at Recykal",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Development Intern at Amadeus Labs",
    desc: "Designed and developed an AI/ML airline disruption predictor with a ReactJs, ThreeJs front end",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development Engineer-1 at Amadeus Labs",
    desc: "Resolved client issues for airline reservation and ticketing systems using C++ programming",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Anirudh5901",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/AnirudhAysola",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anirudhaysola/",
  },
];
