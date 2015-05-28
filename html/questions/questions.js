var questions;

function SetUpQuestions() {
    var questionList = {
        "questions": [
            { "question": "Which movie would you hear the song 'Hakuna Matata'", "answer": "Lion King", "other1": "Hercules", "other2": "Beauty and the Beast", "other3": "Cinderella", "correct": "", "used": "" },
            { "question": "Which comic strip was written by Charles Schulz?", "answer": "Peanuts", "other1": "Dilbert", "other2": "Archie", "other3": "Spiderman", "correct": "", "used": "" },
            { "question": "Which type of scientist studies and forecasts the weather?", "answer": "Meteorologist", "other1": "Astrologist", "other2": "Astronomer", "other3": "Biologist", "correct": "", "used": "" },
            { "question": "What color would you get if you mixed red and yellow together?", "answer": "Orange", "other1": "Pink", "other2": "Gray", "other3": "Mauve", "correct": "", "used": "" },
            { "question": "Which memorable historical event took place November 22, 1963?", "answer": "JFK's assassination", "other1": "The bombing of Hiroshima", "other2": "The Great Depression began", "other3": "The start of World War 1", "correct": "", "used": "" },
            { "question": "Who was created by Gepetto the woodcarver?", "answer": "Pinnocchio", "other1": "Garfield", "other2": "Vin Diesel", "other3": "Hansel and Gretel", "correct": "", "used": "" },
            { "question": "What is the capital of the state of Louisiana?", "answer": "Baton Rouge", "other1": "Lima", "other2": "New Orleans", "other3": "Voodooville", "correct": "", "used": "" },
            { "question": "In NFL football, where do the Titans call home?", "answer": "Tennessee", "other1": "Texas", "other2": "Baltimore", "other3": "Las Vegas", "correct": "", "used": "" },
            { "question": "Who was the first man to fly in space?", "answer": "Yuri Gagarin", "other1": "Lance Armstrong", "other2": "Sergei Bubka", "other3": "George Jetson", "correct": "", "used": "" },
            { "question": "What is the postal abbreviation for Missouri?", "answer": "MO", "other1": "MI", "other2": "ME", "other3": "MS", "correct": "", "used": "" },
            { "question": "Which Bruce declared he was Born In The USA?", "answer": "Bruce Springsteen", "other1": "Bruce Springfield", "other2": "Bruce Lee", "other3": "Bruce Willis", "correct": "", "used": "" },
            { "question": "Oakland international airport is in which state?", "answer": "California", "other1": "Texas", "other2": "Paris", "other3": "San Antonio", "correct": "", "used": "" },
            { "question": "What kind of electricity can be produced by combing your hair?", "answer": "Static electricity", "other1": "Kinetic Energy", "other2": "Potenti ometers", "other3": "Psychic Energy", "correct": "", "used": "" },
            { "question": "The unit used to measure the strength of a magnetic field is named after which famous scientist?", "answer": "Tesla", "other1": "Newton", "other2": "Curie", "other3": "Rontgen", "correct": "", "used": "" },
            { "question": "What is the human body’s biggest organ?", "answer": "skin", "other1": "brain", "other2": "liver", "other3": "Weenus", "correct": "", "used": "" },
            { "question": "The two holes in your nose are called?", "answer": "Nostrils", "other1": "Dalius Nostramus", "other2": "Straw Catchers", "other3": "Nosalites", "correct": "", "used": "" },
            { "question": "The outside layer of skin on the human body is called the?", "answer": "Epidermis", "other1": "Melatonius", "other2": "Weenus", "other3": "Keratenus", "correct": "", "used": "" },
            { "question": "The bones that make up your spine are called what?", "answer": "Vertebrae", "other1": "Femur tissue", "other2": "Ganymede composites", "other3": "Spinal Lobites", "correct": "", "used": "" },
            { "question": "How many lungs does the human body have?", "answer": "2", "other1": "0", "other2": "1", "other3": "3.267", "correct": "", "used": "" },
            { "question": "What is the closest planet to the Sun?", "answer": "Mercury", "other1": "Mars", "other2": "Earth", "other3": "Sputnik", "correct": "", "used": "" },
            { "question": "What planet is known as the red planet?", "answer": "Mars", "other1": "Rosario 5", "other2": "Earth", "other3": "Mercury", "correct": "", "used": "" },
            { "question": "What is the name of NASA’s most famous space telescope?", "answer": "Hubble Space Telescope", "other1": "Sputnik", "other2": "Guptill 1", "other3": "Andromeda", "correct": "", "used": "" },
            { "question": "What is the name of the first satellite sent into space?", "answer": "Sputnik", "other1": "Voyager 1", "other2": "Hubble", "other3": "Guptill 1", "correct": "", "used": "" },
            { "question": "Earth is located in which galaxy?", "answer": "The Milky Way Galaxy", "other1": "The Ganymede", "other2": "Andromeda 7", "other3": "Earth is not in a galaxy", "correct": "", "used": "" },
            { "question": "How many times have humans been to Mars?", "answer": "0", "other1": "1", "other2": "4", "other3": "13", "correct": "", "used": "" },
            { "question": "When it's midnight in Boston, what time is it in New York?", "answer": "midnight", "other1": "11 PM", "other2": "1 AM", "other3": "4:33 AM", "correct": "", "used": "" },
            { "question": "In 1993 which sport did Michael Jordan give up basketball for?", "answer": "Baseball", "other1": "Hockey", "other2": "Women's Basketball", "other3": "Poker", "correct": "", "used": "" },
            { "question": "Which is the computer named after a fruit?", "answer": "Apple", "other1": "Dell", "other2": "IBM", "other3": "HP", "correct": "", "used": "" },
            { "question": "What is the capital of Peru?", "answer": "Lima", "other1": "There is no capital", "other2": "Rio", "other3": "Peru City", "correct": "", "used": "" },
            { "question": "Who is famous for The Theory of Relativity?", "answer": "Albert Einstein", "other1": "Vin Diesel", "other2": "Sir Isaac Newton", "other3": "Robert Oppenheimer", "correct": "", "used": "" },
            { "question": "Who are the Teenage Mutant Ninja Turtles named after?", "answer": "Renaissance artists", "other1": "Presidents", "other2": "Generals in World War II", "other3": "Vin Diesel's grandparents", "correct": "", "used": "" },
            { "question": "Which American President was an actor?", "answer": "Ronald Reagan", "other1": "All of them are.", "other2": "John Wilkes Booth", "other3": "Andrew Jackson", "correct": "", "used": "" },
            { "question": "Which American state is called the Green Mountain State?", "answer": "Vermont", "other1": "Colorado", "other2": "North Dakota", "other3": "North Carolina", "correct": "", "used": "" },
            { "question": "What is The Union Jack?", "answer": "The national flag of the United Kingdom", "other1": "The confederate flag", "other2": "The most famous pirate ship ever.", "other3": "The house Vin Diesel lives in.", "correct": "", "used": "" },
            { "question": "Which is the deadliest snake in the world?", "answer": "The Black Mamba", "other1": "The Green Mamba", "other2": "The Pink Mamba", "other3": "The Adirondack Rattlesnake", "correct": "", "used": "" },
            { "question": "In baseball, where do the Giants come from?", "answer": "San Francisco", "other1": "Atlanta", "other2": "New Orleans", "other3": "Texas", "correct": "", "used": "" },
            { "question": "In which state is the Grand Canyon?", "answer": "Arizona", "other1": "Texas", "other2": "Nevada", "other3": "Utah", "correct": "", "used": "" },
            { "question": "What are Emmental, Gouda and Camembert examples of?", "answer": "cheese", "other1": "cars", "other2": "motorcycles", "other3": "Indian English colonial provinces", "correct": "", "used": "" },
            { "question": "What character is the most frequently-portrayed character in the history of horror movies?", "answer": "Dracula", "other1": "The Mummy", "other2": "A Werewolf", "other3": "Freddy Kruger", "correct": "", "used": "" },
            { "question": "What is it that prevents the earth's atmosphere from drifting away into space?", "answer": "Gravity", "other1": "Inertia", "other2": "Relativity", "other3": "Coriolis Effect", "correct": "", "used": "" },
            { "question": "The Heisman Trophy is presented in which sport?", "answer": "Football", "other1": "Tennis", "other2": "Baseball", "other3": "Horse Racing", "correct": "", "used": "" },
            { "question": "What was it that turned Peter Parker into the Spiderman?", "answer": "Being bitten by a radioactive spider", "other1": "Ambition", "other2": "A radioactive meteor", "other3": "He was always spiderman from birth.", "correct": "", "used": "" },
            { "question": "In the Superman movies what newspaper does Clark Kent Work for?", "answer": "Daily Planet", "other1": "New York Post", "other2": "Gotham Daily", "other3": "The National Enquirer", "correct": "", "used": "" }
        ]
    };
    questions = questionList.questions;
}