// let checkDate = () => {
//   let submissionDate = "2023-02-15";
//   let submittedDate = "2023-02-16";

//   return submittedDate <= submissionDate;
// };

// console.log(checkDate());

// if (checkDate() == true) {
//   console.log("Submitted on time");
// }

// switch (checkDate()) {
//   case true:
//     console.log("True");
//   case false:
//     break;
// }

// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

let getLearnerData = (CourseInfo, AssignmentGroup, LearnerSubmission) => {
  const result = [];

  for (let i = 0; i < LearnerSubmissions.length; i++) {
    const submittedAtDate = new Date(
      LearnerSubmission[i].submission.submitted_at
    );
    const dueAtDate = new Date(
      AssignmentGroup.assignments[LearnerSubmission[i].assignment_id - 1].due_at
    );
    const currentDate = new Date();

    if (dueAtDate < currentDate) {
      let submittedAssignment = {};
      let learnerAssignId = LearnerSubmission[i].assignment_id;
      let assignmentId =
        AssignmentGroup.assignments[LearnerSubmission[i].assignment_id - 1].id;

      submittedAssignment["id"] = LearnerSubmission[i].learner_id;

      let pointsPossible =
        AssignmentGroup.assignments[LearnerSubmission[i].assignment_id - 1]
          .points_possible;

      let submissionScore = LearnerSubmission[i].submission.score;

      submittedAssignment[`${LearnerSubmission[i].assignment_id}`] =
        submissionScore / pointsPossible;

      submittedAssignment["avg"] = {};

      if ((learnerAssignId = assignmentId)) {
        if (submittedAtDate > dueAtDate) {
          submittedAssignment["avg"] = (submissionScore / pointsPossible) * 0.9;
        } else {
          submittedAssignment["avg"] = submissionScore / pointsPossible;
        }
      }

      result.push(submittedAssignment);
    }
  }
  return result;
};

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
