import av1 from './../img/av1.jpg'
import av2 from './../img/av2.jpeg'
import av3 from './../img/v3.jpg'
import av4 from './../img/v4.jpg'
import av5 from './../img/av5.png'

const candidates = [
    {
      name: "Cameron Williamson",
      image: av1,

      rating: 4.9,
      available: true,

      stages: "Shortlist",
      color: 'cyan',
      progress: 2,

      date: "01 March, 2022",
      owner: "Annette Black",
      ownerIMG: av5
    },
    {
      name: "Savannah Nguyen",
      image: av2,

      rating: 4.7,
      available: true,

      stages: "Interview",
      color: 'red',
      progress: 2,

      date: "02 March, 2022",
      owner: "Courtney Henry",
      ownerIMG: av4
    },
    {
      name: "Darlene Robertson",
      image: av3,

      rating: "0.0",
      available: false,

      stages: "New Applied",
      color: 'yellow',
      progress: 3,

      date: "03 March, 2022",
      owner: "Arlene McCoy",
      ownerIMG: av2
    },
    {
      name: "Leslie Alexander",
      image: av4,

      rating: 4.9,
      available: true,

      stages: "Test",
      color: 'blue',
      progress: 4,

      date: "04 March, 2022",
      owner: "Jane Cooper",
      ownerIMG: av1
    },
    {
      name: "Albert Flores",
      image: av5,

      rating: 5.0,
      available: true,

      stages: "Design Challenge",
      color: 'green',
      progress: 5,

      date: "05 March, 2022",
      owner: "Bessie Cooper",
      ownerIMG: av3
    },
    {
      name: "Dianne Russell",
      image: av3,

      rating: "0.0",
      available: false,

      stages: "Shortlist",
      color: 'cyan',
      progress: 2,

      date: "06 March, 2022",
      owner: "Leslie Alexander",
      ownerIMG: av1
    },
    {
      name: "Robert Fox",
      image: av1,

      rating: 4.9,
      available: true,

      stages: "Interview",
      color: 'red',
      progress: 3,

      date: "07 March, 2022",
      owner: "Kathryn Murphy",
      ownerIMG: av3
    },
    {
      name: "Leslie Alexander",
      image: av2,

      rating: 2.4,
      available: true,

      stages: "Shortlist",
      color: 'cyan',
      progress: 4,

      date: "08 March, 2022",
      owner: "Jenny Wilson",
      ownerIMG: av4
    },
    {
      name: "Darrell Steward",
      image: av4,

      rating: 3.9,
      available: true,

      stages: "Design Challenge",
      color: 'green',
      progress: 6,

      date: "09 March, 2022",
      owner: "Ronald Richards",
      ownerIMG: av2
    },
    {
      name: "Arlene McCoy",
      image: av5,

      rating: "0.0",
      available: false,

      stages: "Shortlist",
      color: 'red',
      progress: 2,

      date: "10 March, 2022",
      owner: "Devon Lane",
      ownerIMG: av1
    }
  ];
  
  export default candidates;
  