
const express=require('express');
const upload = require('../multerConfig'); 

const {  createUser, getUser ,updateUser, createClubActivity, getClubActivities, updateClubActivity,createConsultancy, getConsultancy,updateConsultancy,
     getCocurricular , createCocurricular,updateCocurricularData, createFacultyParticipation, getFacultyParticipation, createInstituteActivityStudent, getInstituteActivityStudent,
     createValueAddedCourse, getValueAddedCourses,createMou, getMou,updateMouData,createProgram, getProgram,updateProgram,createInfrastructure, getInfrastructure,updateInfrastructure,
     createExtracurricularData, getExtracurricularData,createOnlineCourse, getOnlineCourse,createInternship,getInternship,
     createPublished,getPublished,createAwards, getAwards,updateOnlineCourse,createFacultyCourse,getFacultyCourse,updateExtracurricularData,
     updateFacultyCourse,updateInternship,updatePublished,createLecture,getLecture,updateLecture,updateTraining,createTraining,getTraining,
     updateAwards} = require('../Controller/UserController');
const router=express.Router();
router.route("/newUser").post(upload.fields([{ name: 'image1' }, { name: 'image2' }]), createUser );
router.route("/getUser").get(getUser);
router.route("/updateUser/:id").put(upload.fields([{ name: 'image1' }, { name: 'image2' }]), updateUser );

router.route("/newClubActivity").post(upload.fields([{ name: 'image1' }, { name: 'image2' }]), createClubActivity ); 
router.route("/getClubActivity").get(getClubActivities);
router.route("/updateClubActivity/:id").put(upload.fields([{ name: 'image1' }, { name: 'image2' }]), updateClubActivity );
router.route("/newConsultancy").post(createConsultancy); 
router.route("/getConsultancy").get(getConsultancy);
router.route("/updateConsultancy/:id").put(updateConsultancy);
router.route("/newCocurricularEntry").post(createCocurricular); 
router.route("/getCocurricularData").get(getCocurricular);
router.route("/updateCocurricularData/:id").put(updateCocurricularData); 
router.route('/newFacultyParticipation').post(createFacultyParticipation);
router.route('/getFacultyParticipation').get(getFacultyParticipation);
router.route('/newInstituteActivityStudent').post(createInstituteActivityStudent);
router.route('/getInstituteActivityStudent').get(getInstituteActivityStudent);
router.route('/newValueAddedCourse').post(createValueAddedCourse);
router.route('/getValueAddedCourses').get(getValueAddedCourses);
router.post("/newMouData", createMou);
router.get("/getMouData", getMou);
router.post("/newProgram", createProgram);
router.get("/getProgram", getProgram);
router.route("/updateProgram/:id").put(updateProgram);
router.post("/newInfrastructure", createInfrastructure);
router.get("/getInfrastructure", getInfrastructure);
router.route("/updateInfrastructure/:id").put(updateInfrastructure);
router.post("/newExtracurricularData", createExtracurricularData);
router.get("/getExtracurricularData", getExtracurricularData);
router.route("/updateExtracurricularData/:id").put(updateExtracurricularData); 
router.post("/newOnlineCourse", createOnlineCourse);
router.get("/getOnlineCourse", getOnlineCourse);
router.route("/updateOnlineCourse/:id").put(updateOnlineCourse);
router.post("/newInternship", createInternship);
router.get("/getInternship", getInternship);
router.route("/updateInternship/:id").put(updateInternship);
router.post("/newPublished", createPublished);
router.get("/getPublished",getPublished);
router.route("/updatePublished/:id").put(updatePublished);
router.post("/newAwards", createAwards);
router.get("/getAwards", getAwards);
router.route("/updateAwards/:id").put(updateAwards);
router.post("/newFacultyCourse", createFacultyCourse);
router.get("/getFacultyCourse", getFacultyCourse);
router.route("/updateFacultyCourse/:id").put(updateFacultyCourse);
router.route("/updateMouData/:id").put(updateMouData);
router.route("/newLecture").post(createLecture);
router.route("/getLecture").get(getLecture);
router.route("/updateLecture/:id").put(updateLecture);
router.route("/newTraining").post(upload.fields([{ name: 'image1' }, { name: 'image2' }]), createTraining );
router.route("/getTraining").get(getTraining);
router.route("/updateTraining/:id").put(upload.fields([{ name: 'image1' }, { name: 'image2' }]), updateTraining );


router.get('/:imageName', (req, res) => {
     const imageName = req.params.imageName;
     const uploadsFolder = path.join(__dirname, '../uploads');
     const imagePath = path.join(uploadsFolder, imageName);
   
     if (fs.existsSync(imagePath)) {
       res.sendFile(imagePath);
     } else {
       res.status(404).send('Image not found');
     }
   });


module.exports = router;