const AssociationData = require("../Model/AssociationData");
exports.createUser=async(req,res)=>{
    try{
        const { date, event, resourcePerson, yearClass, numStudent } = req.body;
        const image1 = req.files.image1 ? req.files.image1[0].path : null; // Get the path of the first image
        const image2 = req.files.image2 ? req.files.image2[0].path : null;
        const associationData =  await AssociationData.create({
            date: new Date(date),
            event,
            resourcePerson,
            yearClass,
            numStudent: Number(numStudent),
            image1,
            image2,
    });
    res.status(201).json(associationData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
};
   
exports.getUser=async(req,res)=>{
     await AssociationData.find()
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ message: "Error fetching users" });
    })
}

exports.updateUser  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, event, resourcePerson, yearClass, numStudent } = req.body;
        const image1 = req.files.image1 ? req.files.image1[0].path : null; 
        const image2 = req.files.image2 ? req.files.image2[0].path : null; 


        const updatedData = await AssociationData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                resourcePerson,
                yearClass,
                numStudent: Number(numStudent),
                image1,
                image2
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const ClubActivityData = require("../Model/ClubActivityData");

exports.createClubActivity = async (req, res) => {
  try {
    const { date, event, clubname, resourcePerson, yearClass, studentNum } = req.body;
    const image1 = req.files.image1 ? req.files.image1[0].path : null; // Get the path of the first image
    const image2 = req.files.image2 ? req.files.image2[0].path : null;

    const clubActivityData = await ClubActivityData.create({
      date: new Date(date),
      event,
      clubname,
      resourcePerson,
      yearClass,
      studentNum: Number(studentNum),
      image1,
      image2,
    });

    res.status(201).json(clubActivityData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating club activity" });
  }
};

exports.getClubActivities = async (req, res) => {
  try {
    const data = await ClubActivityData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching club activities" });
  }
};

exports.updateClubActivity  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, event, clubname, resourcePerson, yearClass, studentNum } = req.body;
         const image1 = req.files.image1 ? req.files.image1[0].path : null; 
         const image2 = req.files.image2 ? req.files.image2[0].path : null; 

        const updatedData = await ClubActivityData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                clubname,
                resourcePerson,
                yearClass,
                studentNum: Number(studentNum),
                image1,
                image2,
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const ConsultancyData = require("../Model/ConsultancyData");

exports.createConsultancy = async (req, res) => {
  try {
    const { date, event, companyname, resourcePerson, amount, status } = req.body;
    // const image1 = req.files.image1[0].path; 
    // const image2 = req.files.image2[0].path;

    const consultancyData = await ConsultancyData.create({
      date: new Date(date),
      event,
      companyname,
      resourcePerson,
      amount,
      status,
    });

    res.status(201).json(consultancyData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating consultancy activity" });
  }
};

exports.getConsultancy = async (req, res) => {
  try {
    const data = await ConsultancyData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching consultancy activities" });
  }
};

exports.updateConsultancy  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, event, companyname, resourcePerson, amount, status } = req.body;

        const updatedData = await ConsultancyData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                companyname,
                resourcePerson,
                amount,
                status,
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const CocurricularActivityData = require("../Model/CocurricularActivityData");

exports.createCocurricular = async (req, res) => {
    try {
        const {date,  event,  resourcePerson, yearClass, organizedBy, prizeDetails ,studentNameRegNo} = req.body;
            const cocurricularActivityData = await CocurricularActivityData.create({
            date: new Date(date),
            event,
            resourcePerson,
            yearClass,
            organizedBy,
            prizeDetails,
            studentNameRegNo,
           
        });

        res.status(201).json(cocurricularActivityData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating co-curricular activity entry" });
    }
};

exports.getCocurricular = async (req, res) => {
    try {
        const data = await CocurricularActivityData.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching co-curricular activity entries" });
    }
};

exports.updateCocurricularData  = async (req, res) => {
    try {
        const {id} = req.params;
        const {  date,  event,  resourcePerson, yearClass, organizedBy, prizeDetails ,studentNameRegNo} = req.body;

        const updatedData = await CocurricularActivityData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                resourcePerson,
                yearClass,
                organizedBy,
                prizeDetails,
                studentNameRegNo,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const FacultyParticipationData = require("../Model/FacultyParticipationData");

// Create a new faculty participation entry
exports.createFacultyParticipation = async (req, res) => {
    try {
        const { date, title, facultyNameDesignation, event, organizedBy, eventDetails } = req.body;
        
        // Uncomment the following lines if you handle file uploads
        // const image1 = req.files.image1 ? req.files.image1[0].path : null;
        // const image2 = req.files.image2 ? req.files.image2[0].path : null;

        const facultyData = await FacultyParticipationData.create({
            date: new Date(date),
            title,
            facultyNameDesignation,
            event,
            organizedBy,
            eventDetails,
            // image1,
            // image2,
        });

        res.status(201).json(facultyData);
    } catch (err) {
        console.error("Error creating faculty entry:", err);
        res.status(500).json({ message: "Error creating faculty entry" });
    }
};

// Get all faculty participation entries
exports.getFacultyParticipation = async (req, res) => {
    try {
        const data = await FacultyParticipationData.find();
        res.status(200).json(data);
    } catch (err) {
        console.error("Error fetching faculty entries:", err);
        res.status(500).json({ message: "Error fetching faculty entries" });
    }
};


const InstituteActivityStudent = require("../Model/InstituteActivityStudent");

exports.createInstituteActivityStudent = async (req, res) => {
    try {
        const { date, event, resourcePerson, yearClass, numStudent, professionalSociety } = req.body;
        // const image1 = req.files.image1[0].path; 
        // const image2 = req.files.image2[0].path;
        
        const instituteActivityStudentData = await InstituteActivityStudent.create({
            date: new Date(date),
            event,
            resourcePerson,
            yearClass,
            numStudent: Number(numStudent),
            professionalSociety,
        });
        
        res.status(201).json(instituteActivityStudentData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating institute activity student entry" });
    }
};

exports.getInstituteActivityStudent = async (req, res) => {
    try {
        const data = await InstituteActivityStudent.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching institute activity student entries" });
    }
};


const ValueAddedCourseData = require("../Model/ValueAddedCourseData"); // Assuming the model is named ValueAddedCourseData

// Create a new value-added course entry
exports.createValueAddedCourse = async (req, res) => {
    try {
        const { date,yearclass,nameregno,vacname,organizedby,grade,title } = req.body;
        // Create a new entry with the provided data
        const valueAddedCourseData = await ValueAddedCourseData.create({
            date: new Date(date),
            yearclass,
            nameregno,
            vacname,
            organizedby,
            grade,
            title,
        });
        res.status(201).json(valueAddedCourseData);
    } catch (err) {
        console.error("Error creating value-added course data:", err);
        res.status(500).json({ message: "Error creating value-added course entry" });
    }
};
exports.getValueAddedCourses = async (req, res) => {
    try {
        const valueAddedCourses = await ValueAddedCourseData.find();
        res.json(valueAddedCourses);
    } catch (err) {
        console.error("Error fetching value-added courses:", err);
        res.status(500).json({ message: "Error fetching value-added courses" });
    }
};

const MouData = require("../Model/MouData");

// Controller to create a new MoU entry
exports.createMou = async (req, res) => {
    try {
        const { date, event, companyname, resourcePerson, yearClass, studentNum } = req.body;

        const mouData = await MouData.create({
            date: new Date(date),
            event,
            companyname,
            resourcePerson,
            yearClass,
            studentNum: Number(studentNum),
        });

        res.status(201).json(mouData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating MoU entry" });
    }
};
// Controller to fetch all MoU entries
exports.getMou = async (req, res) => {
    try {
        const data = await MouData.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching MoU entries" });
    }
};

exports.updateMouData  = async (req, res) => {
    try {
        const {id} = req.params;
        const {  date, event, companyname, resourcePerson, yearClass, studentNum} = req.body;

        const updatedData = await MouData.findByIdAndUpdate(
            id,
            {
            date: new Date(date),
            event,
            companyname,
            resourcePerson,
            yearClass,
            studentNum: Number(studentNum),
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const ProgramData = require("../Model/ProgramData");

// Create a new program entry
exports.createProgram = async (req, res) => {
    try {
        const { date, event, resourcePerson, programename, benefited } = req.body;
        // const image1 = req.files.image1[0].path;
        // const image2 = req.files.image2[0].path;

        const programData = await ProgramData.create({
            date: new Date(date),
            event,
            resourcePerson,
            programename,
            benefited,
            // image1,
            // image2,
        });

        res.status(201).json(programData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating program entry" });
    }
};

// Get all program entries
exports.getProgram = async (req, res) => {
    try {
        const programs = await ProgramData.find();
        res.json(programs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching programs" });
    }
};

exports.updateProgram  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, event, resourcePerson, programename, benefited} = req.body;

        const updatedData = await ProgramData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                resourcePerson,
                programename,
                benefited,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const InfrastructureData = require("../Model/InfrastructureData");

// Create a new infrastructure entry
exports.createInfrastructure = async (req, res) => {
    try {
        const { date, infrastructure, remarks } = req.body;

        const infrastructureData = await InfrastructureData.create({
            date: new Date(date),
            infrastructure,
            remarks,
        });

        res.status(201).json(infrastructureData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating infrastructure entry" });
    }
};

// Get all infrastructure entries
exports.getInfrastructure = async (req, res) => {
    try {
        const infrastructures = await InfrastructureData.find();
        res.json(infrastructures);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching infrastructure data" });
    }
};

exports.updateInfrastructure  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, infrastructure,remarks } = req.body;

        const updatedData = await InfrastructureData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                infrastructure,
                remarks,
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
}; 

const ExtracurricularActivity = require("../Model/ExtracurricularActivityData");

// Create a new extracurricular activity entry
exports.createExtracurricularData = async (req, res) => {
    try {
        const { date, event, resourcePerson, yearClass, studentNameRegNo, organizedBy, prizeDetails } = req.body;

        const activityData = await ExtracurricularActivity.create({
            date,
            event,
            resourcePerson,
            yearClass,
            studentNameRegNo,
            organizedBy,
            prizeDetails,
        });

        res.status(201).json(activityData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating extracurricular activity entry" });
    }
};

// Get all extracurricular activity entries
exports.getExtracurricularData = async (req, res) => {
    try {
        const activities = await ExtracurricularActivity.find();
        res.json(activities);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching extracurricular activities data" });
    }
};

exports.updateExtracurricularData  = async (req, res) => {
    try {
        const {id} = req.params;
        const {  date,  event,  resourcePerson, yearClass, organizedBy, prizeDetails ,studentNameRegNo} = req.body;

        const updatedData = await ExtracurricularActivity.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                resourcePerson,
                yearClass,
                organizedBy,
                prizeDetails,
                studentNameRegNo,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const OnlineCourseData = require("../Model/OnlineCourseData");

exports.createOnlineCourse = async (req, res) => {
    try {
        const { date, platform, studentNameRegno, course, register, score } = req.body;
        // const image1 = req.files?.image1 ? req.files.image1[0].path : null;
        
        const onlineCourseData = await OnlineCourseData.create({
            date: new Date(date),
            platform,
            studentNameRegno,
            course,
            register,
            score,
            // image1,
        });
        
        res.status(201).json(onlineCourseData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating course" });
    }
};

exports.getOnlineCourse = async (req, res) => {
    try {
        const data = await OnlineCourseData.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching courses" });
    }
};

exports.updateOnlineCourse  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, platform, studentNameRegno, course, register, score } = req.body;

        const updatedData = await OnlineCourseData.findByIdAndUpdate(
            id,
            {
            date: new Date(date),
            platform,
            studentNameRegno,
            course,
            register,
            score,
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const InternshipData = require("../Model/InternshipData");

// Create a new internship entry
exports.createInternship = async (req, res) => {
    try {
        const { date, title, studentname, yearClass, completed, internshipDate} = req.body;
        const internshipData = await InternshipData.create({
            date: new Date(date),
            title,
            studentname,
            yearClass,
            completed,
            internshipDate,
        });

        res.status(201).json(internshipData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating internship data" });
    }
};


exports.getInternship = async (req, res) => {
    try {
        const internships = await InternshipData.find();
        res.json(internships);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching internships" });
    }
};

exports.updateInternship  = async (req, res) => {
    try {
        const {id} = req.params;
        const {  date, title, studentname, yearClass, completed, internshipDate} = req.body;

        const updatedData = await InternshipData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                title,
                studentname,
                yearClass,
                completed,
                internshipDate,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const PublicationData = require("../Model/PublicationData");

exports.createPublished = async (req, res) => {
    try {
        const { date, title, studentReg, yearClass, published, conference, volume, journalName } = req.body;
        // If you have images, make sure to handle file uploads (e.g., using multer).
        // const image1 = req.files.image1[0].path;
        // const image2 = req.files.image2[0].path;

        // Create the new published data entry
        const publicationData = await PublicationData.create({
            date: new Date(date),
            title,
            studentReg,
            yearClass,
            published,
            conference,
            volume,
            journalName,
        });

        // Respond with the created data
        res.status(201).json(publicationData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating publication data" });
    }
};

exports.getPublished = async (req, res) => {
    try {
        const publishedData = await PublicationData.find();
        res.json(publishedData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching published data" });
    }
};

exports.updatePublished  = async (req, res) => {
    try {
        const {id} = req.params;
        const {  date, title, studentReg, yearClass, published, conference, volume, journalName} = req.body;

        const updatedData = await PublicationData.findByIdAndUpdate(
            id,
            {
            date: new Date(date),
            title,
            studentReg,
            yearClass,
            published,
            conference,
            volume,
            journalName,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const Awards = require("../Model/AwardsData");

exports.createAwards = async (req, res) => {
    try {
        const { date, event, studentRegno, yearClass, organized, price } = req.body;

        const awardData = await Awards.create({
            date: new Date(date),
            event,
            studentRegno,
            yearClass,
            organized,
            price,
        });

        res.status(201).json(awardData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating award entry" });
    }
};

exports.getAwards = async (req, res) => {
    await Awards.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Error fetching awards" });
        });
};

exports.updateAwards = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, event, studentRegno, yearClass, organized, price } = req.body;

        const updatedLecture = await Awards.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                event,
                studentRegno,
                yearClass,
                organized,
                price,
            },
            { new: true } 
        );

        res.status(200).json(updatedLecture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating lecture" });
    }
};


const Tour = require("../Model/TourData");

// Create a new tour entry
exports.createTour = async (req, res) => {
    try {
        const { date, visit, namePlace, yearClass, benefited } = req.body;

        const tourData = await Tour.create({
            date: new Date(date),
            visit,
            namePlace,
            yearClass,
            benefited,
        });

        res.status(201).json(tourData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating tour entry" });
    }
};

exports.getTour = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching tour entries" });
    }
};

const FacultyCourseData = require("../Model/FacultyCourseData");

// Create a new faculty course entry
exports.createFacultyCourse = async (req, res) => {
    try {
        const { date, platform, studentNameRegno, course, register, score } = req.body;

        const facultyCourseData = await FacultyCourseData.create({
            date: new Date(date),
            platform,
            studentNameRegno,
            course,
            register,
            score,
        });

        res.status(201).json(facultyCourseData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating faculty course entry" });
    }
};

// Get all faculty course entries
exports.getFacultyCourse = async (req, res) => {
    try {
        const facultyCourses = await FacultyCourseData.find();
        res.json(facultyCourses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching faculty course entries" });
    }
};

exports.updateFacultyCourse  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, platform, studentNameRegno, course, register, score  } = req.body;

        const updatedData = await FacultyCourseData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                platform,
                studentNameRegno,
                course,
                register,
                score,
            },
            { new: true } 
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

const FacultyLecture = require("../Model/FacultyLecture");

// Create a new Faculty Lecture
exports.createLecture = async (req, res) => {
    try {
        const { date, title, designation, event, organizedby } = req.body;

        const facultyLecture = await FacultyLecture.create({
            date: new Date(date),
            title,
            designation,
            event,
            organizedby,
        });

        res.status(201).json(facultyLecture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating lecture" });
    }
};

// Get all Faculty Lectures
exports.getLecture = async (req, res) => {
    try {
        const lectures = await FacultyLecture.find();
        res.status(200).json(lectures);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching lectures" });
    }
};

// Update a Faculty Lecture
exports.updateLecture = async (req, res) => {
    try {
        const { id } = req.params;
        const { date, title, designation, event, organizedby } = req.body;

        const updatedLecture = await FacultyLecture.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                title,
                designation,
                event,
                organizedby,
            },
            { new: true } 
        );

        res.status(200).json(updatedLecture);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating lecture" });
    }
};


const TrainingData = require("../Model/trainingSchema");
exports.createTraining=async(req,res)=>{
    try{
        const { date, resourcePerson, trainingNature, yearClass, numOfDays} = req.body;
        const image1 = req.files.image1 ? req.files.image1[0].path : null; // Get the path of the first image
        const image2 = req.files.image2 ? req.files.image2[0].path : null; 
        const trainingData = await TrainingData.create({
            date: new Date(date),
            resourcePerson,
            trainingNature,
            yearClass,
            numOfDays: Number(numOfDays),
            image1,
            image2
        });
    res.status(201).json(trainingData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating user" });
    }
};
   

exports.getTraining=async(req,res)=>{
     await TrainingData.find()
    .then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ message: "Error fetching users" });
    })
}

exports.updateTraining  = async (req, res) => {
    try {
        const {id} = req.params;
        const { date, resourcePerson, trainingNature, yearClass, numOfDays} = req.body;      
        const image1 = req.files.image1 ? req.files.image1[0].path : null; 
        const image2 = req.files.image2 ? req.files.image2[0].path : null; 
        const updatedData = await TrainingData.findByIdAndUpdate(
            id,
            {
                date: new Date(date),
                resourcePerson,
                trainingNature,
                yearClass,
                numOfDays: Number(numOfDays),
                image1,
                image2
            },
            { new: true } // Return the updated document
        );

        res.status(200).json(updatedData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};