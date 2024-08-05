interface Question { 
  id: string,
  question: string,
  option: string[],
  answer: string,
  // option?: string,
  answerExplanation?: string
}

export const questions = [
    {
      // id: "74b26123-bf3d-4aa6-8fb5-6f86b8d9032e",
      question: 'In 1933, He Founded Philippine Architects Society (PAS) Which was later called Philippine Institute of Architects (PIA) in 1945.',
      options: ['Juan Nakpil', 'Francisco Mañosa', 'Leandro Locsin', 'Juan Arellano'],
      answer: 'Juan Nakpil'
    },
    {
      // id: "faf1fa26-8db7-4359-9d06-c4c4cf5ea7dc",
      question: 'Which of the three pyramid of Giza is the biggest?',
      options: ['Khufu', 'Cheops', 'Khafre'],
      answer: 'Khufu'
    },
    {
      // id: "962539aa-1318-40a9-95fc-3f90140e3442",
      question: 'Designed by Angel Nakpil, this is the High Rise Building in the Philippines',
      options: ['Manila Peninsula', 'Manila Hotel', 'Burke Building', 'Picache Building'],
      answer: 'Picache Building'
    },
    {
      // id: "bcae8d8f-db9c-4eac-8fb2-0d3e5a77e0ec",
      question: 'Considered as the most beautiful street?',
      options: ['Taj Mahal Road', 'Shibuya Crossing', 'The Line', "Champs Elysees"],
      answer: 'Champs Elysees'
    },
    {
      // id: '5932f002-709b-4d24-9808-0be4f3343ca5',
      question: 'A gallery or arcade above the arches of the nave, choir, and transepts of a church.',
      options: ['Nave', 'Triforium', 'Aisle', 'Ambulatory'],
      answer: 'Triforium'
    },
    {
      // id: 'f6e95131-6d08-4548-b57f-ddd4b84ef610',
      question: 'Architect of the Iglesia ni Cristo Central',
      options: ['Juan Nakpil', 'Carlos Santos Viola', 'Juan Arellano', 'Pablo Antonio'],
      answer: 'Carlos Santos Viola'
    },
    {
      // id: 'a53344b0-40bf-4275-a4db-606cfc450de2',
      question: 'When is summer solstice?',
      options: ['June 21', 'May 28', 'July 21', 'May 21'],
      answer: 'June 21'
    },
    {
      // id: '788a3f49-b873-43db-9ec1-5b3e90bda4ea',
      question: 'First to design the St Peter\'s Basilica in the form of a Greek Cross. His design form is to have a central dome be surrounded by four lower domes at the diagonal axes.',
      options: ['Antoni Gaudi', 'Donato Bramante', 'Marcus Vitruvius Pollio', 'Simone da Orsenigo'],
      answer: 'Donato Bramante'
    },
    {
      // id: '3ed44378-9099-4afc-bf80-c76010cce338',
      question: 'Architect of the first manila City Hall',
      options: ['Edgar Bourne', 'Antonio Toledo', 'Juan Nakpil', 'Leandro Locsin'],
      answer: 'Edgar Bourne'
    },
  ]