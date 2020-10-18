import mock from 'src/utils/mock';

mock.onGet('/api/resume').reply(() => {
  const resume = {
    "main": {
      "title": 'Doing things differently',
      "name": "Jonathan Vargas",
      "description": "I am passionated about innovation and entrepreneurship as well as disruptive technologies and their application for the benefit of society. I am always ready to help you turn your ideas into technological products.",
      "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1602958453/wordpress_Jonathan/Jonathan_Vargas_o82npf.png",
      "bio": "Hello, my name is Jonathan. I am a 27-year-old engineer, passionate about innovation and entrepreneurship as well as disruptive technologies and their application for the benefit of society. Many times self-taught so I have extensive knowledge of various disciplines. The activities in my charge I carry out with a lot of energy and enthusiasm, always seeking to obtain the best result. I have worked both as a researcher and as a consultant in projects that require incorporating technological solutions in their products.",
      "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
      "email": "jonathan.vargas1104@gmail.com",
      "phone": "",
      "github": "https://github.com/jonra1993",
      "address": {
        "street": "",
        "city": "Quito",
        "state": "-Ecuador",
        "zip": "170702"
      },
      "website": "http://jrtec.io",
      "resumedownload": "files/english-1.pdf",
      "social": [
        {
          "name": "linkedin",
          "url": "https://www.linkedin.com/in/jonathan-ramiro-vargas-suasnavas-a29752b5/",
          "iconName": "fab fa-linkedin",
          "color": '#157CB6'
        },
        {
          "name": "instagram",
          "url": "https://www.instagram.com/jona.ra/?hl=es-la",
          "iconName": "fab fa-instagram",
          "color": '#C93093'
        },
        {
          "name": "github",
          "url": "https://github.com/jonra1993",
          "iconName": "fab fa-github",
          "color": '#24292E'
        },
        {
          "name": "Upwork",
          "url": "https://www.upwork.com/fl/jonathanvargas21",
          "iconName": "fa fa-suitcase",
          "color": '#6FDA44'
        }
      ]
    },
    "resume": {
      "skillmessage": "",
      "education": [
        {
          "institution": "Escuela Politécnica Nacional",
          "title": "Electronics and Control Engineering",
          "years": "Febraury 2018",
          "description": ""
        },
        {
          "institution": "Instituto Nacional Mejía",
          "title": "Degree of Science specialty Physics - Mathematics",
          "years": "June 2011",
          "description": ""
        }
      ],
      "work": [
        {
          "institution": "JRTEC",
          "title": "CEO",
          "years": "November 2019 - Present",
          "description": "At JRTEC I have activities under may charge focused in opening new markets and managing of projects."
        },
        {
          "institution": "Upwork",
          "title": "Technology consultant",
          "years": "May 2018 - Present",
          "description": "As freelance since 2018, I have been working in projects involving iot technologies as MQTT, ROS, web design (python, javascript with reactjs), mobile development (React Native), docker containers, git, linux environments, embedded systems (Arduino, ESP32 and Raspberry pi 3). I have worked in 3D vision using stereoscopic cameras (ZED, Intel Real sense) and LiDARs (Hokuyo, Rplidar, Benewake and Ydlidar)."
        },
        {
          "institution": "Escuela Politécnica Nacional",
          "title": "Research assistant",
          "years": "April 2016 - May 2018",
          "description": "As a research assistant, I had activities under my charge involving 3D reconstruction, Stereoscopic cameras, C ++ programming (Qt), Linux, Neural networks and machine learning with python, 2D and 3D processing."
        },
        {
          "institution": "Keyco",
          "title": "Intern",
          "years": "June - August 2015",
          "description": "Assembly of electronic boards (PCBs) for elevators and assistance in the area of ​​electronic design"
        }
      ],
      "skills": [
        {
          "name": "English",
          "level": 80
        },
        {
          "name": "Python",
          "level": 70
        },
        {
          "name": "ReactJs",
          "level": 70
        },
        {
          "name": "React Native",
          "level": 80
        },
        {
          "name": "Wordpress",
          "level": 70
        },
        {
          "name": "C++",
          "level": 60
        },
        {
          "name": "ROS",
          "level": 70
        },
        {
          "name": "AWS Services",
          "level": 67
        },
        {
          "name": "Embedded systems (Arduino Raspberry)",
          "level": 85
        }
      ]
    },
    "portfolio": [
      {
        "title": "Cam3D",
        "category": "Android application focused on adding functionality to packaging, connects consumers with useful content of a product.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398518/wordpress_Jonathan/cam3D2-1.png",
        "url": "https://play.google.com/store/apps/details?id=com.JRtec.Cam3D"
      },
      {
        "title": "Lev3D",
        "category": "Interactive cards using augmented reality, its system allows the 3D models to be loaded dynamically since they can be downloaded over the internet allowing the size of the application to be reduced. The Lev3D application can be found in the google play store.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398513/wordpress_Jonathan/portfolio13.jpg",
        "url": "https://play.google.com/store/apps/details?id=com.JRtec.Lev3D"
      },
      {
        "title": "Nav3D",
        "category": "This is an undertaking of Christmas cards using augmented reality thanks to the application for android devices Nav3D. There are 5 different models with a different animation in three dimensions alluding to Christmas.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398545/wordpress_Jonathan/portfolio12.jpg",
        "url": "https://play.google.com/store/apps/details?id=com.JRtec.Nav3d"
      },
      {
        "title": "AUDIO Run",
        "category": "This project was developed for the blind athlete Luis Calo, in collaboration with Banco General Rumiñahui and Santuario agency. It consists of an obstacle detector and an android application “AUDIO Run”, the same one that allows the athlete to guide him through a track through an audio controller.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398513/wordpress_Jonathan/portfolio11.jpg",
        "url": "https://youtu.be/1q-popOcQ5A"
      },
      {
        "title": "3D Stereoscopic",
        "category": "This was my final project to earn my degree as an electronics and control engineer. It consisted of performing a 3D reconstruction using the ZED stereoscopic camera to locate the closest obstacle within a scene. This work was part of the PIMI-1512 project of the National Polytechnic School.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398535/wordpress_Jonathan/portfolio10.jpg",
        "url": "https://jonra1993.github.io/3D-Stereoscopic/"
      },
      {
        "title": "3D LiDAR",
        "category": "This research project was carried out within the PIMI-1512 project of the National Polytechnic School. It focuses on performing a 3D LiDAR reconstruction of an environment to find the closest object. For which it uses a Raspberry pi 3, python and a Hokuyo laser",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398515/wordpress_Jonathan/portfolio9.jpg",
        "url": "https://jonra1993.github.io/3D-LiDAR/"
      },
      {
        "title": "Serial Video",
        "category": "This is a practical serial communication project between a web application using Nodejs and an Arduino board. By means of a button connected to the arduino board, a signal is sent to the web application to show a specific video.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398514/wordpress_Jonathan/portfolio8.jpg",
        "url": "https://jonra1993.github.io/VideoSerial/"
      },
      {
        "title": "Videobooth",
        "category": "This project was made to be implemented in an advertising campaign. It is a videobooth capable of recording video and saving it in the local memory of the device in webm format, it also incorporates some filters by default. Understand the use of HTML5, JavaScript, and css.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398517/wordpress_Jonathan/portfolio7.jpg",
        "url": "https://jonra1993.github.io/VideoBooth/"
      },
      {
        "title": "Projects using Arduino",
        "category": "This project contemplates the use of the Arduino board to carry out practical exercises such as a bar-ball controller, temperature controller, bluetooth connection, among others.",
        "image": "images/portfolio/arduino2.png",
        "url": "https://jonra1993.github.io/Arduino_Examples/"
      },
      {
        "title": "Arduino Course",
        "category": "In this project you will find both documentation and example codes for the Arduino board. This material served as a guide for the training of some members of the robotics club of the National Polytechnic School.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398519/wordpress_Jonathan/portfolio3.jpg",
        "url": "https://jonra1993.github.io/Arduino_Course/"
      },
      {
        "title": "Xmega Microcontrollers",
        "category": "Practical examples using Xmega microcontrollers from the Atmel AVR family, using Atmel Studio software with its ASF module. These examples cover basic and complex topics such as timers, serial communication, PMWs, ADC, DAC, among others.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398520/wordpress_Jonathan/portfolio2.jpg",
        "url": "https://jonra1993.github.io/Xmega_Examples/"
      },
      {
        "title": "Atmega Microcontrollers",
        "category": "Practical examples using Atmega type microcontrollers (328P and 164P). The software used was Atmel Studio 7.2.",
        "image": "https://res.cloudinary.com/dnv0qwkrk/image/upload/v1601398520/wordpress_Jonathan/portfolio1.jpg",
        "url": "https://jonra1993.github.io/Atmega_Examples/"
      }
    ],
    "testimonials": [
      {
        "author": "Mark Twain",
        "phrase": "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did. So let go. Sail away from the safe harbor. Catch the trade winds in your sails. Explore, dream, discover."
      }
    ]
  }

  return [200, { resume }];
});